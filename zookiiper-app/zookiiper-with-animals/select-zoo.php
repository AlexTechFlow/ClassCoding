<?php
/**
Show all Zoo records
*/ 

$dsn = "mysql:host=localhost;dbname=singhwa_zookiiper";

$username = "singhwa_singhwa";
$password = "#Wb5MH8zMay";

$pdo = new PDO($dsn, $username, $password); 

$stmt = $pdo->prepare("SELECT * FROM `Zoo`");

$stmt->execute();

?>
<!doctype html>
<html lang="">
    <head>
        <meta charset="utf-8">
        <title>Zoo Homepage</title>
        <meta name="description" content="">
        <link rel="stylesheet" href="css/main.css">
    </head>
    <body>
<h1>Zoo records</h1>
<table>
<?
while($row = $stmt->fetch()) {

	?>
	<tr>
		<td><? echo($row["id"]); ?></td>
		<td><? echo($row["Name"]); ?></td>
		<td><? echo($row["StreetAddress"]); ?></td>
		<td><? echo($row["City"]); ?></td>
		<td><? echo($row["Province"]); ?></td>
		<td><? echo($row["Phone"]); ?></td>
		<td><a href="zoo-animals.php?id=<? echo($row["id"]); ?>">Animals</a></td>


		<td><a href="delete-zoo.php?id=<? echo($row["id"]); ?>">Delete</a></td>
		<td><a href="update-zoo-form.php?id=<? echo($row["id"]); ?>">Update</a></td>
	</tr>
<? 
} 
?>

</table>

</body>
</html>