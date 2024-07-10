import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import styled from "styled-components";
import {
  DiPython,
  DiGit,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiReact,
  DiNodejs,
  DiDocker,
  DiAws,
} from "react-icons/di";
import {
  SiThreedotjs,
  SiTypescript,
  SiGraphql,
  SiRedux,
  SiMicrosoftazure,
  SiScikitlearn,
  SiJupyter,
  SiNumpy,
} from "react-icons/si";
import { Tooltip as ReactTooltip } from "react-tooltip";

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

function Techstack() {
  const techIcons = [
    { id: "html", icon: <DiHtml5 />, name: "HTML5" },
    { id: "javascript", icon: <DiJavascript1 />, name: "JavaScript" },
    { id: "typescript", icon: <SiTypescript />, name: "TypeScript" },
    { id: "css", icon: <DiCss3 />, name: "CSS3" },
    { id: "nodejs", icon: <DiNodejs />, name: "Node.js" },
    { id: "react", icon: <DiReact />, name: "React" },
    { id: "redux", icon: <SiRedux />, name: "Redux" },
    { id: "git", icon: <DiGit />, name: "Git" },
    { id: "three", icon: <SiThreedotjs />, name: "Three.js" },
    { id: "python", icon: <DiPython />, name: "Python" },
    { id: "graphql", icon: <SiGraphql />, name: "GraphQL" },
    { id: "docker", icon: <DiDocker />, name: "Docker" },
    { id: "aws", icon: <DiAws />, name: "AWS" },
    { id: "numpy", icon: <SiNumpy />, name: "NumPy" },
    { id: "scikitlearn", icon: <SiScikitlearn />, name: "Scikit-Learn" },
    { id: "jupyter", icon: <SiJupyter />, name: "Jupyter" },
    { id: "azure", icon: <SiMicrosoftazure />, name: "Azure" },
  ];

  return (
    <StyledCard>
      <Card.Body>
        <Card.Title>Tech Stack</Card.Title>
        <Row className="justify-content-center">
          {techIcons.map((tech) => (
            <Col xs={4} md={2} key={tech.id} className="tech-icons">
              <IconWrapper
                data-tooltip-id={tech.id}
                data-tooltip-content={tech.name}
              >
                {tech.icon}
                <IconLabel>{tech.name}</IconLabel>
              </IconWrapper>
              <ReactTooltip id={tech.id} place="top" effect="solid" />
            </Col>
          ))}
        </Row>
      </Card.Body>
    </StyledCard>
  );
}

export default Techstack;
