import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from "prop-types"


function Example({ ticket }) {
  const [show, setShow] = useState(false);
  
  
  
  
  return (
    <>
      <Button variant="dark" onClick={() => setShow(true)}>
        Detalhes do Chamado
      </Button>

      <Modal
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
          <p><strong>MVNO:</strong> {ticket.mvno}</p>
          <p><strong>Prioridade:</strong> {ticket.prioridade}</p>
          <p><strong>Descrição:</strong> {ticket.descricao}</p>
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