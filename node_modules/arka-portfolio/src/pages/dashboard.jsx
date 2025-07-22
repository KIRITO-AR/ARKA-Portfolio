import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Topbar from '../components/Topbar';
import Overview from './Overview';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
