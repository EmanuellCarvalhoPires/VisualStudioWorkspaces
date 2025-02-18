import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import './FormCSS.css';
import Example from "./ModalFalha";

function ListarFalhas(){

    const [ListData, setListData] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3000/Falhas/listarTickets")
            .then(response => response.json())
            .then(data => setListData(data))
            .catch((err) => {
                console.log(err)
            })
        
    }, [])


    function fechar(ticket){
        try{
            fetch(`http://localhost:3000/Falhas/AtualizarStatus/${ticket}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: false }),
            })

            
        }catch(err){
            console.log(err)
        }
    }

    return(
        <>
                {ListData.length > 0 ? (
                    ListData.map(Data => (
                        
                            <tr key={Data.ticket}>
                                <td><a style={{ textDecoration: "none", color: "inherit" , cursor: "pointer"}}>{Data.ticket}</a></td>
                                <td>{Data.mvno} </td>
                                <td>{Data.prioridade}</td>
                                <td>{Data.donofalha}</td>
                                <td><div id="statusLinha">{Data.status == true ? "Aberto" : "Fechado"} <Example ticket={Data}/><Button id="buttonFechar" variant="dark" onClick={() => fechar(Data.ticket)}>Fechar</Button></div></td>
                            </tr>
                        
                ))
                ): (<p>Carregando falhas</p>)} 
                
        </>

    );
}


export default ListarFalhas