<?php 
    include("database.php");


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

</head>
<body>
  <form action="index.php" method="post">
        <label>Ticket</label><br>
        <input type="text" name="Ticket"><br>
        <label>MVNO</label><br>
        <input type="text" name="MVNO"><br>
        <label>Tipo do Ticket</label><br>
        <input type="text" name="Tipo"><br>
        <label>Descrição</label><br>
        <input type="text" name="Descricao"><br>
        <label>Status Atual do Ticket</label><br>
        <input type="text" name="Status"><br>

        <input type="submit" value="Submit" name="submit">


      </form>
          
          
      <div id="Registros">
      <table class="table table-striped table-hover">
        <thead>
          <th scope="col">Ticket</th>
          <th scope="col">MVNO</th>
          <th scope="col">Tipo</th>
          <th scope="col">Descrição</th>
          <th scope="col">Status Atual</th>
          <th scope="col">Data e Hora</th>

        </thead>

        <tbody>

                <?php
              if(isset($_POST['submit'])){
                $ticket = $_POST['Ticket'];
                $mvno = $_POST['MVNO'];
                $tipoTicket = $_POST['Tipo'];
                $descricao= $_POST['Descricao'];
                $status = $_POST['Status'];

                $RegistroTicket = ["Ticket" => "{$ticket}", "MVNO" => "{$mvno}", "Tipo" => "{$tipoTicket}", "Descricao" => "{$descricao}", "Status" => "{$status}"];

                $querry="INSERT INTO tickets(`TICKET`, `MVNO`, `TIPO`, `DESCRICAO`, `STATUS`, `DATA`) VALUES ('{$ticket}', '{$mvno}', '{$tipoTicket}', '{$descricao}', '{$status}', current_timestamp())";
                try {
                  mysqli_query($conn, $querry);
                } catch (mysqli_sql_exception) {
                  echo"";
                }  

              }

              $sql_search = "SELECT * FROM tickets";
              $querry_result = mysqli_query($conn, $sql_search);
              $num_rows = mysqli_num_rows($querry_result);
              $tabela = [];
              if(mysqli_num_rows($querry_result) > 0){

                $i = null;
                while($i <= $num_rows){

                  $rows = mysqli_fetch_row($querry_result);  
                  array_push($tabela, $rows);
                  
                  $i++;
              }
            }
              $num_array = count($tabela);
              echo $num_array . "<br>";
              foreach($tabela as $linha){
                $i = $num_array ;

                while($i <= $num_array){
                  echo '<tr>';
                  foreach($linha as $line){
                    echo "<td>{$line}</td>";

                  }
                  echo'</tr>';
                  $i++;
              }
              }
            

              
            ?>

          
              <div type="checkbox" class="form-check form-switch" id="">


              </div>
              
        </tbody>
      </table>

      </div>




    
</body>

<footer>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>

</footer>
</html>

<?php

?>
