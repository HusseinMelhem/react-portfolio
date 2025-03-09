import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './SideNavbar.css';

// Simple function to detect mobile devices
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const skillsProgress = [
  { skill: 'Problem Solving', percent: 100 },
  { skill: 'Team Work', percent: 100 },
  { skill: 'Passionate About Coding', percent: 100 },
];

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const mobile = isMobileDevice();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`side-navbar ${isOpen ? 'open' : 'closed'}`}>
      {mobile && !isOpen && (
        <div className="mobile-toggle" onClick={toggleSidebar}>
        {isOpen ? '←' : '→'}
      </div>
      )}
        {skillsProgress.map((item, index) => (
          <div key={index} className="side-navbar-item">
            <div className="progress-container">
              <CircularProgressbar
                value={item.percent}
                text={`${item.percent}%`}
                styles={buildStyles({
                  textSize: '24px',
                  pathColor: '#16a085',
                  textColor: 'white',
                  trailColor: '#d6d6d6',
                })}
              />
            </div>
            <div className="skill-label">{item.skill}</div>
          </div>
        ))}
      </div>
      {/* Extra bottom toggle arrow: visible only on mobile when the sidebar is closed */}
      {mobile && !isOpen && (
        <div className="mobile-toggle-bottom" onClick={toggleSidebar}>
          →
        </div>
      )}
    </>
  );
};

export default SideNavbar;
