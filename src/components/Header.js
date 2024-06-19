import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/Header.css';

const Header = () => (
    <Navbar expand="lg" className="custom-header">
        <Container>
            <Navbar.Brand className="custom-brand">
                <h1>David Silva Bello</h1>
                <p>Desarrollador Front-End</p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#about">Sobre Mí</Nav.Link>
                    <Nav.Link href="#projects">Proyectos</Nav.Link>
                    <Nav.Link href="#contact">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Header;
