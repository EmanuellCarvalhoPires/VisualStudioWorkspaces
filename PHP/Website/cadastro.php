<?php
    include("database.php");
    session_start();


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>


    <h1>Login Page</h1><br>
    
    <form action="<?php htmlspecialchars($_SERVER['PHP_SELF']) ?>" method="post">    
        <h3>Username: </h3>
        <input type="text" name="Username" id="Username" required><br>

        <h3>Password: </h3>
        <input type="password" name="Password" id="Password" required><br><br>

        <input type="submit" name="submit">

    </form>
</body>
</html>

<?php
    if(isset($_POST['submit'])){

        $password = filter_input(INPUT_POST, 'Password', FILTER_SANITIZE_SPECIAL_CHARS);
        $hash = password_hash($password, PASSWORD_DEFAULT);
        $username = filter_input(INPUT_POST, 'Username', FILTER_SANITIZE_SPECIAL_CHARS);

        $sql = "INSERT INTO USUARIOS(USERNAME,PASSWORD)
                VALUES ('{$username}','{$hash}')";
        
        try{
            mysqli_query($conn, $sql);
            header("Location: login.php");
        } catch(mysqli_sql_exception){
            echo"Esse usuário já está em uso";
        }

        
        
    }
?>