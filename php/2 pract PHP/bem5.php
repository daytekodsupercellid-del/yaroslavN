<?php

#[Attribute]
class Validator {
    public function __construct(public $name) {}
}

$logs = [];

function logValidator($name) {
    global $logs;
    $logs[] = $name;
}

#[Validator(name: "required")]
function required($value) {
    logValidator("required");
    return !empty($value);
}

#[Validator(name: "email")]
function isValidEmail($value) {
    logValidator("email");
    return filter_var($value, FILTER_VALIDATE_EMAIL);
}

#[Validator(name: "minLength")]
function minLength($value, $min = 6) {
    logValidator("minLength");
    return strlen($value) >= $min;
}

function validateForm($data, $rules) {
    $errors = [];

    foreach ($rules as $field => $callbacks) {
        foreach ($callbacks as $callback) {
            if (!$callback($data[$field])) {
                $errors[$field][] = "Помилка";
            }
        }
    }

    return $errors;
}

$errors = [];

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = $_POST;

    $rules = [
        "name" => ["required"],
        "email" => ["required", "isValidEmail"],
        "password" => ["required", fn($v) => minLength($v, 6)]
    ];

    $errors = validateForm($data, $rules);
}
?>

<form method="POST">
    Ім’я: <input name="name">
    <?= $errors["name"][0] ?? "" ?><br>

    Email: <input name="email">
    <?= $errors["email"][0] ?? "" ?><br>

    Пароль: <input name="password">
    <?= $errors["password"][0] ?? "" ?><br>

    <button>Зареєструватись</button>
</form>

<h3>Логи валідаторів:</h3>
<?php foreach ($logs as $log): ?>
    <p><?= $log ?></p>
<?php endforeach; ?>