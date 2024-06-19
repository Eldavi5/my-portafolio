import React from 'react'
import { Parallax } from 'react-parallax'
import { Header, About, Projects, Contact, Footer } from "../components"
import "./Export.scss"

export function Menu() {
    return (
        <div className="App">
            <Parallax bgImage={require("../images/fondo.jpg")} strength={500}>
                <div style={{ minHeight: '100vh' }}>
                    <Header />
                    <About />
                    <Projects />
                    <Contact />
                    <Footer />
                </div>
            </Parallax>
        </div>
    )
}
