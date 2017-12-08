<?php
/**
Confirmation page for delete animal
delete.php?id=1
delete-animal.php
*/

$id = $_GET["id"];

$dsn = "mysql:host=localhost;dbname=singhwa_zookiiper";

$username = "singhwa_singhwa";
$password = "#Wb5MH8zMay";

$pdo = new PDO($dsn, $username, $password); 

$stmt = $pdo->prepare("SELECT * FROM `Animal` WHERE `id` = $id");

$stmt->execute();

$row = $stmt->fetch();
?>
<h1>Are you sure you want to delete this record?</h1>
<p>Name: <?= $row["Name"]; ?></p>
<p>Species: <?= $row["Species"]; ?></p>
<p>Country: <?= $row["Country"]; ?></p>
<p>Details: <?= $row["Details"]; ?></p>
<p>DOB: <?= $row["DOB"]; ?></p>

<form action="process-delete-animal.php" method="POST">
	<input type="hidden" name="id" value="<?= $row["id"]; ?>"/>
	<input type="submit" />
</form>