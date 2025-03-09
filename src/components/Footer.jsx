import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1e1e1e' }} className="py-3 mt-5">
      <Container className="text-center">
        <small style={{ color: '#e0e0e0' }}>
          &copy; {new Date().getFullYear()} Hussein Melhem. All rights reserved.
        </small>
      </Container>
    </footer>
  );
};

export default Footer;
