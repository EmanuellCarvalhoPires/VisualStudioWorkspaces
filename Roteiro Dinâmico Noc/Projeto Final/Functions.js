function Menu(opcao) {
    switch (opcao) {
        case 'voz':
            document.getElementById("ContainerVoz").style.display = 'block';
            document.getElementById("tituloDropdown").textContent = 'Voz';
            document.getElementById("ContainerDados").style.display = 'none'  
            document.getElementById("ContainerSMS").style.display = 'none'  
            document.getElementById("ContainerAPI").style.display = 'none'  
            break;
        case 'dados':
            document.getElementById("ContainerDados").style.display = 'block';
            document.getElementById("tituloDropdown").textContent = 'Dados';
            document.getElementById("ContainerVoz").style.display = 'none'  
            document.getElementById("ContainerSMS").style.display = 'none'  
            document.getElementById("ContainerAPI").style.display = 'none'  
            break;
        case 'SMS':
            document.getElementById("ContainerSMS").style.display = 'block';
            document.getElementById("tituloDropdown").textContent = 'SMS';
            document.getElementById("ContainerVoz").style.display = 'none'  
            document.getElementById("ContainerDados").style.display = 'none'  
            document.getElementById("ContainerAPI").style.display = 'none'  
            
            break;
        case 'API':
            document.getElementById("ContainerAPI").style.display = 'block';
            document.getElementById("tituloDropdown").textContent = 'API';
            document.getElementById("ContainerVoz").style.display = 'none'  
            document.getElementById("ContainerDados").style.display = 'none'  
            document.getElementById("ContainerSMS").style.display = 'none'  
            break;

        default:
            break;
    }
    
}


//Funções para depois de selecionar o tipo do ticket
function NaoRecebe(){
    document.getElementById("ContainerNaoRecebe").style.display = 'block';
    document.getElementById("vozTitulos").textContent = 'Não Recebe';            
    document.getElementById("ContainerNaoOrigina").style.display = 'none'
    document.getElementById("ContainerNaoOriginaNaoRecebe").style.display = 'none'
    document.getElementById("QualidadeDeChamada").style.display = 'none'   
}
function NaoOrigina(){
    document.getElementById("ContainerNaoOrigina").style.display = 'block';
    document.getElementById("vozTitulos").textContent = 'Não Origina';
    document.getElementById("ContainerNaoRecebe").style.display = 'none'
    document.getElementById("ContainerNaoOriginaNaoRecebe").style.display = 'none'  
    document.getElementById("QualidadeDeChamada").style.display = 'none'   
}
function NaoOriginaNaoRecebe(){
    document.getElementById("ContainerNaoOriginaNaoRecebe").style.display = 'block';
    document.getElementById("vozTitulos").textContent = 'Não Origina/Não Recebe';
    document.getElementById("ContainerNaoOrigina").style.display = 'none'
    document.getElementById("ContainerNaoRecebe").style.display = 'none'            
    document.getElementById("QualidadeDeChamada").style.display = 'none'   
}
function QualidadeDeChamada(){
    document.getElementById("QualidadeDeChamada").style.display = 'block';
    document.getElementById("vozTitulos").textContent = 'Qualidade de Chamada';
    document.getElementById("ContainerNaoOrigina").style.display = 'none'
    document.getElementById("ContainerNaoRecebe").style.display = 'none' 
    document.getElementById("ContainerNaoOriginaNaoRecebe").style.display = 'none'            
}

//Funções das Checkboxes
        


let valorDoNumEspecifico = "-";
let numespec = "";
function alertarValor() {
    let LinhaQueNãoRecebe = document.getElementById('LinhaQueNaoRecebe').value;
    valorDoNumEspecifico = LinhaQueNãoRecebe;
}

