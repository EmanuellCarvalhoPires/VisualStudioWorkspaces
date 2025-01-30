import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './body.css'
import FormFalha from './assets/formularioCriarFalha';



function Body(){



    return( 
            <div className="centralDIV">
                <div className="TudoDentroDaCentralDIV">
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" itemID='TITULOTAB'>
                            <Tab eventKey="home" title="Falhas atuais" className='corTitulo'>

                                <ListGroup>
                                    <ListGroup.Item></ListGroup.Item>
                                    <ListGroup.Item></ListGroup.Item>
                                    <ListGroup.Item></ListGroup.Item>
                                    <ListGroup.Item></ListGroup.Item>
                                    <ListGroup.Item></ListGroup.Item>
                                </ListGroup>

                            </Tab>
                            <Tab eventKey="Novo caso" title="Falhas antigas">
                                Tab content for Profile
                            </Tab>
                            <Tab eventKey="Nova falha" title="Adicionar falha" >
                                <FormFalha/>
                            </Tab>
                    </Tabs>

                </div>



                </div>

            )


}

export default Body