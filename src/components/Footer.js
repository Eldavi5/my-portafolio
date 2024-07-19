import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Footer.scss';

export const Footer = () => {
    const { colors } = useContext(ThemeContext);
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" style={{ backgroundColor: colors.background, color: colors.text }}>
            <Container>
                <p>&copy; {currentYear} David Silva Bello. Todos los derechos reservados.</p>
            </Container>
        </footer>
    );
};
