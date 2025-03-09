import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Skills.css';

const skills = [
  {
    name: 'React + React Native',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    link: 'https://reactjs.org/'
  },
  {
    name: 'Spring Boot',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Spring_Boot.svg',
    link: 'https://spring.io/projects/spring-boot'
  },
  {
    name: 'Laravel',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/738px-Laravel.svg.png',
    link: 'https://laravel.com/'
  },
  {
    name: 'PHP',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg',
    link: 'https://www.php.net/'
  },
  {
    name: '.NET',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/480px-Microsoft_.NET_logo.svg.png',
    link: 'https://dotnet.microsoft.com/'
  },
  {
    name: 'C/C++',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg',
    link: 'https://en.wikipedia.org/wiki/C_(programming_language)'
  },
  {
    name: 'Java',
    image: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
    link: 'https://www.java.com/'
  },
  {
    name: 'MySQL',
    image: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg',
    link: 'https://www.mysql.com/'
  },
  
];

const Skills = () => {
  return (
    <section id="skills" className="my-5 skills-section">
      <Container>
        <h2 className="text-center mb-4">My Skills & Frameworks</h2>
        <Row className="justify-content-center">
          {skills.map((skill, idx) => (
            <Col key={idx} xs={6} sm={4} md={3} className="text-center mb-4">
              <a href={skill.link} target="_blank" rel="noopener noreferrer" className="skill-link">
                <div className="skill-card">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    fluid
                    className="skill-img"
                  />
                  <p className="mt-2 skill-name">{skill.name}</p>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
