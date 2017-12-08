<?php
/**
Show all Animal records
*/ 

$dsn = "mysql:host=localhost;dbname=singhwa_zookiiper";

$username = "singhwa_singhwa";
$password = "#Wb5MH8zMay";

$pdo = new PDO($dsn, $username, $password); 

$stmt = $pdo->prepare("SELECT * FROM `Animal`");

$stmt->execute();

?>
<!doctype html>
<html lang="">
    <head>
        <meta charset="utf-8">
        <title>Animal Homepage</title>
        <meta name="description" content="">
        <link rel="stylesheet" href="css/main.css">
    </head>
    <body>
<h1>Animal records</h1>
<table>
<?
while($row = $stmt->fetch()) {

	?>
	<tr>
		<td><? echo($row["id"]); ?></td>
		<td><? echo($row["Name"]); ?></td>
		<td><? echo($row["Species"]); ?></td>
		<td><? echo($row["Country"]); ?></td>
		<td><? echo($row["Details"]); ?></td>
		<td><? echo($row["DOB"]); ?></td>
		<td><a href="delete-animal.php?id=<? echo($row["id"]); ?>">Delete</a></td>
		<td><a href="update-animal-form.php?id=<? echo($row["id"]); ?>">Update</a></td>
	</tr>
<? 
} 
?>

</table>

</body>
</html>