<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<?php include("./modules/header.php")?>
<body>
        <div id="DivAll">
            <div id="DivDeAadicionarChamados">
                <title>Adicionar Chamados</title>
                <h2>Adicionar Chamado</h2>

                <!--FORMULARIO-->
                <form id="formChamado">
                    <label for="titulo">Título do Chamado:</label>
                    <input type="text" id="titulo" name="titulo" required>
                    <br><br>

                    <label for="prioridade">Nível de Prioridade:</label>
                    <select id="prioridade" name="prioridade" required style="border:solid 1px black; border-radius: 5px; padding: 3px;">
                        <option value="1">1 (Baixa)</option>
                        <option value="2">2 (Média)</option>
                        <option value="3">3 (Alta)</option>
                    </select>
                    <br><br>
                    <div style="display:flex; margin-bottom: 10px;">
                        <label for="descricao" style="margin-right: 10px;">Descrição:  </label>
                        <textarea id="descricao" name="descricao" required style=" width: 300px; height: 150px; border:solid 1px black; border-radius: 5px;"></textarea>
                        <br><br>
                    </div>
                    <br>
                    <button type="submit" style="border:solid 1px black; border-radius: 5px;" >Adicionar Chamado</button>

                </form>
            </div>

            <div id="DivDaListaDeChamados" style="width: inherit; border: solid 1px black; border-radius: 10px ;">
                <h2>Chamados Prioritários</h2><br>

                <!-- Lista de chamados -->
                <ul id="listaChamados"></ul>
                <br>
                <hr style="opacity: 0.5;">
                <br>
                </div>

                <!-- Área para detalhes do chamado -->
                <div id="detalhesChamado" style="display: block;">
                    <h2 id="tituloChamado"></h2><br>
                    <h5>Descrição: </h5><p id="descricaoChamado"></p>
                    <hr style="opacity: 0.5;">
                

                    <h3>Comentários</h3>
                    <ul id="listaComentarios"></ul>
                    <form id="formComentario">
                        <textarea id="comentario" placeholder="Digite seu comentário..." required></textarea>
                        <button type="submit" style="border-radius: 10px;" >Adicionar Comentário</button>
                    </form>
                    <button onclick="fecharDetalhes()">Fechar</button>
                </div>
            </div>

        
</body>

<footer>
    
    <script>

        fetch("listarChamados.php")
            .then(response => response.json())
            .then(data => {
                const lista = document.getElementById("listaChamados")
                lista.innerHTML = ""

                data.forEach(chamado => {
                    const item = document.createElement("li");
                    item.innerHTML = `
                        <strong>${chamado.titulo}</strong> - Prioridade: ${chamado.prioridade}
                        <button onclick="carregarDetalhesChamado(${chamado.id})">Ver Detalhes</button>
                    `;
                    lista.appendChild(item);
                });

            })
    </script>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>


</footer>

</html>