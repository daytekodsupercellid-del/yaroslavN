<?php
$message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Очистка даних
    $login = trim($_POST["login"]);
    $password = trim($_POST["password"]);
    $confirm = trim($_POST["confirm"]);

    // Перевірка логіну (тільки букви і цифри)
    if (!preg_match("/^[a-zA-Z0-9]+$/", $login)) {
        $message = "Логін не повинен містити спецсимволів!";
    }
    // Перевірка через filter_var (наприклад як рядок)
    elseif (!filter_var($login, FILTER_SANITIZE_STRING)) {
        $message = "Некоректний логін!";
    }
    // Перевірка паролів
    elseif ($password !== $confirm) {
        $message = "Паролі не співпадають!";
    }
    else {
        $message = "✅ Реєстрація успішна!";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Реєстрація</title>
</head>
<body>

<h2>Реєстрація</h2>

<form method="post">
    Логін: <input type="text" name="login" required><br><br>
    Пароль: <input type="password" name="password" required><br><br>
    Підтвердження: <input type="password" name="confirm" required><br><br>
    <button type="submit">Зареєструватися</button>
</form>

<p><?php echo htmlspecialchars($message); ?></p>

</body>
</html>