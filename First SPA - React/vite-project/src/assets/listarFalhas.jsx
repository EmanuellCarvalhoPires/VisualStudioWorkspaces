import { useEffect, useState } from "react";


function ListarFalhas(){

    const [ListData, setListData] = useState([]);


    useEffect(() => {
        fetch("http://localhost:8080/api/falhas/get")
        .then(response => response.json())
        .then(data => setListData(data))
        
    }, [])

    
    return(
        <>
                {ListData.length > 0 ? (
                    ListData.map(Data => (
                        
                        <tr key={Data.MVNO}>
                            <td><a href={`/detalhes/${Data.TICKET}`} style={{ textDecoration: "none", color: "inherit" , cursor: "pointer"}}>{Data.ID}</a></td>
                            <td>{Data.TICKET}</td>
                            <td>{Data.MVNO} </td>
                            <td>{Data.PRIORIDADE}</td>
                            <td>{Data.DONOFALHA}</td>
                            <td>{Data.STATUS == 0 ? "Aberto" : "Fechado"}</td>
                        </tr>
                        
                ))
                ): (<p>Carregando falhas</p>)} 
                
        </>

    );
}


export default ListarFalhas