import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Contact.scss';

export const Contact = () => (
    <section id="contact" className="contact-section">
        <Container>
            <h2>Contacto</h2>
            <Row className="justify-content-center mb-4">
                <Col md={8} lg={6}>
                    <div className="contact-info">
                        <h4>Información de Contacto</h4>
                        <p><strong>Teléfono:</strong> +52 (561) 152 8080</p>
                        <p><strong>Correo Electrónico:</strong> davidsilvabello25@gmail.com</p>
                        <h4>Redes Sociales</h4>
                        <p><a href="https://linkedin.com/in/david-silva-38006a1b0" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                        <p><a href="https://github.com/Eldavi5" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md="auto">
                    <Button variant="primary" href={require("../docs/CV.pdf")} download>
                        Descargar CV
                    </Button>
                </Col>
            </Row>
        </Container>
    </section>
);


