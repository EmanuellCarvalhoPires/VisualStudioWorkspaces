<?php

    session_start();
    include("database.php");

    if(isset($_POST['submit'])){
        $username = filter_input(INPUT_POST, 'Username', FILTER_SANITIZE_SPECIAL_CHARS);
        $password = filter_input(INPUT_POST, 'Password', FILTER_SANITIZE_SPECIAL_CHARS);
        $row1 = null;
        $row = null;

        $sql_password = "SELECT * FROM USUARIOS WHERE USERNAME = '{$username}'";
        $querry_password = mysqli_query($conn,$sql_password);
        $row2 = mysqli_fetch_assoc($querry_password);

        if(mysqli_num_rows($querry_password) > 0){
            if(password_verify($password, $row2['PASSWORD'])){
            
                $sql_search = "SELECT * FROM USUARIOS WHERE USERNAME = '{$username}' AND PASSWORD = '{$row2['PASSWORD']}'";
                $querry_result = mysqli_query($conn, $sql_search);
                
                
                if(mysqli_num_rows($querry_result) > 0){
                    $row = mysqli_fetch_assoc($querry_result);
                        $_SESSION['username'] = $username;
                        $_SESSION['password'] = $row['PASSWORD'];
                        header("Location:index.php");
                    }
    
                }else{
                    echo"Senha Incorreta";
                    unset ($_SESSION['username']);
                    unset ($_SESSION['password']);
                }
            }else{
                echo"Usuário incorreto";
            }
        }


    mysqli_close($conn);

?>