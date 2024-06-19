import React from 'react'
import { Header, About, Projects, Contact, Footer } from "../components"
import "./Export.scss"

export function Menu() {
    return (
        <div className="App">
            <div style={{ minHeight: '100vh' }}>
                <Header />
                <About />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}
