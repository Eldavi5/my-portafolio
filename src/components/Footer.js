import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Footer.scss';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <Container>
                <p>&copy; {currentYear} David Silva Bello. Todos los derechos reservados.</p>
            </Container>
        </footer>
    );
};
