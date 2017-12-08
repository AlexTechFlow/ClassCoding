<?php 
/**
Update Zoo form
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
<h1>Update Zoo Form</h1>
 <form action="process-update-zoo.php" method="POST">
    Name:<input type="hidden" name="id" value="<?= $row["id"]; ?>"/>
    Name:<input type="text" name="Name" value="<?= $row["Name"]; ?>"/>
    Street:<input type="text" name="StreetAddress" value="<?= $row["StreetAddress"]; ?>"/>
    City:<input type="text" name="City" value="<?= $row["City"]; ?>"/>
    Province:<input type="text" name="Province" value="<?= $row["Province"]; ?>"/>
    Phone<input type="text" name="Phone" value="<?= $row["Phone"]; ?>"/>
    <input type="submit"/>
</form>