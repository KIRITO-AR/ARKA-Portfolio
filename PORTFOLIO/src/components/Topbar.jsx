import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css';

const Topbar = () => {

  return (
    <div className="topbar">
      <Link to="/" className="logo">
        <h2>Arkaprava</h2>
      </Link>
      <nav className="nav-menu">
        <Link to="/dashboard" className="nav-item">
          <i className="fas fa-home"></i>
          <span>Overview</span>
        </Link>
        <Link to="/dashboard/projects" className="nav-item">
          <i className="fas fa-project-diagram"></i>
          <span>Projects</span>
        </Link>
        <Link to="/dashboard/skills" className="nav-item">
          <i className="fas fa-code"></i>
          <span>Skills</span>
        </Link>
        <Link to="/dashboard/contact" className="nav-item">
          <i className="fas fa-envelope"></i>
          <span>Contact</span>
        </Link>
      </nav>
      <div className="actions">
        <a href="https://github.com/KIRITO-AR" target="_blank" rel="noopener noreferrer" className="github-link">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Topbar;
