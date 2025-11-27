import React from 'react';
import { Work, LocationOn, CalendarToday } from '@mui/icons-material';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      company: 'FOREO',
      position: 'AI Engineer Intern – Peer Lead',
      location: 'Stockholm, Sweden (Remote)',
      period: 'Sep 2025 – Present',
      description:
        'Leading a 4-person AI engineering team, designing and implementing text-to-image and image-to-text pipelines. Building end-to-end AI systems from dataset preparation to deployment with focus on model optimization and team coordination.',
      responsibilities: [
        'Team leadership and project management for AI pipelines',
        'Built advanced T2I pipelines with Pythonic design patterns',
        'Integrated and fine-tuned diffusion models via Hugging Face',
        'Developed interactive Gradio dashboards for model visualization',
        'Optimized generation speed and runtime efficiency',
        'Cross-functional collaboration with designers and product team',
      ],
      technologies: ['Python', 'Hugging Face', 'LLMs', 'Gradio', 'PyTorch', 'Diffusion Models'],
    },
    {
      type: 'work',
      company: 'Kalıpçılar Aksesuar',
      position: 'Freelance Full Stack Developer',
      location: 'İzmir, Turkey (Remote)',
      period: 'Jul 2025 – Present',
      description:
        'Developing full-stack e-commerce platform with Django backend and React frontend. Deployed on AWS EC2 with production-ready infrastructure using Nginx and Gunicorn.',
      responsibilities: [
        'Developed core backend APIs for e-commerce (auth, products, orders)',
        'Built responsive UI with React and integrated REST endpoints',
        'Deployed full-stack app on AWS EC2 with secure configuration',
        'Implemented authentication and order management systems',
      ],
      technologies: ['Django', 'Django REST Framework', 'React', 'AWS EC2', 'Nginx', 'PostgreSQL'],
    },
    {
      type: 'work',
      company: 'Ekoten Tekstil',
      position: 'Backend Developer & Local AI Fine-Tuning Intern',
      location: 'Ankara, Turkey',
      period: 'Mar 2025 – May 2025',
      description:
        'Developed backend services for AI-powered chatbot platform. Implemented RAG architecture and fine-tuned local LLM models using Ollama for on-premise inference.',
      responsibilities: [
        'Developed Django REST Framework APIs for chatbot platform',
        'Implemented RAG workflows with embedding pipelines',
        'Fine-tuned local LLM models using Ollama',
        'Built preprocessing scripts for document indexing',
        'Packaged chatbot into deployable backend module',
      ],
      technologies: ['Django REST Framework', 'Python', 'Ollama', 'RAG', 'LLMs'],
    },
    {
      type: 'work',
      company: 'Spartacus Software',
      position: 'Software Intern',
      location: 'Ankara, Turkey',
      period: 'Jul 2024 – Aug 2024',
      description:
        'Contributed to accounting ERP system development with focus on invoice management. Designed database schemas and optimized SQL queries for transaction workflows.',
      responsibilities: [
        'Designed database schemas for invoice management',
        'Wrote stored procedures in Oracle PL/SQL',
        'Contributed to core ERP module features',
        'Optimized queries and improved data integrity',
      ],
      technologies: ['Oracle PL/SQL', 'Database Design', 'ERP Systems'],
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
              <p>Python • JavaScript • C • SQL</p>
            </div>
            <div className="achievement-card">
              <h3>AI & Machine Learning</h3>
              <p>LLMs • RAG Pipelines • LoRA Fine-Tuning • Diffusion Models • Computer Vision • PyTorch • OpenCV</p>
            </div>
            <div className="achievement-card">
              <h3>Backend & Full-Stack</h3>
              <p>Django • Django REST Framework • React.js • AWS EC2 • Nginx • Gunicorn • PostgreSQL</p>
            </div>
            <div className="achievement-card">
              <h3>AI Tools & Frameworks</h3>
              <p>Hugging Face • Gradio • Ollama • Embedding Models • Prompt Engineering • Model Deployment</p>
            </div>
            <div className="achievement-card">
              <h3>Leadership & Management</h3>
              <p>Team Leadership • Project Management • Task Delegation • Cross-functional Collaboration</p>
            </div>
            <div className="achievement-card">
              <h3>DevOps & Tools</h3>
              <p>Git/GitHub • Linux • REST APIs • Virtual Environments • Cloud Deployment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
