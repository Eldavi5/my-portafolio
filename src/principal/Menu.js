import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Header, About, Projects, Contact, Footer } from "../components";
import { ThemeContext } from '../context/ThemeContext';
import "./Export.scss";

export function Menu() {
    const { colors } = useContext(ThemeContext);

    return (
        <div className="App" style={{ backgroundColor: colors.background, color: colors.text }}>
            <div style={{ minHeight: '100vh' }}>
                <Header />
                <About />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

Menu.propTypes = {
    colors: PropTypes.shape({
        background: PropTypes.string.isRequired,
        primary: PropTypes.string.isRequired,
        secondary: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
};