function NumeroEspecifico(opcao){
    if(opcao == 'sim'){
        
        document.getElementById("NumEspecifico").style.display = 'block';
    
        document.getElementById("PerguntaPortabilidade").style.display = 'block';

        document.getElementById("ch2").checked = false;
        document.getElementById("DivDosTestes").style.display = 'block';
        
        numespec = "Sim";


    }else if(opcao == 'nao'){
        document.getElementById("NumEspecifico").style.display = 'none';
        
        document.getElementById("PerguntaPortabilidade").style.display = 'block';
        document.getElementById("DivDosTestes").style.display = 'block';
        document.getElementById("ch1").checked = false;
        
        numespec = "Não";
        valorDoNumEspecifico = "-"
    }
    
    

}
// FUNCTIONS LINHA PORTADA
let linhaportada;
let linhaportouInf3Dias;
function LinhaPortada(opcao){
    if(opcao == 'sim'){
        document.getElementById("respostaLinhaPortSIM").style.display = 'block';
        linhaportada = "Sim";
        
        document.getElementById("Pr2").checked = false;
        document.getElementById("checkboxes").style.display = 'none';
        document.getElementById("DivDosTestes").style.display = 'none';

        //DESMARCA TODAS AS CHECKBOXES QUE FORAM MARCADAS ANTERIORMENTE

        document.getElementById("testesNao").checked = false;
        document.getElementById("testesSim").checked = false;
        document.getElementById("ch1").checked = false;
        document.getElementById("ch2").checked = false;     
        //FECHA A DIV DOS TESTES TAMBÉM

        document.getElementById("DivDosTestes").style.display = 'none';
        document.getElementById("TestesRealizados").style.display = 'none';
        

    }else if(opcao == 'nao'){
        document.getElementById("respostaLinhaPortSIM").style.display = 'none';
        document.getElementById("Pr1").checked = false;
        linhaportada = "Não"
        document.getElementById("checkboxes").style.display = 'block';
        document.getElementById("respostaPortRecentSIM").style.display = 'none';
        document.getElementById("DivDosTestes").style.display = 'none';
        document.getElementById("NumEspecifico").style.display = 'none';

        const hrElements = document.getElementsByClassName("HRs");
        for (let element of hrElements) {
            element.style.display = 'block';
        }

    // Desmarca ambas as opções do inferiorA3dias
        document.getElementById("Inf1").checked = false;
        document.getElementById("Inf2").checked = false;

    //Desmarca as checkboxes de teste e numespecifico
    
    document.getElementById("testesNao").checked = false;
    document.getElementById("testesSim").checked = false;
    document.getElementById("ch1").checked = false;
    document.getElementById("ch2").checked = false;            


    //FECHA A DIV DOS TESTES TAMBÉM

    document.getElementById("DivDosTestes").style.display = 'none';
    document.getElementById("TestesRealizados").style.display = 'none';
    
    }
}

        //FUNCTION PARA DIZER SE A SOLICITAÇÃO DA PORTABILIDADE FOI FEITA HÁ MENOS DE 3 DIAS

        function InferiorA3dias(opcao){
            if(opcao == 'sim'){
                document.getElementById("respostaPortRecentSIM").style.display = 'block';

                linhaportouInf3Dias = "Sim";
                document.getElementById("Inf2").checked = false;

                // Fechar todo o roteiro após isso aqui
                document.getElementById("DivDosTestes").style.display = 'none';
                document.getElementById("TestesRealizados").style.display = 'none';
                document.getElementById("checkboxes").style.display = 'none';
                document.getElementById("NumEspecifico").style.display = 'none';

                //DESMARCA TODAS AS CHECKBOXES QUE FORAM MARCADAS ANTERIORMENTE

                document.getElementById("testesNao").checked = false;
                document.getElementById("testesSim").checked = false;
                document.getElementById("ch1").checked = false;
                document.getElementById("ch2").checked = false;     

                
                //FECHA A DIV DOS TESTES TAMBÉM

                document.getElementById("DivDosTestes").style.display = 'none';
                document.getElementById("TestesRealizados").style.display = 'none';

                const hrElements = document.getElementsByClassName("HRs");
                for (let element of hrElements) {
                    element.style.display = 'none';
                }

            } else if(opcao == 'nao'){
                document.getElementById("respostaPortRecentSIM").style.display = 'none';
                linhaportouInf3Dias = "Não";
                document.getElementById("Inf1").checked = false;
                document.getElementById("checkboxes").style.display = 'block';
                document.getElementById("NumEspecifico").style.display = 'none';

                
                //DESMARCA TODAS AS CHECKBOXES QUE FORAM MARCADAS ANTERIORMENTE

                document.getElementById("testesNao").checked = false;
                document.getElementById("testesSim").checked = false;
                document.getElementById("ch1").checked = false;
                document.getElementById("ch2").checked = false;   

                //FECHA A DIV DOS TESTES TAMBÉM

                document.getElementById("DivDosTestes").style.display = 'none';
                document.getElementById("TestesRealizados").style.display = 'none';

                const hrElements = document.getElementsByClassName("HRs");
                for (let element of hrElements) {
                    element.style.display = 'block';
                }
            }
        }

