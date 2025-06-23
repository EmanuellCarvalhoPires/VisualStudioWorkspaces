import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from "prop-types"
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ListarComentarios from './listarcomentarios';
function Example({ ticket }) {
  const [show, setShow] = useState(false);
  

  const [comentarioData, setComentarioData] = useState({
    chamado_id: `${ticket._id}`,
    comentario: "",
    autor:""
    
  });

const handleChange = (event) => {
  setComentarioData({ ...comentarioData, [event.target.name]: event.target.value });
};


const handleSubmit = async (event) => {
      event.preventDefault();

      try {
        const response = await fetch("http://localhost:3000/Falhas/regiscoment", {
            
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(comentarioData),
        })


        console.log("Resposta do servidor:", response.data);
        alert("Comentário registrado com sucesso!");
        setComentarioData({ comentario: ""}); // Limpa os campos

    } catch (error) {
        console.error("Erro ao inserir os dados:", error);
        alert("Erro ao registrar a falha.");
    }
  };



const descricaoCorreta = ticket.descricao.replace(/\n/g, '<br>')


return (
    <>

      <div id="gambiarra" dangerouslySetInnerHTML={{ __html: descricaoCorreta }}></div>
      <Button variant="dark" onClick={() => setShow(true)}>
        Detalhes do Chamado
      </Button>
    
      <Modal
        size='lg'
        id="ModalTudo"
        
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        
        <Modal.Header closeButton id='ModalHeader'>
          <Modal.Title id="example-custom-modal-styling-title">
            Ticket: {ticket.ticket}
          </Modal.Title>
        </Modal.Header>

        <Tabs defaultActiveKey="home1" id="uncontrolled-tab-example" className="mb-3">
          
                <Tab eventKey="home1" title="Descrição">
                    
                    <hr id='hrModal2'></hr>

                      <p id="overflow" className='TituloModal'><strong>MVNO: {ticket.mvno}</strong> <strong>Setor: {ticket.donofalha}</strong> <strong>Prioridade: {ticket.prioridade}</strong></p>
                    
                    <hr id='hrModal1'></hr>
                    
                    <Modal.Body id="ModalBody">
                      <div id='tituloTicket'>
                        <div id='Tituloticket2'>
                          {ticket.titulo}
                        </div>
                      </div>
                      <p id="overflow2"><strong>Descrição: </strong><p></p> <p id='descricaoContent' dangerouslySetInnerHTML={{ __html: descricaoCorreta }}></p> </p>
                      
                    </Modal.Body>

                </Tab>



                <Tab eventKey="profile1" title="Comentários">

                  <ListarComentarios TicketId={ticket}/>

                  <Form id="comentários" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      
                      <Form.Label>Comentários</Form.Label>
                      <Form.Control name="comentario" as="textarea" rows={3} onChange={handleChange} required/>

                    </Form.Group>
                  
                  <Form.Group>

                    <Button type='submit'>Enviar</Button>

                  </Form.Group>
                </Form>
                </Tab>

              

                <Tab eventKey="contact1" title="Extras">
                  Tab content for Contact
                </Tab>

        </Tabs>

      </Modal>
    </>
  );

}

Example.propTypes = { 
  ticket: PropTypes.shape({
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

export default Example;