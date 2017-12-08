<?php 
/**
process-update-animal.php
Delete Animal record form the database
*/

	
$Name = $_POST["Name"];
$Species = $_POST["Species"];
$Country = $_POST["Country"];	
$Details = $_POST["Details"];	
$DOB = $_POST["DOB"];
$id = $_POST["id"];

$dsn = "mysql:host=localhost;dbname=singhwa_zookiiper";

$username = "singhwa_singhwa";
$password = "#Wb5MH8zMay";

$pdo = new PDO($dsn, $username, $password); 

$stmt = $pdo->prepare("UPDATE `Animal` 
	SET `Name` = '$Name', 
	`Species` = '$Species',
	`Country` = '$Country',
	`Details` = '$Details',
	`DOB` = '$DOB'
	WHERE 
	`id` = $id");

$stmt->execute();

header('Location:select-animal.php');

?>