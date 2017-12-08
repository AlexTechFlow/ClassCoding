

/** zoo-animals.php 
Show all animals of a particular Zoo
*/



<?php 
/**
zoo-animals.php
Show all animals of a praticular Zoo
*/
$zooId = $_GET['id'];

$dsn = "mysql:host=localhost;dbname=singhwa_zookiiper";

$username = "singhwa_singhwa";
$password = "#Wb5MH8zMay";

$pdo = new PDO($dsn, $username, $password); 

$stmt = $pdo->prepare("SELECT `Animal`.`Name`
	FROM `Animal` INNER JOIN `Zoo-Animal` 
	ON `Animal`.`id`=`Zoo-Animal`.`AnimalId`
	WHERE `Zoo-Animal`.`ZooId` = $zooId;");

$stmt->execute();

while($row = $stmt->fetch()) { 
	var_dump($row);
	echo ($row["Name"]);
} 


?>