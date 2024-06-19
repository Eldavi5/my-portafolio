import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Projects.css';

const Projects = () => (
    <section id="projects" className="projects-section">
        <Container>
            <h2>Proyectos</h2>
            <Row className="mb-4">
                <Col md={6} className="mb-4">
                    <Card className="project-card">
                        <Card.Img variant="top" src={require("../images/Ots.png")} />
                        <Card.Img variant="top" src={require("../images/Ots2.png")} />
                        <Card.Body>
                            <Card.Title>Observatorio Tecnologico y Sistemas de Informacion</Card.Title>
                            <Card.Text>
                                El proyecto "Generamos el click" busca fomentar la interacción entre la inteligencia colectiva de una red de expertos y las necesidades de información de empresas de diversos sectores. Esto se logra mediante el uso de inteligencia de negocios basada en tecnología y análisis de datos. La misión principal es convertirse en un referente en México en lo que respecta a tendencias, indicadores y datos relacionados con las tecnologías y el desarrollo tecnológico.

                                Este proyecto aspira a contribuir con mejores prácticas para el desarrollo económico, académico y social del país. Al facilitar la conexión entre expertos y empresas, se busca promover la innovación, la eficiencia y el crecimiento en diferentes ámbitos, aprovechando el potencial de la tecnología y los datos para generar impacto positivo en la sociedad mexicana.
                                <br /><br />
                                <strong>Herramientas utilizadas:</strong> HTML, SCSS, JavaScript, ReactJs, Pyhton, Django
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="mb-4">
                    <Card className="project-card">
                        <Card.Img variant="top" src={require("../images/Check-on-Web.png")} />
                        <Card.Img variant="max" src={require("../images/Check-on-App.jpg")} />
                        <Card.Body>
                            <Card.Title>Check-On</Card.Title>
                            <Card.Text>
                                El proyecto sistema de gestión de servicios especializados consiste en el desarrollo de un software que permita monitorear la eficiencia de los trabajos de subcontratación de servicios especializados o de ejecución de obras especializadas, teniendo como objetivo final el de brindar un mejor servicio a los clientes y lograr que los procesos internos de trabajo sean más rápidos y eficientes.
                                <br /><br />
                                <strong>Herramientas utilizadas:</strong> HTML, SCSS, JavaScript, ReactJs, ReactNative, Python, Django
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
);

export default Projects;
