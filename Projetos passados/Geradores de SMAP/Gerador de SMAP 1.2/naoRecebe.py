def main():

    print("NÃO RECEBE - Para todas as perguntas caso não seja necessário aquela informação específica, apenas digite deixe em branco\n=============================================")
    nome = input("Qual o nome do contato para realização de testes? ")
    endereco = str(input("Informe o endereço completo: "))
    Todas_as_redes = str(input("Todas as redes foram testadas(2G, 3G, 4G) ? "))
    rede2G = ""
    rede3G = ""
    rede4G = ""
    if Todas_as_redes.lower() == "sim":
        rede2G = "*"
        rede3G = "*"
        rede4G = "*"
    else:
        rede2G = str(input("Caso o teste tenha sido feito no 2G, coloque um '*' :"))
        rede3G = str(input("Caso o teste tenha sido feito no 3G, coloque um '*' :"))
        rede4G = str(input("Caso o teste tenha sido feito no 4G, coloque um '*' :"))
    teste_outro_aparelho = str(input("Foi testado o chip em outro aparelho? "))
    resultado = ""
    sim = ""
    nao = ""
    if teste_outro_aparelho.lower() == "sim":
        sim = "*"
        resultado = str(input("Qual o resultado do teste?"))
    else:
        nao = "*"
    num_exemplo = str(input("Número de exemplo que não consegue receber: "))
    data_do_problema = str(input("Favor informar data do problema ocorrido: "))
    mensagem_de_erro = str(input("Favor informar mensagem de erro: "))
    data_dos_testes = str(input("Favor informar data e hora dos testes realizados: "))
    ICCID = str(input("Favor informar ICCID caso necessário: "))
    IMSI = str(input("Favor informar IMSI caso necessário: "))
    MSISDN = str(input("Favor informar MSISDN caso necessário: "))
    modelo_aparelho = str(input("Favor informar marca e modelo do aparelho: "))
    info_adicional = str(input("Caso haja informações adicionais favor fornece-las: "))
    saldo_franquia = str(input("Favor digitar o saldo/franquia: "))
    print("===============================================\n\n")

    texto_pronto = f"Cliente reclama que não esta conseguindo receber ligações de qualquer número. (TELECALL)\nA dificuldade ocorre em Local Específico? \nPreencha os Dados abaixo: \nNome do contato para realização de testes: {nome}\nEndereço da falha - Rua/Av/Trav: {endereco}\nNúmero de Exemplo que não consegue receber: {num_exemplo}\nData início do problema: {data_do_problema}\nSaldo/ Franquia: {saldo_franquia}\nDificuldade ocorre em local fechado (dentro da casa) ou externo (rua, parque): Ambos\nInformar mensagem de erro (voz ou texto): {mensagem_de_erro}\nData e Hora dos testes realizados no local de reclamação:{data_dos_testes}\nEncontra-se no local?: Sim \nSelecione as redes em que os testes foram realizados:2G ( {rede2G} )  3G  ( {rede3G} )  4G  ( {rede4G} )\nFoi testado o chip em outro aparelho? ( {nao} )Não ( {sim} )Sim. Qual o resultado do teste? {resultado}\nHá outra linha com a mesma dificuldade na localidade reclamada? Não\nICCDI: {ICCID}\nIMSI: {IMSI}\nMSISDN: {MSISDN}\nMarca e modelo do aparelho: {modelo_aparelho}\nInformações adicionais que achar necessário: {info_adicional}"

    print(texto_pronto)

    pergunta_final = input(f"\nPara encerrar o programa aperte enter")
