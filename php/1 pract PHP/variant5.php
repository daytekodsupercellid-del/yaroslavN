<?php
// 1
$first_name = "Іван";
$last_name = "Іванов";
$year = 2000;

$age = date("Y") - $year;

echo "$first_name $last_name, вік: $age<br><br>";

// 2
$countries = ["Україна","Польща","Німеччина","Франція"];

echo "<ol>";
foreach ($countries as $country) {
    echo "<li>$country</li>";
}
echo "</ol><br>";

// 3
$cities = [
    "Київ"=>3000000,
    "Львів"=>700000,
    "Одеса"=>1000000
];

foreach ($cities as $city=>$pop) {
    if ($pop > 1000000) {
        echo "$city: $pop<br>";
    }
}
echo "<br>";

// 4
$number = 8;
echo ($number % 2 == 0) ? "Парне<br>" : "Непарне<br>";

// 5
$year = date("Y");

if ($year % 4 == 0) {
    echo "Високосний рік";
} else {
    echo "Не високосний";
}
?>