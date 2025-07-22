import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css'; // Assuming you have a CSS file for styling

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <h1>Welcome to Arkaprava's Portfolio</h1>
      <p>Full Stack Developer | Problem Solver | Creative Thinker | AI/ML | Automation</p>
      <button onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
      
      {/* Waves effect */}
      <div className="waves">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
      </div>

      {/* Bubbles effect */}
      <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
    </div>
  );
};

export default Landing;