import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from "prop-types"
import Form from 'react-bootstrap/Form';

function Example({ ticket }) {
  const [show, setShow] = useState(false);
  
  
  
  
  return (
    <>
      <Button variant="dark" onClick={() => setShow(true)}>
        Detalhes do Chamado
      </Button>

      <Modal
        size='lg'
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Ticket: {ticket.ticket}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p id="overflow"><strong>MVNO: {ticket.mvno}</strong>  <strong>Prioridade: {ticket.prioridade}</strong> </p>
          
          <p id="overflow"><strong>Descrição:</strong> {ticket.descricao}</p>

          <Form>
            <Form.Group
              
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Comentários</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );

}

Example.propTypes = { 
  ticket: PropTypes.shape({
    ticket: PropTypes.string.isRequired,
    mvno: PropTypes.string,
    donofalha: PropTypes.string,
    prioridade: PropTypes.number,
    status: PropTypes.bool,
    descricao: PropTypes.string,
  }).isRequired,
};

export default Example;