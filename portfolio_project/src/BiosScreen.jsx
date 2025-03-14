import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

// Yanıp sönen cursor animasyonu
const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const BiosContainer = styled.div`
  background-color: #000080;
  color: #ffffff;
  font-family: 'IBM Plex Mono', monospace;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
`

const BiosHeader = styled.div`
  border-bottom: 1px solid #ffffff;
  padding-bottom: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`

const BiosContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  flex: 1;
`

const BiosRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 5px;
`

const BiosLabel = styled.span`
  color: #ffffff;
  min-width: 200px;
`

const BiosValue = styled.span`
  color: #ffff00;
`

const BiosFooter = styled.div`
  border-top: 1px solid #ffffff;
  padding-top: 10px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`

const BiosSection = styled.div`
  margin-bottom: 20px;
  border: 1px solid #4444ff;
  padding: 10px;
`

const BiosSectionTitle = styled.div`
  color: #ffffff;
  background-color: #0000aa;
  padding: 5px;
  margin-bottom: 10px;
`

const BiosNavigation = styled.div`
  display: flex;
  gap: 20px;
`

const BiosKey = styled.span`
  color: #ffffff;
  background-color: #444444;
  padding: 2px 5px;
  border: 1px solid #888888;
  border-radius: 3px;
  margin-right: 5px;
`

const BiosAction = styled.span`
  color: #aaaaaa;
`

const TerminalCursor = styled.span`
  display: inline-block;
  width: 10px;
  height: 15px;
  background-color: #ffffff;
  margin-left: 5px;
  animation: ${blink} 1s step-end infinite;
`

const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: #000044;
  margin: 10px 0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.progress || '0%'};
    background-color: #00ff00;
    transition: width 0.3s ease;
  }
