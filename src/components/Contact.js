import React, { useState, useContext } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { ThemeContext } from "../context/ThemeContext";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import "../styles/Contact.scss";

export const Contact = () => {
  const { colors } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:davidsilvabello25@gmail.com?subject=Contact from ${formData.name}&body=${formData.message} %0A %0A Sender Email: ${formData.email}`;
  };

  return (
    <section
      id="contact"
      className="contact-section"
      style={{ backgroundColor: colors.background }}
    >
      <Container>
        <h2 style={{ color: colors.text }}>Contacto</h2>
        <Row className="justify-content-center mb-4">
          <Col md={8} lg={6}>
            <div
              className="contact-info"
              style={{ backgroundColor: colors.secondary }}
            >
              <h4 style={{ color: colors.text }}>Información de Contacto</h4>
              <p style={{ color: colors.primary }}>
                <strong>Teléfono:</strong> +52 (561) 152 8080
              </p>
              <p style={{ color: colors.primary }}>
                <strong>Correo Electrónico:</strong> davidsilvabello25@gmail.com
              </p>
              <h4 style={{ color: colors.text }}>Redes Sociales</h4>
              <a
                href="https://github.com/Eldavi5"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: colors.primary,
                  fontSize: "2rem",
                  textDecoration: "none",
                }}
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/david-silva-38006a1b0"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: colors.primary,
                  fontSize: "2rem",
                  textDecoration: "none",
                }}
              >
                <IoLogoLinkedin />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="auto">
            <Button
              variant="primary"
              href={require("../docs/CV.pdf")}
              download
              style={{
                backgroundColor: colors.primary,
                borderColor: colors.primary,
              }}
            >
              Descargar CV
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col md={8} lg={6}>
            <Form
              className="contact-form"
              onSubmit={handleSubmit}
              style={{ backgroundColor: colors.secondary }}
            >
              <Form.Group controlId="formName">
                <Form.Label style={{ color: colors.text }}>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tu nombre"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label style={{ color: colors.text }}>
                  Correo Electrónico
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Tu correo electrónico"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label style={{ color: colors.text }}>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Tu mensaje"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                style={{
                  backgroundColor: colors.primary,
                  borderColor: colors.primary,
                }}
              >
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
