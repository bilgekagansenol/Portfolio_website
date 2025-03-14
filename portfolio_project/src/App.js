import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import BiosScreen from './BiosScreen';

// Yanıp sönen cursor animasyonu
const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

// Yazı yazma animasyonu
const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const BiosContainer = styled.div`
  background-color: #000080;
  color: #ffffff;
  font-family: 'IBM Plex Mono', monospace;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LogoText = styled.pre`
  color: #ffff00;
  margin: 20px 0;
  font-size: 14px;
  white-space: pre-wrap;
  text-align: center;
`

const BiosContent = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BootMessage = styled.div`
  color: #ffffff;
  margin: 5px 0;
  overflow: hidden;
  white-space: nowrap;
  animation: ${typing} 1s steps(40, end);
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
  width: 300px;
  height: 20px;
  background-color: #000044;
  margin: 20px 0;
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

const EnterButton = styled.button`
  background-color: #000080;
  color: #ffff00;
  border: 1px solid #ffff00;
  padding: 10px 20px;
  font-family: 'IBM Plex Mono', monospace;
  cursor: pointer;
  margin-top: 20px;
  
  &:hover {
    background-color: #0000aa;
  }
`

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [bootStep, setBootStep] = useState(0);
  const [showBiosScreen, setShowBiosScreen] = useState(false);
  
  const bootMessages = [
    "System initializing...",
    "RAM check: 16384 MB OK",
    "CPU: Intel Core i7 @ 3.60GHz",
    "Disk check: 1 TB SSD found",
    "Graphics card: NVIDIA GeForce RTX 3080",
    "BIOS version: 1.0.0",
    "AI and Data Science Developer: Bilge Kağan Şenol",
    "Loading portfolio..."
  ];
  
  useEffect(() => {
    if (loading && progress < 100) {
      const timer = setTimeout(() => {
        setProgress(prev => {
          const newProgress = prev + 1;
          if (newProgress >= 100) {
            setLoading(false);
          }
          return newProgress;
        });
      }, 50);
      
      return () => clearTimeout(timer);
    }
  }, [loading, progress]);
  
  useEffect(() => {
    if (bootStep < bootMessages.length) {
      const timer = setTimeout(() => {
        setBootStep(prev => prev + 1);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [bootStep, bootMessages.length]);
  
  if (showBiosScreen) {
    return <BiosScreen />;
  }
  
  return (
    <BiosContainer>
      <LogoText>
{`
    ██████╗ ██╗██╗      ██████╗ ███████╗    ██╗  ██╗ █████╗  ██████╗  █████╗ ███╗   ██╗
    ██╔══██╗██║██║     ██╔════╝ ██╔════╝    ██║ ██╔╝██╔══██╗██╔════╝ ██╔══██╗████╗  ██║
    ██████╔╝██║██║     ██║  ███╗█████╗      █████╔╝ ███████║██║  ███╗███████║██╔██╗ ██║
    ██╔══██╗██║██║     ██║   ██║██╔══╝      ██╔═██╗ ██╔══██║██║   ██║██╔══██║██║╚██╗██║
    ██████╔╝██║███████╗╚██████╔╝███████╗    ██║  ██╗██║  ██║╚██████╔╝██║  ██║██║ ╚████║
    ╚═════╝ ╚═╝╚══════╝ ╚═════╝ ╚══════╝    ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝
                                BIOS Ver. 1.0.0
`}
      </LogoText>
      
      <BiosContent>
        {bootMessages.slice(0, bootStep).map((message, index) => (
          <BootMessage key={index}>
            {message}
            {index === bootStep - 1 && <TerminalCursor />}
          </BootMessage>
        ))}
        
        {bootStep >= bootMessages.length && (
          <>
            <ProgressBar progress={`${progress}%`} />
            <div>{progress}%</div>
            {!loading && (
              <EnterButton onClick={() => setShowBiosScreen(true)}>
                ENTER PORTFOLIO [ENTER]
              </EnterButton>
            )}
          </>
        )}
      </BiosContent>
    </BiosContainer>
  );
}

export default App;
