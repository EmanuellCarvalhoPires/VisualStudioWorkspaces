import { useEffect, useState } from "react";


function ListarFalhas(){

    const [ListData, setListData] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3000/listarTickets")
        .then(response => response.json())
        .then(data => setListData(data))
        
    }, [])

    
    return(
        <>
                {ListData.length > 0 ? (
                    ListData.map(Data => (
                        
                        <tr key={Data.mvno}>
                            <td><a style={{ textDecoration: "none", color: "inherit" , cursor: "pointer"}}>{Data.ticket}</a></td>
                            <td>{Data.mvno} </td>
                            <td>{Data.prioridade}</td>
                            <td>{Data.donofalha}</td>
                            <td>{Data.status == true ? "Aberto" : "Fechado"}</td>
                        </tr>
                        
                ))
                ): (<p>Carregando falhas</p>)} 
                
        </>

    );
}


export default ListarFalhas