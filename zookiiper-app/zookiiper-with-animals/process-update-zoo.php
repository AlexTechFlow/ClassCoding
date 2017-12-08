<?php 
/**
process-update-zoo.php
Delete Zoo record form the database
*/

	
$Name = $_POST["Name"];
$StreetAddress = $_POST["StreetAddress"];
$City = $_POST["City"];	
$Province = $_POST["Province"];	
$Phone = $_POST["Phone"];
$id = $_POST["id"];

$dsn = "mysql:host=localhost;dbname=singhwa_zookiiper";

$username = "singhwa_singhwa";
$password = "#Wb5MH8zMay";

$pdo = new PDO($dsn, $username, $password); 

$stmt = $pdo->prepare("UPDATE `Zoo` 
	SET `Name` = '$Name', 
	`StreetAddress` = '$StreetAddress',
	`City` = '$City',
	`Province` = '$Province',
	`Phone` = '$Phone'
	WHERE 
	`id` = $id");

$stmt->execute();

header('Location:select-zoo.php');

?>