import React from 'react';
import { GitHub, OpenInNew, Code } from '@mui/icons-material';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Chatbot System',
      description:
        'Developed an intelligent chatbot system using advanced NLP techniques and large language models. The system can understand context, maintain conversation flow, and provide accurate responses.',
      technologies: ['Python', 'NLP', 'Machine Learning', 'LLMs', 'FastAPI'],
      features: [
        'Context-aware conversations',
        'Multi-turn dialogue management',
        'Intent recognition and entity extraction',
        'Integration with multiple messaging platforms',
      ],
      github: '#',
      demo: '#',
    },
    {
      title: 'Invoice Management ERP Module',
      description:
        'Built a comprehensive invoice management module for an accounting ERP system during internship at Spartacus. Implemented complex database schemas and stored procedures.',
      technologies: ['Oracle PL/SQL', 'Database Design', 'Backend'],
      features: [
        'Automated invoice processing',
        'Database optimization and indexing',
        'Complex stored procedures',
        'Transaction management',
      ],
      github: '#',
    },
    {
      title: 'Natural Language Processing Project',
      description:
        'Academic project focused on text analysis and sentiment classification using various NLP techniques and machine learning algorithms.',
      technologies: ['Python', 'NLTK', 'Gensim', 'Scikit-learn'],
      features: [
        'Text preprocessing and tokenization',
        'Sentiment analysis',
        'Topic modeling',
        'Word embeddings visualization',
      ],
      github: '#',
    },
    {
      title: 'Full-Stack Portfolio Website',
      description:
        'Modern, responsive portfolio website built with React and Material-UI. Features smooth animations, professional design, and optimal user experience.',
      technologies: ['React', 'JavaScript', 'Material-UI', 'CSS3'],
      features: [
        'Responsive design',
        'Smooth page transitions',
        'Professional UI/UX',
        'SEO optimized',
      ],
      github: 'https://github.com/bilgekagansenol',
      demo: 'https://bilgekagansenol.dev',
    },
  ];

  return (
    <div className="projects-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">My Projects</h1>
          <p className="page-subtitle">
            A showcase of my work in AI, web development, and software engineering
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  <Code />
                </div>
                <h2 className="project-title">{project.title}</h2>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-technologies">
                <h4>Technologies:</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <GitHub /> View Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-demo"
                  >
                    <OpenInNew /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="github-section">
          <div className="github-card">
            <GitHub className="github-icon" />
            <h2>Want to see more?</h2>
            <p>
              Check out my GitHub profile for more projects, contributions, and code samples.
            </p>
            <a
              href="https://github.com/bilgekagansenol"
              target="_blank"
              rel="noopener noreferrer"
              className="github-button"
            >
              <GitHub /> Visit My GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
