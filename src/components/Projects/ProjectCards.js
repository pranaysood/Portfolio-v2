import React from "react";
import { Card, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";

const StyledCard = styled(Card)`
  background: #fff;
  backdrop-filter: blur(8px);
  border-radius: 15px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  box-shadow: 0 5px 20px rgba(0, 76, 152, 0.15);
  margin: 20px auto;
  padding: 25px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 30px rgba(0, 76, 152, 0.25);
  }
`;

const StyledButton = styled(Button)`
  &:hover {
    transform: translateY(-2px);
  }
`;

const CardImage = styled(Card.Img)`
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

function ProjectCards(props) {
  const tooltip = (text) => <Tooltip>{text}</Tooltip>;

  return (
    <StyledCard className="project-card-view">
      <CardImage variant="top" src={props.imgPath} alt="Project image" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <div className="d-flex justify-content-around">
          <OverlayTrigger
            placement="bottom"
            overlay={tooltip("View on GitHub")}
          >
            <StyledButton
              variant="outline-primary"
              href={props.ghLink}
              target="_blank"
            >
              <BsGithub /> GitHub
            </StyledButton>
          </OverlayTrigger>
          {props.demoLink && (
            <OverlayTrigger placement="bottom" overlay={tooltip("View Demo")}>
              <StyledButton
                variant="outline-secondary"
                href={props.demoLink}
                target="_blank"
              >
                <CgWebsite /> Demo
              </StyledButton>
            </OverlayTrigger>
          )}
        </div>
      </Card.Body>
    </StyledCard>
  );
}

export default ProjectCards;