//FUNCTION DE TESTES

function testes(opcao){
    if(opcao == 'sim'){
        document.getElementById("TestesRealizados").style.display = 'block';
        document.getElementById("testesNao").checked = false;
        
        const dataHora = document.getElementById("DataHoraTestes");
        
    }else if(opcao == 'nao'){
        document.getElementById("TestesRealizados").style.display = 'none';
        document.getElementById("testesSim").checked = false;
    
    }

}
//FUNÇÃO DE ADICIONAR MAIS TESTES
let i = 1;
let todosOsTestes = [];


function testesVoz(){
    
    const novoteste = `<div id="testeExtra${i}">
                    <br>
                    <label>Teste ${i + 1}</label><br>
                    Origem: <input type="text" id="testeOrigem${i}" style="border-radius: 5px; margin-bottom: 5px ;"><br>
                    Destino: <input type="text" id="testeDestino${i}" style="border-radius: 5px;"><br>
                    Data/hora dos testes: <input type="datetime-local" name="" id="DataHoraTestes${i}"><br><br>
                    -----------------------------------------------
                    </div>`
    document.getElementById('TestesRealizados').innerHTML += novoteste;


    i += 1
    

}


function gerarTexto() {
const linha = document.getElementById("LinhaComFalha").value;
const ICCID = document.getElementById("ICCID").value;
const nomeCli = document.getElementById("NomeCliente").value;

// Limpa o array antes de preenchê-lo novamente
todosOsTestes = [];

// Coleta os testes adicionais
for (let j = 1; j < i; j++) {
let linhaOrig = document.getElementById(`testeOrigem${j}`).value || 'Não informado';
let linhaDest = document.getElementById(`testeDestino${j}`).value || 'Não informado';
let DataHoraTeste1 = document.getElementById(`DataHoraTestes${j}`).value || "Não informado";
let DataHoraTeste = DataHoraTeste1.replace("T"," ")
let formatTeste = `Teste ${j + 1}
ORIGEM: ${linhaOrig}
DESTINO: ${linhaDest}
DATA/HORA: ${DataHoraTeste}
`;
todosOsTestes.push(formatTeste);
}


let DataHoraTestes1 = document.getElementById("DataHoraTestes").value || "Não informado"
let TESTEORIGEM = document.getElementById(`testeOrigem`).value || 'Não informado';
let TESTEDESTINO = document.getElementById(`testeDestino`).value || 'Não informado';
let DataHoraTestes = DataHoraTestes1.replace("T"," ");




const textoPronto = `
A dificuldade ocorre em Local Específico?

Preencha os Dados abaixo:

Nome do contato para realização de testes: ${nomeCli}

MSISDN: ${linha}
ICCID: ${ICCID}

A Linha não recebe ligações de número específico? ${numespec}

Se sim, qual a linha que não recebe: ${valorDoNumEspecifico}

Endereço da falha - Rua/Av/Trav: 

Data início do problema:

Dificuldade ocorre em local fechado (dentro da casa) ou externo (rua, parque): Ambos

Informar mensagem de erro (voz ou texto):

Data e Hora dos testes realizados no local de reclamação:

Encontra-se no local?: Sim

Selecione as redes em que os testes foram realizados:
2G (  )  3G  (  )  4G  ( )

Foi testado o chip em outro aparelho? (  ) Não (  ) Sim. Qual o resultado do teste?

Há outra linha com a mesma dificuldade na localidade reclamada? Não

Marca e modelo do aparelho: 

-Testes realizados-

Teste 1
ORIGEM: ${TESTEORIGEM}
DESTINO: ${TESTEDESTINO}
DATA/HORA: ${DataHoraTestes}

${todosOsTestes.map((element) => `${element}`).join('\n')}

Informações adicionais que achar necessário: `;

document.getElementById("resultado").textContent = textoPronto;

// Limpa o array para evitar duplicação de dados
todosOsTestes = [];
}





