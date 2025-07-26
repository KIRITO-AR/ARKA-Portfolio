import React from 'react';
import { useNavigate } from 'react-router-dom';
import Galaxy from './Galaxy'; // Assuming Galaxy is in the same folder or adjust the path
import './Landing.css';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-wrapper">
      <Galaxy className="galaxy-bg" />
      <div className="landing-content">
        <h1>Welcome to Arkaprava's Portfolio</h1>
        <p>Full Stack Developer | Problem Solver | Creative Thinker | AI/ML | Automation</p>
        <button onClick={() => navigate('/dashboard')}>KNOW Me</button>
      </div>
    </div>
  );
};

export default Landing;
