<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Página de Login</h1>

    <form action="login.php" method="post">
        
        <h3>Username: </h3>
        <input type="text" name="Username" id="Username" required><br>

        <h3>Password: </h3>
        <input type="password" name="Password" id="Password" required><br><br>

        <input type="submit" name="submit">

    </form>
</body>
</html>

<?php

include("session.php");

?>

