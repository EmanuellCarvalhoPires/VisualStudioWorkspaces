import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



function Body(){



    return( 
            <div className="centralDIV">
                <div className="list">
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" itemID='TITULOTAB'>
                            <Tab eventKey="home" title="Falhas atuais" itemID=''>

                                <ListGroup>
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                </ListGroup>

                            </Tab>
                            <Tab eventKey="Novo caso" title="Profile">
                                Tab content for Profile
                            </Tab>
                            <Tab eventKey="Nova falha" title="Contact" >
                                Tab content for Contact
                            </Tab>
                    </Tabs>

                </div>



                </div>

            )


}

export default Body