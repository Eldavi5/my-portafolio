import React, { useState, useContext } from 'react';
import { Container, Row, Col, Card, Button, Modal, Carousel } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Projects.scss';

export const Projects = () => {
    const { colors } = useContext(ThemeContext);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', content: '' });

    const handleCardClick = (project) => {
        setModalContent(project);
        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);

    const projects = [
        {
            title: 'Observatorio Tecnologico y Sistemas de Informacion',
            imgSrc: [require("../images/Ots.png"), require("../images/Ots2.png")],
            content: (
                <>
                    <p>
                        El proyecto "Generamos el click" busca fomentar la interacción entre la inteligencia colectiva de una red de expertos y las necesidades de información de empresas de diversos sectores. Esto se logra mediante el uso de inteligencia de negocios basada en tecnología y análisis de datos. La misión principal es convertirse en un referente en México en lo que respecta a tendencias, indicadores y datos relacionados con las tecnologías y el desarrollo tecnológico.
                    </p>
                    <p>
                        Este proyecto aspira a contribuir con mejores prácticas para el desarrollo económico, académico y social del país. Al facilitar la conexión entre expertos y empresas, se busca promover la innovación, la eficiencia y el crecimiento en diferentes ámbitos, aprovechando el potencial de la tecnología y los datos para generar impacto positivo en la sociedad mexicana.
                    </p>
                    <p>
                        <strong>Herramientas utilizadas:</strong> HTML, SCSS, JavaScript, ReactJs, Python, Django
                    </p>
                </>
            )
        },
        {
            title: 'Check-On',
            imgSrc: [require("../images/Check-on-Web.png"), require("../images/Check-on-App.jpg")],
            content: (
                <>
                    <p>
                        El proyecto sistema de gestión de servicios especializados consiste en el desarrollo de un software que permita monitorear la eficiencia de los trabajos de subcontratación de servicios especializados o de ejecución de obras especializadas, teniendo como objetivo final el de brindar un mejor servicio a los clientes y lograr que los procesos internos de trabajo sean más rápidos y eficientes.
                    </p>
                    <p>
                        <strong>Herramientas utilizadas:</strong> HTML, SCSS, JavaScript, ReactJs, ReactNative, Python, Django
                    </p>
                </>
            )
        }
    ];

    return (
        <section id="projects" className="projects-section" style={{ backgroundColor: colors.primary }}>
            <Container>
                <h2 style={{ color: colors.text }}>Proyectos</h2>
                <Row className="justify-content-center">
                    {projects.map((project, index) => (
                        <Col key={index} md={6} className="mb-4">
                            <Card className="project-card" style={{ backgroundColor: colors.secondary }}>
                                <Carousel>
                                    {project.imgSrc.map((src, i) => (
                                        <Carousel.Item key={i}>
                                            <img
                                                className="d-block w-100"
                                                src={src}
                                                alt={`Slide ${i}`}
                                                style={{ borderColor: colors.primary }}
                                            />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                                <Card.Body className="d-flex flex-column justify-content-between">
                                    <Card.Title style={{ color: colors.primary }}>{project.title}</Card.Title>
                                    <Button 
                                        variant="primary" 
                                        onClick={() => handleCardClick(project)} 
                                        style={{ backgroundColor: colors.primary, borderColor: colors.primary }}
                                    >
                                        Ver más
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

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
        </section>
    );
};
