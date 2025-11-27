import React from 'react';
import { Link } from 'react-router-dom';
import {
  GitHub,
  LinkedIn,
  Email,
  Code,
  Psychology,
  Storage,
  Download
} from '@mui/icons-material';
import './Home.css';

const Home = () => {
  const skills = [
    { name: 'Python', level: 95, category: 'Programming' },
    { name: 'PyTorch', level: 90, category: 'AI/ML' },
    { name: 'Django/DRF', level: 90, category: 'Backend' },
    { name: 'Computer Vision', level: 85, category: 'AI/ML' },
    { name: 'LLMs & RAG', level: 90, category: 'AI/ML' },
    { name: 'React', level: 80, category: 'Frontend' },
    { name: 'C', level: 85, category: 'Programming' },
    { name: 'SQL', level: 80, category: 'Database' },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-greeting">Hello, I'm</p>
              <h1 className="hero-name">Bilge Kağan Şenol</h1>
              <h2 className="hero-title">AI Engineer & Computer Engineer</h2>
              <p className="hero-description">
                Computer Engineering graduate from Yasar University specializing in
                AI systems, LLMs, computer vision, and backend development. Currently leading
                AI engineering projects at FOREO, building end-to-end solutions with PyTorch,
                Django, and modern ML frameworks.
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-primary">
                  Get In Touch
                </Link>
                <button className="btn btn-secondary" onClick={() => alert('CV will be available soon!')}>
                  <Download /> Download CV
                </button>
              </div>
              <div className="hero-social">
                <a
                  href="https://github.com/bilgekagansenol"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GitHub />
                </a>
                <a
                  href="https://linkedin.com/in/bilgekagansenol"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedIn />
                </a>
                <a
                  href="mailto:bilge.kagan.senoll@gmail.com"
                  aria-label="Email"
                >
                  <Email />
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img src="/profile.jpg" alt="Bilge Kağan Şenol" className="profile-image" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a Computer Engineering graduate from Yasar University with a strong
                foundation in algorithms and system design. My technical journey started
                with C programming and evolved through backend development, AI systems,
                and deep learning applications.
              </p>
              <p>
                Currently serving as AI Engineer Intern - Peer Lead at FOREO, where I lead
                a team of 4 engineers building text-to-image and image-to-text pipelines.
                I have extensive experience with LLMs, RAG architectures, computer vision,
                and production-ready AI deployments.
              </p>
              <p>
                My expertise spans Python, Django, PyTorch, and modern ML frameworks.
                I specialize in building end-to-end AI solutions from dataset preparation
                to deployment, with focus on scalability, maintainability, and performance.
              </p>
            </div>
            <div className="about-highlights">
              <div className="highlight-card">
                <Code className="highlight-icon" />
                <h3>Full-Stack Development</h3>
                <p>Building end-to-end applications with modern technologies</p>
              </div>
              <div className="highlight-card">
                <Psychology className="highlight-icon" />
                <h3>AI & Machine Learning</h3>
                <p>Developing intelligent systems and ML models</p>
              </div>
              <div className="highlight-card">
                <Storage className="highlight-icon" />
                <h3>Data Science</h3>
                <p>Analyzing and visualizing complex datasets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="skill-category">{skill.category}</span>
              </div>
            ))}
          </div>

          <div className="tools-section">
            <h3>Tools & Technologies</h3>
            <div className="tools-tags">
              <span className="tool-tag">Hugging Face</span>
              <span className="tool-tag">OpenCV</span>
              <span className="tool-tag">Gradio</span>
              <span className="tool-tag">Ollama</span>
              <span className="tool-tag">AWS EC2</span>
              <span className="tool-tag">Git/GitHub</span>
              <span className="tool-tag">PostgreSQL</span>
              <span className="tool-tag">Linux</span>
              <span className="tool-tag">Nginx</span>
              <span className="tool-tag">Gunicorn</span>
              <span className="tool-tag">REST APIs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-card">
            <div className="education-header">
              <div>
                <h3>Yasar University</h3>
                <p className="education-degree">Bachelor of Science in Computer Engineering</p>
              </div>
              <span className="education-year">2020 - 2025 (Graduated)</span>
            </div>
            <div className="education-details">
              <p><strong>Location:</strong> Ankara, Turkey</p>
              <p><strong>Key Focus Areas:</strong></p>
              <ul>
                <li>Artificial Intelligence & Machine Learning</li>
                <li>Computer Vision & Deep Learning</li>
                <li>Algorithms & Data Structures</li>
                <li>Backend Development & System Design</li>
                <li>Database Management & Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
