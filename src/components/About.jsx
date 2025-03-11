import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const titleVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const descriptionVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.5, duration: 0.8 }
    }
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 }
    }
  };

  return (
    
    <section id="about" className="my-5 about-section">
      <Row className="align-items-center">
        <Col md={6}>
          <motion.div
            className="about-intro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.h2 variants={titleVariant}>About Me</motion.h2>
            <motion.p variants={descriptionVariant}>
            Hello, I'm Hussein Melhem, a dedicated full-stack developer with a passion for creating modern, 
            responsive web applications. With a keen eye for design and a commitment to quality code, I thrive on bringing innovative solutions to life.
            </motion.p>
          </motion.div>
        </Col>
        <Col md={6} className="text-center">
          <motion.div
            className="about-image"
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Image
               src={`${import.meta.env.BASE_URL}profileimg.jpg`}  
              roundedCircle
              fluid
              alt="Hussein Melhem"
              className="profile-img"
            />
          </motion.div>
        </Col>
      </Row>
    </section>
  );
};

export default About;
