import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/About.scss';

const CardItem = ({ card, onClick, colors }) => (
    <Col md={4} className="mb-4">
        <Card className="info-card" style={{ backgroundColor: colors.secondary }}>
            <Card.Body>
                <Card.Title style={{ color: colors.primary }}>{card.title}</Card.Title>
                <Button 
                    variant="primary" 
                    onClick={() => onClick(card)} 
                    style={{ backgroundColor: colors.primary, borderColor: colors.primary }}
                >
                    Ver más
                </Button>
            </Card.Body>
        </Card>
    </Col>
);

CardItem.propTypes = {
    card: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    colors: PropTypes.object.isRequired,
};

const ModalContent = ({ showModal, handleCloseModal, modalContent, colors }) => (
    <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton style={{ backgroundColor: colors.background, color: colors.text }}>
            <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: colors.background, color: colors.text }}>
            {modalContent.content}
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: colors.background }}>
            <Button variant="secondary" onClick={handleCloseModal} style={{ backgroundColor: colors.secondary, borderColor: colors.secondary }}>
                Cerrar
            </Button>
        </Modal.Footer>
    </Modal>
);

ModalContent.propTypes = {
    showModal: PropTypes.bool.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    modalContent: PropTypes.object.isRequired,
    colors: PropTypes.object.isRequired,
};

export const About = () => {
    const { colors } = useContext(ThemeContext);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', content: '' });

    const handleCardClick = (card) => {
        setModalContent(card);
        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);

    const cards = [
        {
            title: 'Habilidades',
            content: (
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
            )
        },
        {
            title: 'Educación y Competencias',
            content: (
                <React.Fragment>
                    <ul>
                        <li>Ingeniería en Sistemas Computacionales - Tecnologico de Estudios Superiores Ecatepec</li>
                    </ul>
                    <h4>Competencias</h4>
                    <ul>
                        <li>Curso - React de cero a experto</li>
                        <li>Curso - React y Django</li>
                        <li>Curso - React native aplicaciones nativas para android y ios</li>
                        <li>Curso - Machine learning A a la Z: R y Python para Data Science</li>
                    </ul>
                </React.Fragment>
            )
        },
        {
            title: 'Experiencia Laboral',
            content: (
                <ul>
                    <li>Desarrollador Full Stack en Loop Conexion Empresarial (2023 - Presente)</li>
                </ul>
            )
        }
    ];

    return (
        <section id="about" className="about-section" style={{ backgroundColor: colors.primary }}>
            <Container>
                <h2 style={{ color: colors.text }}>Sobre Mí</h2>
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <Card className="bio-card" style={{ backgroundColor: colors.secondary }}>
                            <Card.Body>
                                <Card.Title style={{ color: colors.primary }}>Biografía</Card.Title>
                                <Card.Text style={{ color: colors.text }}>
                                    ¡Hola! Soy David Silva Bello, un apasionado desarrollador Full Stack con experiencia en la creación de aplicaciones web y móviles utilizando una variedad de tecnologías. Me especializo en el desarrollo tanto del lado del cliente como del servidor, lo que me permite crear soluciones completas y escalables para diversas necesidades.

                                    Desde mis primeros días como programador, me he sentido atraído por el mundo del desarrollo web y móvil. Me encanta enfrentar nuevos desafíos y aprender constantemente sobre las últimas tecnologías y prácticas de desarrollo. Mi enfoque principal es ofrecer soluciones robustas y de alta calidad que satisfagan las necesidades de mis clientes y usuarios finales.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <h3 style={{ color: colors.text }}>Habilidades, Educación y Experiencia</h3>
                <Row className="horizontal-scroll justify-content-center">
                    {cards.map((card, index) => (
                        <CardItem key={index} card={card} onClick={handleCardClick} colors={colors} />
                    ))}
                </Row>
            </Container>

            <ModalContent 
                showModal={showModal} 
                handleCloseModal={handleCloseModal} 
                modalContent={modalContent} 
                colors={colors} 
            />
        </section>
    );
};
