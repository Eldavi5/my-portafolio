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
                        <Card.Img variant="top" src="image1.jpg" />
                        <Card.Img variant="top" src="image2.jpg" />
                        <Card.Body>
                            <Card.Title>Proyecto 1</Card.Title>
                            <Card.Text>
                                Descripción del proyecto 1...
                                <br /><br />
                                <strong>Herramientas utilizadas:</strong> HTML, CSS, JavaScript, React
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="mb-4">
                    <Card className="project-card">
                        <Card.Img variant="top" src="image3.jpg" />
                        <Card.Img variant="top" src="image4.jpg" />
                        <Card.Body>
                            <Card.Title>Proyecto 2</Card.Title>
                            <Card.Text>
                                Descripción del proyecto 2...
                                <br /><br />
                                <strong>Herramientas utilizadas:</strong> Node.js, Express, MongoDB
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
);

export default Projects;
