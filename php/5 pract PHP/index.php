<?php
session_start();

if (!isset($_SESSION['username']) || !isset($_SESSION['theme'])) {
    header("Location: preferences.php");
    exit();
} else {
    header("Location: dashboard.php");
    exit();
}