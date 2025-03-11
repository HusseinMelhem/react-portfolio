import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './SideNavbar.css';

const skillsProgress = [
  { skill: 'Problem Solving', percent: 100 },
  { skill: 'Team Work', percent: 100 },
  { skill: 'Passionate About Coding', percent: 100 },
];

const SideNavbar = () => {
  return (
    <div className="side-navbar">
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
  );
};

export default SideNavbar;
