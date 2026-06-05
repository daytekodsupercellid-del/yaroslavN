<?php
// 1
$a = 10;
$b = 25;

$max = ($a > $b) ? $a : $b;
$min = ($a < $b) ? $a : $b;

echo "Макс: $max, Мін: $min<br><br>";

// 2
$arr = [10,20,30,40];
$avg = array_sum($arr) / count($arr);
echo "Середнє: $avg<br><br>";

// 3
$students = [
    "Іван Іванов"=>85,
    "Петро Петренко"=>75,
    "Олег Олегов"=>90
];

foreach ($students as $name=>$score) {
    if ($score > 80) {
        echo "$name: $score<br>";
    }
}
echo "<br>";

// 4
$num = 12;
if ($num % 3 == 0) echo "Кратне 3<br>";
if ($num % 5 == 0) echo "Кратне 5<br>";

echo "<br>";

// 5
for ($i=1; $i<=10; $i++) {
    echo "7 x $i = ".(7*$i)."<br>";
}
?>