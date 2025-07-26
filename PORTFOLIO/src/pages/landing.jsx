import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Galaxy from './Galaxy';
import './landing.css';

const Landing = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="landing-wrapper">
      {/* Galaxy background container */}
      <div className="galaxy-container">
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={240}
        />
      </div>

      {/* Content overlay */}
      <div className="landing-content">
        <h1 className="typewriter">Welcome to Arkaprava's Portfolio</h1>
        <p>Full Stack Developer | Problem Solver | Creative Thinker | AI/ML | Automation</p>
        <button onClick={() => navigate('/dashboard')}>
          KNOW Me
          <span style={{marginLeft: '8px', display: 'inline-block', transition: 'transform 0.3s ease'}}>
            →
          </span>
        </button>
      </div>
    </div>
  );
};

export default Landing;