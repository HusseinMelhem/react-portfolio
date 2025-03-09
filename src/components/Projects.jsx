import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

const projects = [
  {
    title: 'ems-with-sprinboot-and-react',
    description:
      'A comprehensive Employee Management System implemented with Spring Boot on the backend and React on the frontend, offering streamlined employee data management and efficient communication.',
    image: 'project1.png',
    link: 'https://github.com/HusseinMelhem/ems-with-sprinboot-and-react'
  },
  {
    title: 'FNM Mall',
    description:
      'A fully-featured eCommerce platform developed in Laravel, featuring an advanced checkout system, dynamic product filtering, secure authentication, and a robust admin panel for complete customization.',
    image: 'fnm.png',
    link: 'https://fnm-mall.com'
  },
  {
    title: 'Clothing Website',
    description:
      'An eCommerce clothing store built using PHP, offering a complete shopping cart, integrated admin dashboard, and advanced search capabilities optimized for seamless social media integration.',
    image: 'dreamroom.png',
    link: 'https://dreamroom.fnm-mall.com'
  },
  {
    title: 'Hotel Booking System',
    description:
      'A robust hotel booking system developed with JavaFX, MySQL, and Java multithreading, designed to streamline reservation management and enhance operational efficiency.',
    image: 'hotelbooking.png',
    link: 'https://github.com/HusseinMelhem/HotelBookingSystem-JavaFX-MySQL-multithreading'
  },
  {
    title: 'Metal Company Ecommerce',
    description:
      'A showcase website for a metal trading company, featuring detailed product displays and a fully customizable admin panel for effortless content management.',
    image: 'metalcompany.png',
    link: 'https://mega-metal-international.com'
  },
  {
    title: 'Student Management System',
    description:
      'An integrated student management system that utilizes a secure database for storing student records. The platform offers dedicated login modules for administrators and students, ensuring streamlined access to academic and administrative functionalities.',
    image: 'studentmanagment.png',
    link: 'https://github.com/HusseinMelhem/StudentManagementSystem-withMysqlImplementation'
  },
];

const Projects = () => {
  const visibleCount = 4;
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = projects.length - visibleCount; // Maximum left shift index
  const cardWidth = 100 / visibleCount; // Each card occupies a percentage width

  // Auto slide: Update index every 3 seconds and loop back when reaching the end
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  // Manual controls
  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="my-5">
      <h2 style={{ color: 'white' }}>Projects</h2>
      <div className="position-relative">
        <div className="overflow-hidden">
          <div
            className="d-flex"
            style={{
              transition: 'transform 0.5s ease',
              transform: `translateX(-${currentIndex * cardWidth}%)`
            }}
          >
            {projects.map((project, idx) => (
              <div key={idx} style={{ flex: `0 0 ${cardWidth}%`, padding: '0 10px' }}>
                <Card
                  style={{
                    background: 'transparent',
                    color: 'white',
                    border: '2px solid #16a085',
                    borderRadius: '8px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)'
                  }}
                  className="h-100"
                >
                  <Card.Img
                    variant="top"
                    src={`${import.meta.env.BASE_URL}${project.image}`}
                    alt={project.title}
                  />
                  <Card.Body style={{ position: 'relative', paddingBottom: '70px' }}>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '100%'
                      }}
                    >
                      <Button variant="dark" href={project.link} target="_blank">
                        View Project
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <Button
          variant="secondary"
          onClick={handlePrev}
          className="position-absolute top-50 start-0 translate-middle-y"
        >
          &#8249;
        </Button>
        <Button
          variant="secondary"
          onClick={handleNext}
          className="position-absolute top-50 end-0 translate-middle-y"
        >
          &#8250;
        </Button>
      </div>
    </section>
  );
};

export default Projects;
