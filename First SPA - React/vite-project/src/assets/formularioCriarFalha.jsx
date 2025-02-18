import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './FormCSS.css';
import { useState } from "react";



function FormFalha() {
    
    const [formData, setFormData] = useState({
        mvno: "",
        ticket: "",
        descricao: "",
        prioridade: "",
        donofalha: "",
        status: true
    });


    // Atualiza os valores do formulário
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    // Envia os dados para o backend
    const handleSubmit = async (event) => {
        event.preventDefault(); // Evita recarregar a página
        
        
        try {
            const response = await fetch("http://localhost:3000/Falhas/registicket", {
                
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData),
            })


            console.log("Resposta do servidor:", response.data);
            alert("Falha registrada com sucesso!");
            setFormData({ mvno: "", ticket: "", descricao: "", prioridade: "", donofalha: "" }); // Limpa os campos

        } catch (error) {
            console.error("Erro ao inserir os dados:", error);
            alert("Erro ao registrar a falha.");
        }
    };



    return (

    <div className='CentralDIVForm'>
        <div className='CentralDIVForm2'>
            
            <Form onSubmit={handleSubmit}>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>MVNO</Form.Label>
                <Form.Control type="text" name="mvno" placeholder="MVNO" value={formData.mvno}  onChange={handleChange} required/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Ticket</Form.Label>
                <Form.Control type="text" placeholder="Ticket" name="ticket" value={formData.ticket}  onChange={handleChange} required/>
                </Form.Group>

            </Row>
            <Row>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Titulo</Form.Label>
                <Form.Control type="text" placeholder="Titulo" name="titulo" value={formData.titulo}  onChange={handleChange} required/>
                </Form.Group>

            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Descrição</Form.Label>
                <Form.Control type='textarea' as="textarea" name="descricao" value={formData.descricao}  onChange={handleChange} required />
                
            </Form.Group>



            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Prioridade</Form.Label>
                <Form.Control type="number" name="prioridade" value={formData.prioridade}  onChange={handleChange} required/>
                </Form.Group>


                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Setor responsável</Form.Label>
                <Form.Control type="text" name="donofalha" value={formData.donofalha}  onChange={handleChange} required/>
                </Form.Group>
            </Row>


            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    </div>
  );
}

export default FormFalha;