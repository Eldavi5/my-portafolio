import React from 'react';
import { Parallax } from 'react-parallax';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <div className="App">
    <Parallax bgImage={require("../src/images/imagen-fondo.jpg")} strength={0} bgStyle={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
      <div style={{ minHeight: '100vh' }}>
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </Parallax>
  </div>
);

export default App;

