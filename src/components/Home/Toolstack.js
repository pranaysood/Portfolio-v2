import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import styled from "styled-components";
import {
  SiVisualstudiocode,
  SiWindows11,
  SiSlack,
  SiVercel,
  SiMacos,
  SiGithub,
  SiFigma,
  SiHeroku,
  SiNetlify,
  SiJenkins,
  SiDocker,
  SiPostman,
  SiJira,
  SiConfluence,
} from "react-icons/si";
import { Tooltip } from "react-tooltip";

const StyledCard = styled(Card)`
  background: rgba(245, 245, 245, 0.9);
  margin: 20px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 120px;
  margin: auto;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
    color: #007bff;
  }
`;

const IconLabel = styled.span`
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
`;

function Toolstack() {
  const tools = [
    { id: "macos", icon: <SiMacos />, name: "macOS" },
    { id: "windows", icon: <SiWindows11 />, name: "Windows 11" },
    { id: "vscode", icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
    { id: "slack", icon: <SiSlack />, name: "Slack" },
    { id: "vercel", icon: <SiVercel />, name: "Vercel" },
    { id: "github", icon: <SiGithub />, name: "GitHub" },
    { id: "figma", icon: <SiFigma />, name: "Figma" },
    { id: "heroku", icon: <SiHeroku />, name: "Heroku" },
    { id: "netlify", icon: <SiNetlify />, name: "Netlify" },
    { id: "jenkins", icon: <SiJenkins />, name: "Jenkins" },
    { id: "docker", icon: <SiDocker />, name: "Docker" },
    { id: "postman", icon: <SiPostman />, name: "Postman" },
    { id: "jira", icon: <SiJira />, name: "Jira" },
    { id: "confluence", icon: <SiConfluence />, name: "Confluence" },
  ];

  return (
    <StyledCard>
      <Card.Body>
        <Card.Title>Tools Stack</Card.Title>
        <Row className="justify-content-center">
          {tools.map((tool) => (
            <Col xs={4} md={2} key={tool.id} className="tech-icons">
              <IconWrapper
                data-tooltip-id={tool.id}
                data-tooltip-content={tool.name}
              >
                {tool.icon}
                <IconLabel>{tool.name}</IconLabel>
              </IconWrapper>
              <Tooltip id={tool.id} place="top" effect="solid" />
            </Col>
          ))}
        </Row>
      </Card.Body>
    </StyledCard>
  );
}

export default Toolstack;
