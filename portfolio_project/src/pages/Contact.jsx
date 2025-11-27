import React from 'react';
import { Email, LocationOn, GitHub, LinkedIn, Phone } from '@mui/icons-material';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'bilge.kagan.senoll@gmail.com',
      link: 'mailto:bilge.kagan.senoll@gmail.com',
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+90 507 555 53 90',
      link: 'tel:+905075555390',
    },
    {
      icon: <LocationOn />,
      title: 'Location',
      value: 'Ankara, Turkey',
      link: null,
    },
    {
      icon: <GitHub />,
      title: 'GitHub',
      value: 'github.com/bilgekagansenol',
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
            Let's connect and discuss opportunities
          </p>
        </div>

        <div className="contact-content-centered">
          <div className="contact-info-section-full">
            <h2>Contact Information</h2>
            <p className="contact-intro">
              I'm always open to new opportunities, collaborations, and interesting projects.
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
              <h3>Current Status & Availability</h3>
              <p>
                Currently open to:
              </p>
              <ul>
                <li>Full-time AI/ML Engineer positions</li>
                <li>Backend development roles</li>
                <li>Freelance AI projects</li>
                <li>Technical consulting</li>
                <li>Remote and on-site opportunities</li>
              </ul>
            </div>

            <div className="cta-section">
              <p className="cta-text">
                Interested in working together? Let's discuss how I can contribute to your team or project.
              </p>
              <a href="mailto:bilge.kagan.senoll@gmail.com" className="cta-button">
                <Email /> Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
