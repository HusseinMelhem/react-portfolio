import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact Form Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:hussien.melhem81@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="my-5">
      <h2 style={{ color: 'white' }}>Contact Me</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="contactForm.Name">
          <Form.Label style={{ color: 'white' }}>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="contactForm.Email">
          <Form.Label style={{ color: 'white' }}>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="contactForm.Message">
          <Form.Label style={{ color: 'white' }}>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        <br />
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
};

export default Contact;
