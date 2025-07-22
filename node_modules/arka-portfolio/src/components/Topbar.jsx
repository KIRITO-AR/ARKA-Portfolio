import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css';

const Topbar = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

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
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>
        <a href="https://github.com/KIRITO-AR" target="_blank" rel="noopener noreferrer" className="github-link">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Topbar;
