<?php
session_start();

if (!isset($_SESSION['username']) || !isset($_SESSION['theme'])) {
    header("Location: preferences.php");
    exit();
}

$username = $_SESSION['username'];
$theme = $_SESSION['theme'];
$bgcolor = isset($_COOKIE['bgcolor']) ? $_COOKIE['bgcolor'] : "#ffffff";

// Стилі теми
$textColor = ($theme == "dark") ? "#ffffff" : "#000000";
?>

<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
</head>
<body style="background-color: <?php echo $bgcolor; ?>; color: <?php echo $textColor; ?>;">

    <h1>Вітаю, <?php echo htmlspecialchars($username); ?>!</h1>

    <p>Ваша тема: <?php echo $theme; ?></p>

    <br>
    <a href="preferences.php">Змінити налаштування</a><br><br>
    <a href="logout.php">Вийти</a>

</body>
</html>