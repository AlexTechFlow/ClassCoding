<?php

$Name = $_POST['Name'];
$StreetAddress = $_POST['StreetAddress'];
$City = $_POST['City'];
$Province = $_POST['Province'];
$Phone = $_POST['Phone'];

$dsn = "mysql:host=localhost;dbname=singhwa_zookiiper";

$username = "singhwa_singhwa";
$password = "#Wb5MH8zMay";

$pdo = new PDO($dsn, $username, $password); 

$stmt = $pdo->prepare("INSERT INTO `Zoo` 
	(`Name`, `StreetAddress`, `City`, `Province`, `Phone`) 
	VALUES ('$Name','$StreetAddress','$City','$Province','$Phone');");

$stmt->execute();

//header("Location: http://example.com/myOtherPage.php");
header('Location:select-zoo.php');

?>