import React from 'react';
import { Work, LocationOn, CalendarToday } from '@mui/icons-material';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      company: 'Ekoten',
      position: 'Chatbot and AI Developer',
      location: 'Remote',
      period: 'Current Position',
      description:
        'Developing and optimizing AI-powered chatbots. Working with large language models and implementing advanced NLP techniques for improved conversational AI systems.',
      responsibilities: [
        'Chatbot development and implementation',
        'AI model tuning and optimization',
        'Integration with various messaging platforms',
        'Performance monitoring and improvement',
      ],
      technologies: ['Python', 'NLP', 'Machine Learning', 'LLMs'],
    },
    {
      type: 'work',
      company: 'Spartacus Software Industry and Commerce Limited Company',
      position: 'Software Engineering Intern',
      location: 'Izmir, Turkey',
      period: 'July 2024 - August 2024',
      description:
        'Contributed to the development of an accounting ERP application focused on invoice management. Worked with database design and backend development.',
      responsibilities: [
        'Developed invoice management features for ERP system',
        'Designed and implemented database schemas',
        'Created stored procedures and optimized queries',
        'Collaborated with senior developers on system architecture',
      ],
      technologies: ['Oracle PL/SQL', 'Database Design', 'Backend Development'],
    },
  ];

  return (
    <div className="experience-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Professional Experience</h1>
          <p className="page-subtitle">
            My journey in software development and artificial intelligence
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <Work className="timeline-icon" />
              </div>
              <div className="timeline-content">
                <div className="experience-card">
                  <div className="experience-header">
                    <div className="experience-title-section">
                      <h2 className="experience-position">{exp.position}</h2>
                      <h3 className="experience-company">{exp.company}</h3>
                    </div>
                    <div className="experience-meta">
                      <div className="meta-item">
                        <CalendarToday className="meta-icon" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="meta-item">
                        <LocationOn className="meta-icon" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="experience-description">{exp.description}</p>

                  <div className="experience-responsibilities">
                    <h4>Key Responsibilities:</h4>
                    <ul>
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="experience-technologies">
                    <h4>Technologies Used:</h4>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Achievements */}
        <div className="achievements-section">
          <h2 className="section-title">Skills & Competencies</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <h3>Programming Languages</h3>
              <p>Python (Advanced) • Java (Intermediate) • JavaScript (Intermediate) • C (Advanced)</p>
            </div>
            <div className="achievement-card">
              <h3>AI & Machine Learning</h3>
              <p>Natural Language Processing • Machine Learning Algorithms • Deep Learning • Model Optimization</p>
            </div>
            <div className="achievement-card">
              <h3>Web Development</h3>
              <p>React • Spring Boot • RESTful APIs • Full-Stack Development</p>
            </div>
            <div className="achievement-card">
              <h3>Tools & Technologies</h3>
              <p>Git/GitHub • NLTK • Gensim • Matplotlib • Seaborn • SQL • Docker</p>
            </div>
            <div className="achievement-card">
              <h3>Languages</h3>
              <p>Turkish (Native) • English (C1)</p>
            </div>
            <div className="achievement-card">
              <h3>Soft Skills</h3>
              <p>Problem Solving • Team Collaboration • Quick Learning • Project Management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
