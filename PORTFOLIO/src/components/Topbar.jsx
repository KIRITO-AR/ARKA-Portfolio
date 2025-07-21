import React from 'react';
import './Topbar.css';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <h1>Portfolio Dashboard</h1>
      </div>
      <div className="topbar-right">
        <button className="theme-toggle">
          <i className="fas fa-moon"></i>
        </button>
        <a href="https://github.com/KIRITO-AR" target="_blank" rel="noopener noreferrer" className="github-link">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Topbar;
