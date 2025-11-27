import React, { useState } from 'react';
import { Email, LocationOn, GitHub, LinkedIn, Send } from '@mui/icons-material';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    setStatus('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setTimeout(() => setStatus(''), 5000);
  };

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'bilge.kagan.senoll@gmail.com',
      link: 'mailto:bilge.kagan.senoll@gmail.com',
    },
    {
      icon: <LocationOn />,
      title: 'Location',
      value: 'Izmir, Turkey',
      link: null,
    },
    {
      icon: <GitHub />,
      title: 'GitHub',
      value: 'bilgekagansenol',
      link: 'https://github.com/bilgekagansenol',
    },
    {
      icon: <LinkedIn />,
      title: 'LinkedIn',
      value: 'Bilge Kağan Şenol',
      link: 'https://linkedin.com/in/bilgekagansenol',
    },
  ];

  return (
    <div className="contact-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">
            Let's discuss your project or just say hello
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info-section">
            <h2>Contact Information</h2>
            <p className="contact-intro">
              I'm always open to new opportunities, collaborations, or just a friendly chat.
              Feel free to reach out through any of the following channels.
            </p>

            <div className="contact-info-cards">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-card">
                  <div className="contact-info-icon">{info.icon}</div>
                  <div className="contact-info-details">
                    <h3>{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="availability-card">
              <h3>Availability</h3>
              <p>
                Currently open to:
              </p>
              <ul>
                <li>Full-time opportunities</li>
                <li>Freelance projects</li>
                <li>Collaborations</li>
                <li>Consulting</li>
              </ul>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
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
                  rows="6"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                <Send /> Send Message
              </button>

              {status && <div className="form-status">{status}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
