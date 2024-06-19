import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Contact.css';

const Contact = () => (
    <section id="contact" className="contact-section">
        <Container>
            <h2>Contacto</h2>
            <Row className="justify-content-center mb-4">
                <Col md={8} lg={6}>
                    <div className="contact-info">
                        <h4>Información de Contacto</h4>
                        <p><strong>Teléfono:</strong> +123 456 7890</p>
                        <p><strong>Correo Electrónico:</strong> david.silva@example.com</p>
                        <h4>Redes Sociales</h4>
                        <p><a href="https://linkedin.com/in/davidsilva" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                        <p><a href="https://github.com/davidsilva" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md="auto">
                    <Button variant="primary" href="/path-to-your-cv.pdf" download>
                        Descargar CV
                    </Button>
                </Col>
            </Row>
        </Container>
    </section>
);

export default Contact;

