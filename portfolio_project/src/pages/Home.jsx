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
    { name: 'JavaScript', level: 80, category: 'Programming' },
    { name: 'Java', level: 75, category: 'Programming' },
    { name: 'C', level: 90, category: 'Programming' },
    { name: 'Machine Learning', level: 90, category: 'AI/Data Science' },
    { name: 'NLP', level: 85, category: 'AI/Data Science' },
    { name: 'React', level: 80, category: 'Web Development' },
    { name: 'Spring Boot', level: 75, category: 'Backend' },
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
              <h2 className="hero-title">AI & Data Science Developer</h2>
              <p className="hero-description">
                Computer Engineering student at Yasar University specializing in
                Artificial Intelligence, Machine Learning, and Natural Language Processing.
                Passionate about building intelligent systems and solving complex problems.
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
              <div className="image-placeholder">
                <Code style={{ fontSize: '120px', color: '#667eea' }} />
              </div>
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
                I'm a passionate Computer Engineering student at Yasar University,
                graduating in 2025. My journey in technology has led me to specialize
                in Artificial Intelligence and Data Science, with a particular focus
                on Natural Language Processing and Machine Learning.
              </p>
              <p>
                I have hands-on experience in developing AI-powered chatbots, working
                with large language models, and building full-stack applications.
                My technical expertise spans across Python, Java, JavaScript, and C,
                complemented by frameworks like React and Spring Boot.
              </p>
              <p>
                Currently, I'm working as a Chatbot and AI Developer at Ekoten,
                where I focus on AI model tuning and optimization to create
                intelligent conversational systems.
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
              <span className="tool-tag">Git/GitHub</span>
              <span className="tool-tag">NLTK</span>
              <span className="tool-tag">Gensim</span>
              <span className="tool-tag">Matplotlib</span>
              <span className="tool-tag">Seaborn</span>
              <span className="tool-tag">TensorFlow</span>
              <span className="tool-tag">PyTorch</span>
              <span className="tool-tag">SQL</span>
              <span className="tool-tag">MongoDB</span>
              <span className="tool-tag">Docker</span>
              <span className="tool-tag">AWS</span>
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
              <span className="education-year">2019 - 2025</span>
            </div>
            <div className="education-details">
              <p><strong>Location:</strong> Izmir, Turkey</p>
              <p><strong>Relevant Coursework:</strong></p>
              <ul>
                <li>Natural Language Processing</li>
                <li>Machine Learning Algorithms</li>
                <li>Data Structures & Algorithms</li>
                <li>Database Management Systems</li>
                <li>Software Engineering</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