`

const BiosScreen = () => {
  const [date, setDate] = useState(new Date());
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('main');
  
  // Clock update
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Progress bar animation
  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => {
        setProgress(prev => Math.min(prev + 1, 100));
      }, 50);
      
      return () => clearTimeout(timer);
    }
  }, [progress]);
  
  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // F1, F2, F3, F4 keys
      if (e.key === 'F1') {
        e.preventDefault();
        setActiveTab('main');
      } else if (e.key === 'F2') {
        e.preventDefault();
        setActiveTab('github');
      } else if (e.key === 'F3') {
        e.preventDefault();
        setActiveTab('experience');
      } else if (e.key === 'F4') {
        e.preventDefault();
        setActiveTab('contact');
      } else if (e.key === 'Escape') {
        // ESC key
        e.preventDefault();
        // Exit action
        alert('Exiting BIOS...');
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  const renderMainTab = () => (
    <>
      <BiosSection>
        <BiosSectionTitle>PERSONAL INFORMATION</BiosSectionTitle>
        <BiosRow>
          <BiosLabel>Full Name</BiosLabel>
          <BiosValue>Bilge Kağan Şenol</BiosValue>
        </BiosRow>
        <BiosRow>
          <BiosLabel>Profession</BiosLabel>
          <BiosValue>AI and Data Science Developer</BiosValue>
        </BiosRow>
        <BiosRow>
          <BiosLabel>Location</BiosLabel>
          <BiosValue>Izmir, Turkey</BiosValue>
        </BiosRow>
        <BiosRow>
          <BiosLabel>Email</BiosLabel>
          <BiosValue>bilge.kagan.senoll@gmail.com</BiosValue>
        </BiosRow>
        <BiosRow>
          <BiosLabel>GitHub</BiosLabel>
          <BiosValue>bilgekagansenol</BiosValue>
        </BiosRow>
      </BiosSection>
      
      <BiosSection>
        <BiosSectionTitle>EDUCATION</BiosSectionTitle>
        <BiosRow>
          <BiosLabel>University</BiosLabel>
          <BiosValue>Yasar University</BiosValue>
        </BiosRow>
        <BiosRow>
          <BiosLabel>Department</BiosLabel>
          <BiosValue>Artificial Intelligence and Data Science</BiosValue>
        </BiosRow>
        <BiosRow>
          <BiosLabel>Relevant Courses</BiosLabel>
          <BiosValue>Natural Language Processing, Machine Learning Algorithms</BiosValue>
        </BiosRow>
        <BiosRow>
          <BiosLabel>Period</BiosLabel>
          <BiosValue>2019 - 2025 (Expected)</BiosValue>
        </BiosRow>
      </BiosSection>
      
      <BiosSection>
        <BiosSectionTitle>SKILLS</BiosSectionTitle>
        <BiosRow>
          <BiosLabel>Programming</BiosLabel>
          <BiosValue>Python (Advanced), Java (Intermediate), JavaScript (Intermediate), C (Advanced)</BiosValue>
        </BiosRow>
        <BiosRow>
          <BiosLabel>Tools & Technologies</BiosLabel>
          <BiosValue>React, Spring Boot, Git/GitHub, NLTK, Gensim, Matplotlib, Seaborn</BiosValue>
        </BiosRow>
        <BiosRow>
          <BiosLabel>Other Skills</BiosLabel>
          <BiosValue>Machine Learning, Backend Integration, NLP Techniques</BiosValue>
        </BiosRow>
        <BiosRow>
          <BiosLabel>Languages</BiosLabel>
          <BiosValue>English (C1), Turkish (Native)</BiosValue>
        </BiosRow>
      </BiosSection>
      
      <BiosSection>
        <BiosSectionTitle>SYSTEM INFORMATION</BiosSectionTitle>
        <BiosRow>
          <BiosLabel>System Date</BiosLabel>
          <BiosValue>{date.toLocaleDateString('en-US')}</BiosValue>
        </BiosRow>
        <BiosRow>
          <BiosLabel>System Time</BiosLabel>
          <BiosValue>{date.toLocaleTimeString('en-US')}</BiosValue>
        </BiosRow>
        <BiosRow>
          <BiosLabel>Loading Status</BiosLabel>
          <BiosValue>{progress}%</BiosValue>
        </BiosRow>
        <ProgressBar progress={`${progress}%`} />
      </BiosSection>
    </>
  );
  
  const renderGithubTab = () => (
    <BiosSection>
      <BiosSectionTitle>GITHUB PROJECTS</BiosSectionTitle>
      <BiosRow>
        <BiosLabel>GitHub Profile</BiosLabel>
        <BiosValue>https://github.com/bilgekagansenol</BiosValue>
      </BiosRow>
      <BiosRow>
        <BiosLabel>Contact for Projects</BiosLabel>
        <BiosValue>Please contact me via email for detailed information about my projects</BiosValue>
      </BiosRow>
      <BiosRow>
        <BiosLabel>Email</BiosLabel>
        <BiosValue>bilge.kagan.senoll@gmail.com</BiosValue>
      </BiosRow>
    </BiosSection>
  );
  
  const renderExperienceTab = () => (
    <>
      <BiosSection>
        <BiosSectionTitle>EXPERIENCE - EKOTEN</BiosSectionTitle>
        <BiosRow>
          <BiosLabel>Company</BiosLabel>
          <BiosValue>Ekoten</BiosValue>
        </BiosRow>
        <BiosRow>
          <BiosLabel>Position</BiosLabel>
          <BiosValue>Chatbot and AI Developer</BiosValue>
        </BiosRow>
        <BiosRow>
          <BiosLabel>Responsibilities</BiosLabel>
          <BiosValue>Chatbot development, AI model tuning and optimization</BiosValue>
        </BiosRow>
      </BiosSection>
      
      <BiosSection>
        <BiosSectionTitle>EXPERIENCE - SPARTACUS</BiosSectionTitle>
        <BiosRow>
          <BiosLabel>Company</BiosLabel>
          <BiosValue>Spartacus Software Industry and Commerce Limited Company</BiosValue>
        </BiosRow>
        <BiosRow>
          <BiosLabel>Position</BiosLabel>
          <BiosValue>Intern</BiosValue>
        </BiosRow>
        <BiosRow>
          <BiosLabel>Period</BiosLabel>
          <BiosValue>July 2024 - August 2024</BiosValue>
        </BiosRow>
        <BiosRow>
          <BiosLabel>Responsibilities</BiosLabel>
          <BiosValue>Development of accounting ERP application for invoice management</BiosValue>
        </BiosRow>
        <BiosRow>
          <BiosLabel>Technologies</BiosLabel>
          <BiosValue>Oracle PL/SQL, database schemas, stored procedures</BiosValue>
        </BiosRow>
      </BiosSection>
    </>
  );
  
  const renderContactTab = () => (
    <BiosSection>
      <BiosSectionTitle>CONTACT</BiosSectionTitle>
      <BiosRow>
        <BiosLabel>Email</BiosLabel>
        <BiosValue>bilge.kagan.senoll@gmail.com</BiosValue>
      </BiosRow>
      <BiosRow>
        <BiosLabel>GitHub</BiosLabel>
        <BiosValue>github.com/bilgekagansenol</BiosValue>
      </BiosRow>
    </BiosSection>
  );
  
  return (
    <BiosContainer>
      <BiosHeader>
        <div>BIOS SETUP UTILITY v1.0.0</div>
        <div>{date.toLocaleTimeString('en-US')}</div>
      </BiosHeader>
      
      <BiosNavigation>
        <div onClick={() => setActiveTab('main')} style={{ cursor: 'pointer', color: activeTab === 'main' ? '#ffff00' : '#ffffff' }}>
          <BiosKey>F1</BiosKey>
          <BiosAction>Home</BiosAction>
        </div>
        <div onClick={() => setActiveTab('github')} style={{ cursor: 'pointer', color: activeTab === 'github' ? '#ffff00' : '#ffffff' }}>
          <BiosKey>F2</BiosKey>
          <BiosAction>GitHub</BiosAction>
        </div>
        <div onClick={() => setActiveTab('experience')} style={{ cursor: 'pointer', color: activeTab === 'experience' ? '#ffff00' : '#ffffff' }}>
          <BiosKey>F3</BiosKey>
          <BiosAction>Experience</BiosAction>
        </div>
        <div onClick={() => setActiveTab('contact')} style={{ cursor: 'pointer', color: activeTab === 'contact' ? '#ffff00' : '#ffffff' }}>
          <BiosKey>F4</BiosKey>
          <BiosAction>Contact</BiosAction>
        </div>
      </BiosNavigation>
      
      <BiosContent>
        {activeTab === 'main' && renderMainTab()}
        {activeTab === 'github' && renderGithubTab()}
        {activeTab === 'experience' && renderExperienceTab()}
        {activeTab === 'contact' && renderContactTab()}
      </BiosContent>
      
      <BiosFooter>
        <div>
          <BiosKey>ESC</BiosKey>
          <BiosAction>Exit</BiosAction>
        </div>
        <div>
          <BiosKey>↑↓</BiosKey>
          <BiosAction>Navigate</BiosAction>
          <BiosKey>ENTER</BiosKey>
          <BiosAction>Select</BiosAction>
        </div>
        <div>
          BIOS v1.0.0 <TerminalCursor />
        </div>
      </BiosFooter>
    </BiosContainer>
  )
}

export default BiosScreen 