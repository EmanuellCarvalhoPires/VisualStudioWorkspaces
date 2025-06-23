import { useEffect, useState } from "react";
import PropTypes from "prop-types"
import './FormCSS.css';

function ListarComentarios({ TicketId }){
    
    const [ListComentarios, setComentarios] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/Falhas/ComentariosTickets/:${TicketId._id}`)
            .then(response => response.json())
            .then(data => setComentarios(data))
            .catch((err) => {
                console.log(err)
            })
        
    }, [])
    

    return(
        <>
            {TicketId._id}

            
        </>

    )


}

ListarComentarios.propTypes = { 
  TicketId: PropTypes.shape({
    _id: PropTypes.string,
    ticket: PropTypes.string.isRequired,
    mvno: PropTypes.string,
    titulo: PropTypes.string,
    donofalha: PropTypes.string,
    prioridade: PropTypes.number,
    status: PropTypes.bool,
    descricao: PropTypes.string,
  }).isRequired,
};

export default ListarComentarios