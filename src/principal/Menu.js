import React, {useContext} from 'react';
import { Header, About, Projects, Contact, Footer } from "../components";
import { ThemeContext } from '../context/ThemeContext';
import "./Export.scss";

export function Menu() {
    const { colors } = useContext(ThemeContext);
    return (
        <div className="App" style={{backgroundColor: colors.primary}}>
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
