<?php 
/**
Update Animal form
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
<h1>Update Animal Form</h1>
 <form action="process-update-animal.php" method="POST">
    <input type="hidden" name="id" value="<?= $row["id"]; ?>"/>
    Name:<input type="text" name="Name" value="<?= $row["Name"]; ?>"/>
    Species:<input type="text" name="Species" value="<?= $row["Species"]; ?>"/>
    Country:<input type="text" name="Country" value="<?= $row["Country"]; ?>"/>
    Details:<input type="text" name="Details" value="<?= $row["Details"]; ?>"/>
    DOB<input type="text" name="DOB" value="<?= $row["DOB"]; ?>"/>
    <input type="submit"/>
</form>