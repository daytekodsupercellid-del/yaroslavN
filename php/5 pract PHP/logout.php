<?php
session_start();

// Очищаємо сесію
session_unset();
session_destroy();

// Видаляємо кукі
if (isset($_COOKIE['bgcolor'])) {
    setcookie("bgcolor", "", time() - 3600, "/");
}

header("Location: index.php");
exit();