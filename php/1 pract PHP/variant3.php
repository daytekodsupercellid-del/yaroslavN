<?php
// 1
$p1 = 200;
$p2 = 150;
$p3 = 300;
$total = $p1 + $p2 + $p3;
echo "Сума: $total<br><br>";

// 2
$films = ["Inception","Matrix","Avatar","Titanic","Interstellar"];
foreach ($films as $film) {
    echo "$film<br>";
}
echo "<br>";

// 3
$user = ["login"=>"admin","password"=>"1234","email"=>"mail@mail.com"];
foreach ($user as $key=>$value) {
    echo "$key: $value<br>";
}
echo "<br>";

// 4
if ($total > 500) {
    $total *= 0.9;
}
echo "Зі знижкою: $total<br><br>";

// 5
$login = "admin";
$password = "1234";

if ($login == "admin" && $password == "1234") {
    echo "Вхід успішний";
} else {
    echo "Помилка входу";
}
?>