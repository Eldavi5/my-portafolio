import React, { useContext } from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import Logo from '../images/Logo.png';
import '../styles/Header.scss';

export const Header = () => {
    const { colors, handlePaletteChange } = useContext(ThemeContext);

    return (
        <header style={{ backgroundColor: colors.background, color: colors.text }}>
            <Navbar expand="lg" className="custom-header">
                <Container>
                    <Navbar.Brand className="custom-brand">
                        <img src={Logo} alt="Logo" className="logo" />
                        <div className="brand-text">
                            <h1 style={{ color: colors.primary }}>David Silva Bello</h1>
                            <p style={{ color: colors.secondary }}>Desarrollador Front-End</p>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#about" style={{ color: colors.primary }}>Sobre Mí</Nav.Link>
                            <Nav.Link href="#projects" style={{ color: colors.primary }}>Proyectos</Nav.Link>
                            <Nav.Link href="#contact" style={{ color: colors.primary }}>Contacto</Nav.Link>
                        </Nav>
                        <Dropdown className="theme-dropdown">
                            <Dropdown.Toggle 
                                variant="secondary" 
                                id="dropdown-basic" 
                                style={{ backgroundColor: colors.primary, color: colors.secondary }}
                            >
                                Tema
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{ backgroundColor: colors.secondary }}>
                                <Dropdown.Item 
                                    style={{ backgroundColor: colors.secondary, color: colors.text }} 
                                    onClick={() => handlePaletteChange('neon')}
                                >
                                    Neón Futurista
                                </Dropdown.Item>
                                <Dropdown.Item 
                                    style={{ backgroundColor: colors.secondary, color: colors.text }} 
                                    onClick={() => handlePaletteChange('space')}
                                >
                                    Espacial
                                </Dropdown.Item>
                                <Dropdown.Item 
                                    style={{ backgroundColor: colors.secondary, color: colors.text }} 
                                    onClick={() => handlePaletteChange('techGreen')}
                                >
                                    Tecnología Verde
                                </Dropdown.Item>
                                <Dropdown.Item 
                                    style={{ backgroundColor: colors.secondary, color: colors.text }} 
                                    onClick={() => handlePaletteChange('purpleMystic')}
                                >
                                    Púrpura Místico
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};
