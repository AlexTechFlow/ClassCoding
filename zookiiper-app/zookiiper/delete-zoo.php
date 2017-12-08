<?php
/**
Confirmation page for delete zoo
delete.php?id=1
delete-zoo.php
*/

$id = $_GET["id"];

$dsn = "mysql:host=localhost;dbname=singhwa_zookiiper";

$username = "singhwa_singhwa";
$password = "#Wb5MH8zMay";

$pdo = new PDO($dsn, $username, $password); 

$stmt = $pdo->prepare("SELECT * FROM `Zoo` WHERE `id` = $id");

$stmt->execute();

$row = $stmt->fetch();
?>
<h1>Are you sure you want to delete this record?</h1>
<p>Name: <?= $row["Name"]; ?></p>
<p>StreetAddress: <?= $row["StreetAddress"]; ?></p>
<p>City: <?= $row["City"]; ?></p>
<p>Province: <?= $row["Province"]; ?></p>
<p>Phone: <?= $row["Phone"]; ?></p>

<form action="process-delete-zoo.php" method="POST">
	<input type="hidden" name="id" value="<?= $row["id"]; ?>"/>
	<input type="submit" />
</form>