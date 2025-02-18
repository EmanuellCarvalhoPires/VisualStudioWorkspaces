import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './body.css'
import FormFalha from './assets/formularioCriarFalha';
import ListarFalhas from './assets/listarFalhas';
import ListarFalhasFechadas from './assets/listarFalhasAntigas';

function Body(){



    return( 
            <div className="centralDIV">
                <div className="TudoDentroDaCentralDIV">
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" itemID='TITULOTAB'>
                            <Tab eventKey="home" title="Falhas atuais" className='corTitulo'>
                                <Table responsive striped hover size="lg" id='TABLE'>
                                    <thead id='TABLEHEAD'>
                                        <tr >
                                            
                                            <th>Ticket</th>
                                            <th>MVNO</th>
                                            <th>PRIORIDADE</th>
                                            <th>Setor responsável pela Falha</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody id='TABLEBODY'>

                                        <ListarFalhas/>
                                        
                                    </tbody>
                                </Table>
                            </Tab>
                            <Tab eventKey="Novo caso" title="Falhas antigas">
                                    
                            <Table responsive striped hover size="lg" id='TABLE'>
                                    <thead id='TABLEHEAD'>
                                            <tr >
                                                
                                                <th>Ticket</th>
                                                <th>MVNO</th>
                                                <th>PRIORIDADE</th>
                                                <th>Setor responsável pela Falha</th>
                                                <th>Status</th>
                                            </tr>
                                    </thead>
                                    <tbody id='TABLEBODY'>

                                        <ListarFalhasFechadas/>
                                        
                                    </tbody>
                                </Table>
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