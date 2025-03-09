import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Socials.css';

const Socials = () => {
  return (
    <section id="socials" className="my-5 socials-section">
      <Container>
        <h2 className="text-center mb-4">Connect with Me</h2>
        <Row className="justify-content-center">
          <Col xs={4} sm={2} className="text-center mb-3">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub size={40} />
            </a>
          </Col>
          <Col xs={4} sm={2} className="text-center mb-3">
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin size={40} />
            </a>
          </Col>
          <Col xs={4} sm={2} className="text-center mb-3">
            <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram size={40} />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Socials;
