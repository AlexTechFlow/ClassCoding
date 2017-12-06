<?php

/** 
  receive post variables, 
  check if user name and password are correct based on data in database
    -- retrieve username and password from db
    -- check if username and pass are valid

  if u/p combination is valid, then show private data
  else show an error page
  

 provide a logout to a user who is logged in
 */


$username = $_POST["username"];
$password = $_POST["password"];


$dsn = "mysql:host=localhost;dbname=kouzaevi_student";

$db_username = "kouzaevi_student";
$db_password = "4jQn4yPX$fw";

$pdo = new PDO($dsn, $db_username, $db_password); 

$stmt = $pdo->prepare("SELECT * FROM `userTable` 
	WHERE `username` = $username 
	AND `password` = $password;");

$stmt->execute();


?>