<?php

$Name = $_POST['Name'];
$Species = $_POST['Species'];
$Country = $_POST['Country'];
$Details = $_POST['Details'];
$DOB = $_POST['DOB'];

$dsn = "mysql:host=localhost;dbname=singhwa_zookiiper";

$username = "singhwa_singhwa";
$password = "#Wb5MH8zMay";

$pdo = new PDO($dsn, $username, $password); 

$stmt = $pdo->prepare("INSERT INTO `Animal` 
	(`Name`, `Species`, `Country`, `Details`, `DOB`) 
	VALUES ('$Name','$Species','$Country','$Details','$DOB');");

$stmt->execute();

//header("Location: http://example.com/myOtherPage.php");
header('Location:select-animal.php');

?>