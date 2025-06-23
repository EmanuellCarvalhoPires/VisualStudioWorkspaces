
print("Para todas as perguntas caso não seja necessário aquela informação específica, apenas digite deixe em branco")
nome = input("Qual o nome do contato para realização de testes? ")
endereco = str(input("Informe o endereço completo: "))
data_do_problema = str(input("Favor informar data do problema ocorrido: "))
mensagem_de_erro = str(input("Favor informar mensagem de erro: "))
data_dos_testes = str(input("Favor informar data e hora dos testes realizados: "))
QOS = str(input("Favor informar QOS caso necessário: "))
ICCID = str(input("Favor informar ICCID caso necessário: "))
IMSI = str(input("Favor informar IMSI caso necessário: "))
MSISDN = str(input("Favor informar MSISDN caso necessário: "))
modelo_aparelho = str(input("Favor informar marca e modelo do aparelho: "))
info_adicional = str(input("Caso haja informações adicionais favor fornece-las: "))
saldo_franquia = str(input("Favor digitar o saldo/franquia: "))

texto_pronto = f"A dificuldade ocorre em Local Específico? \nPreencha os Dados abaixo: \nNome do contato para realização de testes: {nome}\nEndereço da falha - Rua/Av/Trav: {endereco}\nData início do problema: {data_do_problema}\nDificuldade ocorre em local fechado (dentro da casa) ou externo (rua, parque): Ambos\nInformar mensagem de erro (voz ou texto): {mensagem_de_erro}\nData e Hora dos testes realizados no local de reclamação:{data_dos_testes}\nEncontra-se no local?: Sim \nSelecione as redes em que os testes foram realizados:   2G ( *  )  3G  ( * )  4G  ( * )\nFoi testado o chip em outro aparelho? (  )Não ( * )Sim. Qual o resultado do teste? Sem sucesso\nQOS: {QOS}\nICCDI: {ICCID}\nIMSI: {IMSI}\nMSISDN: {MSISDN}\nMarca e modelo do aparelho: {modelo_aparelho}\nInformações adicionais que achar necessário: {info_adicional}"

print(texto_pronto)

pergunta_final = input("Para encerrar o programa aperte enter")
