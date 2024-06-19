import React from 'react';
import '../styles/Contact.css';
import { Button } from 'react-bootstrap';

const Contact = () => (
    <section id="contact">
        <h2>Contacto</h2>
        <form>
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Correo Electrónico" />
            <textarea placeholder="Mensaje"></textarea>
            <Button variant="primary">Enviar</Button>
        </form>
    </section>
);

export default Contact;
