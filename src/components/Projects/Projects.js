import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import LLM from "../../Assets/Projects/LLM.png";
import Portfolio from "../../Assets/Projects/Portfolio.gif";
import SoftwareEngg from "../../Assets/Projects/SoftwareEngg.png";
import Realtime from "../../Assets/Projects/RealTime.png";
import Dss from "../../Assets/Projects/jettyrun.gif";
import styled from "styled-components";

const ProjectSection = styled(Container)`
  padding-top: 100px;
`;

const ProjectHeading = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: white;

  .purple {
    color: #000;
  }
`;

const ProjectCardWrapper = styled(Row)`
  justify-content: center;
  padding-bottom: 10px;
`;

const ProjectCol = styled(Col)`
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

function Projects() {
  return (
    <ProjectSection fluid className="project-section">
      <Container>
        <ProjectHeading className="project-heading">
          Showcasing <strong className="purple">My Projects</strong>
        </ProjectHeading>
        <p
          style={{ color: "white", textAlign: "center", marginBottom: "30px" }}
        >
          Here are a few projects I've worked on recently.
        </p>
        <ProjectCardWrapper>
          <ProjectCol md={4} className="project-card">
            <ProjectCard
              imgPath={LLM}
              isBlog={false}
              title="Zero Shot Learning using LLM"
              description="This research project, conducted under the supervision of Dr. Yan Liu, investigates the application of large language models (LLMs) for root cause analysis in microservice environments. Utilizing the PetShop Dataset, it aims to identify both the root cause node and the target node of anomalies in a microservices architecture without prior specific training."
              ghLink="https://github.com/pranaysood/Root-Cause-Analysis"
              demoLink="" // Add your demo link here
            />
          </ProjectCol>

          <ProjectCol md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="This is a personal portfolio website. Built using React.js, this project incorporates multiple pages, each featuring dynamic animations and smooth transitions to enhance user interaction and visual appeal. The site is structured to display various sections, including a home page, project portfolio, about section, and contact information."
              ghLink="https://github.com/pranaysood/Portfolio-2024"
              demoLink="" // Add your demo link here
            />
          </ProjectCol>

          <ProjectCol md={4} className="project-card">
            <ProjectCard
              imgPath={SoftwareEngg}
              isBlog={false}
              title="Trending News Social Application"
              description="This project focuses on creating a social application for sharing and discussing trending news. The application integrates real-time news updates and provides a platform for users to engage with news content through comments and shares. Designed to handle high traffic and provide a smooth user experience."
              ghLink="" // Add your GitHub link here
              demoLink="" // Add your demo link here
            />
          </ProjectCol>

          <ProjectCol md={4} className="project-card">
            <ProjectCard
              imgPath={Realtime}
              isBlog={false}
              title="Real-time Multimedia Application"
              description="This project explores the development of a real-time multimedia application, focusing on the seamless integration of various media types such as video, audio, and text. The application provides an interactive and engaging user experience, with real-time data processing and streaming capabilities."
              ghLink="" // Add your GitHub link here
              demoLink="" // Add your demo link here
            />
          </ProjectCol>

          <ProjectCol md={4} className="project-card">
            <ProjectCard
              imgPath={Dss}
              isBlog={false}
              title="Distributed Software Systems"
              description="This project involves designing and implementing distributed software systems that ensure reliability, scalability, and efficiency. It includes creating algorithms for distributed data processing and understanding the challenges associated with distributed computing, such as data consistency and fault tolerance."
              ghLink="" // Add your GitHub link here
              demoLink="" // Add your demo link here
            />
          </ProjectCol>
        </ProjectCardWrapper>
      </Container>
    </ProjectSection>
  );
}

export default Projects;
