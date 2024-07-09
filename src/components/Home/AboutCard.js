import React from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

const StyledCard = styled(Card)`
  background: rgba(235, 248, 255, 0.95);
  backdrop-filter: blur(8px);
  border-radius: 15px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  box-shadow: 0 5px 20px rgba(0, 76, 152, 0.15);
  margin: 20px auto;
  padding: 25px;
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 30px rgba(0, 76, 152, 0.25);
  }
`;

const Title = styled.h4`
  color: #003366;
  text-align: center;
  margin-bottom: 15px;
`;

const Description = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
`;

const Section = styled.div`
  font-size: 15px;
  margin: 20px 0;
  color: #555;
`;

const Item = styled.p`
  margin-bottom: 8px;
  text-align: center;
`;

function AboutCard() {
  const highlights = [
    "Expertise in AI and machine learning applications",
    "Experienced with Microsoft Azure cloud services",
    "Skilled in software engineering and system architecture",
    "Dedicated to advancing cloud-based anomaly detection",
  ];

  const education = [
    {
      degree: "Master of Engineering – Electrical and Computer Engineering",
      school: "Concordia University, Montreal",
      year: "2022 - 2024 (Expected)",
    },
    {
      degree: "Bachelor of Engineering - Electronics and Communication",
      school: "Sathyabama Institute of Science and Technology, Chennai, India",
      year: "2016 - 2020",
    },
  ];

  return (
    <StyledCard className="quote-card-view">
      <Card.Body>
        <Title>
          🚀 Pranay Sood - Innovator at the Intersection of Technology and
          Engineering
        </Title>
        <Description>
          Pursuing advanced studies in Electrical and Computer Engineering at
          Concordia University. Passionate about leveraging technology to solve
          complex problems in innovative ways.
        </Description>
        <Section>
          {highlights.map((highlight, index) => (
            <Item key={index}>{highlight}</Item>
          ))}
        </Section>
        <Section>
          <Title>Education📚</Title>
          {education.map((edu, index) => (
            <Description key={index}>
              <strong>{edu.degree}</strong> <br />
              {edu.school} <br />
              {edu.year}
            </Description>
          ))}
        </Section>
        <Description className="text-muted">
          "Committed to delivering impactful technological solutions."
        </Description>
      </Card.Body>
    </StyledCard>
  );
}

export default AboutCard;
