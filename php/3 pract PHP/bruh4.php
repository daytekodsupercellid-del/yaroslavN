<?php
$result = "";

$prices = [
    "Телефон" => 10000,
    "Ноутбук" => 25000,
    "Навушники" => 2000
];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Очистка даних
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $product = $_POST["product"];
    $quantity = intval($_POST["quantity"]);

    // Перевірка email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $result = "Некоректний email!";
    }
    // Перевірка кількості
    elseif ($quantity < 1 || $quantity > 100) {
        $result = "Кількість повинна бути від 1 до 100!";
    }
    else {
        $price = $prices[$product];
        $total = $price * $quantity;

        $result = "
        <h3>Підсумок замовлення:</h3>
        Ім'я: " . htmlspecialchars($name) . "<br>
        Email: " . htmlspecialchars($email) . "<br>
        Товар: " . htmlspecialchars($product) . "<br>
        Кількість: $quantity <br>
        Сума: $total грн
        ";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Замовлення</title>
</head>
<body>

<h2>Замовлення товару</h2>

<form method="post">
    Ім'я: <input type="text" name="name" required><br><br>
    Email: <input type="email" name="email" required><br><br>

    Товар:
    <select name="product">
        <option>Телефон</option>
        <option>Ноутбук</option>
        <option>Навушники</option>
    </select><br><br>

    Кількість:
    <input type="number" name="quantity" min="1" max="100" required><br><br>

    <button type="submit">Замовити</button>
</form>

<div><?php echo $result; ?></div>

</body>
</html>