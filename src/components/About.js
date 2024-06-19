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
                                ¡Hola! Soy David Silva Bello, un apasionado desarrollador Full Stack con experiencia en la creación de aplicaciones web y móviles utilizando una variedad de tecnologías. Me especializo en el desarrollo tanto del lado del cliente como del servidor, lo que me permite crear soluciones completas y escalables para diversas necesidades.

                                Desde mis primeros días como programador, me he sentido atraído por el mundo del desarrollo web y móvil. Me encanta enfrentar nuevos desafíos y aprender constantemente sobre las últimas tecnologías y prácticas de desarrollo. Mi enfoque principal es ofrecer soluciones robustas y de alta calidad que satisfagan las necesidades de mis clientes y usuarios finales.
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
                                    <li>Desarrollo backend con Django y Python.</li>
                                    <li>Creación de API RESTful.</li>
                                    <li>Gestión de bases de datos con PostgreSQL.</li>
                                    <li>Desarrollo frontend con React.js, HTML y SCSS.</li>
                                    <li>Desarrollo de aplicaciones móviles con React Native.</li>
                                    <li>Experiencia en control de versiones con Git, GitHub y GitLab.</li>
                                    <li>Implementación de contenedores con Docker.</li>
                                    <li>Experiencia en el uso de Visual Studio Code como mi entorno de desarrollo preferido.</li>
                                    <li>Trabajo colaborativo utilizando la metodología Scrum para la gestión de proyectos.</li>
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
                                    <li>Ingeniería en Sistemas Computacionales - Tecnologico de Estudios Superiores Ecatepec</li>
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
                                    <li>Desarrollador Full Stack en Loop Conexion Empresarial (2023 - Presente)</li>
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
