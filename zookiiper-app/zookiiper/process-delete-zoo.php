<?php 
/**
process-delete-zoo.php
Delete Zoo record form the database
*/

$id = $_POST["id"];

$dsn = "mysql:host=localhost;dbname=singhwa_zookiiper";

$username = "singhwa_singhwa";
$password = "#Wb5MH8zMay";

$pdo = new PDO($dsn, $username, $password); 

$stmt = $pdo->prepare("DELETE FROM `Zoo` WHERE `id` = $id");

$stmt->execute();

header('Location:select-zoo.php');

?>