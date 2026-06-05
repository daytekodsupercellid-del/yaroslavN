
<?php

#[Attribute]
class ValidatePassword {
    public function __construct() {}
}

$failedAttempts = 0;

#[ValidatePassword]
function isStrongPassword($password) {
    global $failedAttempts;

    $isValid = preg_match('/[A-Z]/', $password) &&
               preg_match('/[0-9]/', $password) &&
               strlen($password) >= 8;

    if (!$isValid) {
        $failedAttempts++;
    }

    return $isValid;
}

function generatePassword($length, $callback) {
    $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    
    do {
        $password = '';
        for ($i = 0; $i < $length; $i++) {
            $password .= $chars[random_int(0, strlen($chars) - 1)];
        }
    } while (!$callback($password));

    return $password;
}

$passwords = [];

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $count = $_POST["count"];
    $length = $_POST["length"];

    for ($i = 0; $i < $count; $i++) {
        $passwords[] = generatePassword($length, 'isStrongPassword');
    }
}
?>

<form method="POST">
    Кількість: <input type="number" name="count" required><br>
    Довжина: <input type="number" name="length" required><br>
    <button type="submit">Згенерувати</button>
</form>

<?php foreach ($passwords as $p): ?>
    <p><?= htmlspecialchars($p) ?></p>
<?php endforeach; ?>

<p>Невдалих спроб: <?= $failedAttempts ?></p>