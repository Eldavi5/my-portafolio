import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/About.css';

const About = () => (
    <section id="about" className="about-section">
        <Container>
            <h2>Sobre Mí</h2>
            <Row className="mb-4">
                <Col>
                    <Card className="bio-card">
                        <Card.Body>
                            <Card.Title>Biografía</Card.Title>
                            <Card.Text>
                                Soy un programador Full Stack con experiencia en...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                    <Card className="skills-card">
                        <Card.Body>
                            <Card.Title>Habilidades</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>HTML, CSS, JavaScript</li>
                                    <li>React, Angular</li>
                                    <li>Node.js, Express</li>
                                    <li>Base de datos: MongoDB, MySQL</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="education-card">
                        <Card.Body>
                            <Card.Title>Educación</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Ingeniería en Sistemas Computacionales - Universidad XYZ</li>
                                    <li>Maestría en Ciencias de la Computación - Universidad ABC</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="experience-card">
                        <Card.Body>
                            <Card.Title>Experiencia Laboral</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Desarrollador Full Stack en Empresa 1 (2018 - Presente)</li>
                                    <li>Desarrollador Front-End en Empresa 2 (2015 - 2018)</li>
                                    <li>Intern en Empresa 3 (2014 - 2015)</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
);

export default About;
