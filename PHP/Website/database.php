<?php

    $servername = "localhost";
    $pass_db = "";
    $user_db = "root";
    $db_name = "auroradb";
    $conn = null;

    try{
        $conn = mysqli_connect($servername,$user_db,$pass_db,$db_name);
    }
    catch(mysqli_sql_exception){
        echo"Não foi possível conectar ao banco de dados";
    }

?>