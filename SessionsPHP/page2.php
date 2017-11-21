<?php    session_start();    
   $_SESSION["session-name"] = $_POST["name"];
  echo($_SESSION["session-name"]);
?>
<a href="page3.php">page3</a> 