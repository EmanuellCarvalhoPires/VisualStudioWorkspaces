import nãoconecta
import NãoEnviaENãoRecebeSMS
import naoRecebe
import naoOrigina
import naoOriginaEnaoRecebe
import lentidão



print("Tipos de SMAP:\n1-NÃO CONECTA\n2-NÃO ORIGINA/NÃO RECEBE\n3-NÃO ORGINA\n4-NÃO RECEBE\n5-LENTIDÃO\n6-NÃO ENVIA/NÃO RECEBE SMS")
tipo_de_smap = input("Favor digite a opção correspondente ao tipo do seu SMAP: ")

if tipo_de_smap == "1":
    nãoconecta.main()  # Supondo que cada módulo tenha uma função principal chamada main
elif tipo_de_smap == "2":
    naoOriginaEnaoRecebe.main()
elif tipo_de_smap == "3":
    naoOrigina.main()
elif tipo_de_smap == "4":
    naoRecebe.main()
elif tipo_de_smap == "5":
    lentidão.main()
elif tipo_de_smap == "6":
    NãoEnviaENãoRecebeSMS.main()
