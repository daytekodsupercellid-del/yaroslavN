<?php

#[Attribute]
class OnlyAdults {
    public function __construct() {
        file_put_contents("log.txt", "OnlyAdults used: " . date("Y-m-d H:i:s") . "\n", FILE_APPEND);
    }
}

// Масив користувачів
$users = [
    ["name" => "Ivan", "age" => 25, "email" => "ivan@mail.com"],
    ["name" => "Olga", "age" => 17, "email" => "olga@mail.com"],
    ["name" => "Petro", "age" => 30, "email" => "petro@mail.com"],
    ["name" => "Anna", "age" => 22, "email" => "anna@mail.com"],
    ["name" => "Serhii", "age" => 15, "email" => "serhii@mail.com"],
    ["name" => "Maria", "age" => 19, "email" => "maria@mail.com"],
    ["name" => "Oleh", "age" => 40, "email" => "oleh@mail.com"],
    ["name" => "Nina", "age" => 18, "email" => "nina@mail.com"],
    ["name" => "Taras", "age" => 27, "email" => "taras@mail.com"],
    ["name" => "Ira", "age" => 16, "email" => "ira@mail.com"],
];

// Атрибут викликаємо через Reflection
function callAttribute($functionName, $attributeClass) {
    $ref = new ReflectionFunction($functionName);
    foreach ($ref->getAttributes($attributeClass) as $attr) {
        $attr->newInstance();
    }
}

// Фільтрація 18+
#[OnlyAdults]
function filterAdults($users) {
    return array_filter($users, fn($user) => $user["age"] >= 18);
}

callAttribute('filterAdults', OnlyAdults::class);
$filteredUsers = filterAdults($users);

// Сортування по довжині імені
function compareByNameLength($a, $b) {
    return strlen($a["name"]) <=> strlen($b["name"]);
}

usort($filteredUsers, "compareByNameLength");

?>

<!DOCTYPE html>
<html>
<head>
    <title>Users</title>
</head>
<body>

<h2>Користувачі 18+</h2>

<table border="1">
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Email</th>
    </tr>

    <?php foreach ($filteredUsers as $user): ?>
        <tr>
            <td><?= htmlspecialchars($user["name"]) ?></td>
            <td><?= $user["age"] ?></td>
            <td><?= htmlspecialchars($user["email"]) ?></td>
        </tr>
    <?php endforeach; ?>

</table>

</body>
</html>