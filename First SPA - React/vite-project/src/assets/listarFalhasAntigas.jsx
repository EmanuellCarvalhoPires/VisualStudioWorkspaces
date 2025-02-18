import { useEffect, useState } from "react";
import Example from "./ModalFalha";

function ListarFalhasFechadas(){

    const [ListData, setListData] = useState([]);
    

    useEffect(() => {
        fetch("http://localhost:3000/Falhas/listarTicketsFechados")
        .then(response => response.json())
        .then(data => setListData(data))
        
    }, [])



    return(
        <>
                {ListData.length > 0 ? (
                    ListData.map(Data => (
                        
                        <tr key={Data.ticket}>
                            <td>{Data.ticket}</td>
                            <td>{Data.mvno} </td>
                            <td>{Data.prioridade}</td>
                            <td>{Data.donofalha}</td>
                            
                            <td><div id="statusLinha2">{Data.status == true ? "Aberto" : "Fechado"} <Example ticket={Data}/></div></td>
                        </tr>
                        
                ))
                ): (<p>Carregando falhas</p>)} 
                
        </>

    );
}


export default ListarFalhasFechadas