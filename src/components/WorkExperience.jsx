import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import './WorkExperience.css';

const experiences = [
  {
    company: 'Smartec',
    role: 'Embedded Systems Engineer',
    duration: 'August 2022 - April 2023',
    description: 'Managed a touch screen system by overseeing its communication with a server, memory, and interactive components. Developed a desktop application using C# to customize the screen’s GUI and handle communication between the desktop and the touch screen.'
  },
  {
    company: 'Freelance Ecommerce Website',
    role: 'Laravel Developer',
    duration: 'Jan 2022 - July 2022',
    description: 'Designed and implemented responsive user interfaces for a freelance e-commerce platform using Laravel, ensuring optimal performance and a seamless user experience.'
  },
  {
    company: 'Freelance Ecommerce Website',
    role: 'PHP Developer',
    duration: 'Jan 2022 - February 2022',
    description: 'Contributed to both frontend and backend development on two separate freelance projects, delivering robust and comprehensive web solutions.'
  }
];

const WorkExperience = () => {
  return (
    <section id="experience" className="my-5 work-experience-section">
      <Container>
        <h2 className="text-center mb-4" style={{ color: 'white' }}>Work Experience</h2>
        <Row>
          {experiences.map((exp, idx) => (
            <Col key={idx} md={4} className="mb-4">
              <Card className="h-100 work-card" id="card">
                <Card.Body>
                  <Card.Title style={{ color: 'white' }}>{exp.role}</Card.Title>
                  <Card.Subtitle style={{ color: 'white' }} className="mb-2">
                    {exp.company}
                  </Card.Subtitle>
                  <Card.Text style={{ color: 'white' }}>
                    <small>{exp.duration}</small>
                  </Card.Text>
                  <Card.Text style={{ color: 'white' }}>{exp.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WorkExperience;
