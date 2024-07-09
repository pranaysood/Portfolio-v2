import React from "react";
import { Container, Button } from "react-bootstrap";
import Particle from "../Particle";
import styled, { keyframes } from "styled-components";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

const pdf = `${process.env.PUBLIC_URL}/Resume_May24.pdf`;

const breatheAnimation = keyframes`
  0% { transform: scale(0.9); opacity: 0.7; }
  25% { transform: scale(1.05); opacity: 0.85; }
  50% { transform: scale(0.9); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
`;

const StyledContainer = styled(Container)`
  padding-top: 100px;
  padding-bottom: 100px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledButton = styled(Button)`
  margin: 20px;
  max-width: 250px;
  transition: transform 0.3s ease-in-out;
  animation: ${breatheAnimation} 3s ease-in-out infinite;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 10px;
  background-color: #f8f9fa;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
`;

function ResumeNew() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div>
      <StyledContainer fluid className="resume-section">
        <Particle interactive={true} numParticles={200} linkDistance={150} />
        <div className="text-center mt-5">
          <StyledButton
            variant="primary"
            href={pdf}
            download="Pranay_Sood_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </StyledButton>
          <div style={{ height: "750px" }}>
            <Worker
              workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js`}
            >
              <Viewer fileUrl={pdf} plugins={[defaultLayoutPluginInstance]} />
            </Worker>
          </div>
        </div>
      </StyledContainer>
      <Footer>
        <p>Designed by Pranay Sood</p>
      </Footer>
    </div>
  );
}

export default ResumeNew;
