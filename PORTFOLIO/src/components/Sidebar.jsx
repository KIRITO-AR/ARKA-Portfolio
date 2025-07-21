import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Arkaprava</h2>
      </div>
      <nav className="sidebar-nav">
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
    </div>
  );
};

export default Sidebar;