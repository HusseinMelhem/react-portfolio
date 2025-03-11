import React from 'react';
import Navigation from './components/Navigation';
import SideNavbar from './components/SideNavbar';
import About from './components/About';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Socials from './components/Socials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <div className="background-wrapper"></div>

   
      <Navigation />
      <SideNavbar />

      <div className="main-content">
        <div className="container mt-4">
          <About />
          <Skills />
          <WorkExperience />
          <Projects />
          <Contact />
          <Socials />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
