<?php
// 1
$a = 5;
$b = 10;

echo "Сума: ".($a+$b)."<br>";
echo "Різниця: ".($a-$b)."<br>";
echo "Добуток: ".($a*$b)."<br>";
echo "Ділення: ".($a/$b)."<br><br>";

// 2
$days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
echo "3-й: $days[2]<br>";
echo "5-й: $days[4]<br><br>";

// 3
$products = ["Хліб"=>20,"Молоко"=>30,"Сир"=>100];
foreach ($products as $name=>$price) {
    echo "$name: $price грн<br>";
}

// 4
$day = "Monday";
switch ($day) {
    case "Monday": echo "Початок тижня"; break;
    case "Friday": echo "Кінець тижня"; break;
    default: echo "Звичайний день";
}
echo "<br><br>";

// 5
$x = 15;
echo ($x % 2 == 0) ? "Парне" : "Непарне";
?>