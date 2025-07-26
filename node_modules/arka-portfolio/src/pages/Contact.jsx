import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://arkapravad.app.n8n.cloud/webhook/5d981bc2-dae1-4c53-9724-5af4d8d4aae2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' }); // clear form
    } else {
      alert("Failed to send message. Please try again later.");
    }
  } catch (error) {
    console.error("Error sending message:", error);
    alert("Error sending message. Try again.");
  }
};


  return (
    <div className="contact">
      <h1>Get in Touch</h1>
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <p>arkarickdas26@gmail.com</p>
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>Kolkata, West Bengal, India</p>
          </div>
          <div className="info-item">
            <i className="fas fa-graduation-cap"></i>
            <p>B.Tech in Computer Science & Technology</p>
          </div>
          <div className="social-links">
            <a href="https://github.com/KIRITO-AR" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/arkaprava-das-450b19220" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">
              <i className="fas fa-file-pdf"></i>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
