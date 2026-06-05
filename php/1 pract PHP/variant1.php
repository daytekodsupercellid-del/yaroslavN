<?php
// 1
$name = "Іван";
$age = 20;
$is_student = true;

echo "Мене звати $name, мені $age років. ";
echo $is_student ? "Я студент." : "Я не студент.";
echo "<br><br>";

// 2
$numbers = [1,2,3,4,5];
$sum = 0;
foreach ($numbers as $num) {
    $sum += $num;
}
echo "Сума: $sum<br><br>";

// 3
$user = ["name"=>"Іван","email"=>"ivan@mail.com","phone"=>"+380..."];
echo "<ul>";
foreach ($user as $key=>$value) {
    echo "<li>$key: $value</li>";
}
echo "</ul>";

// 4
if ($age > 18) echo "Повнолітній<br>";
else echo "Неповнолітній<br>";

// 5
$grade = 85;
if ($grade >= 90) echo "Відмінно";
elseif ($grade >= 70) echo "Добре";
elseif ($grade >= 50) echo "Задовільно";
else echo "Незадовільно";
?>