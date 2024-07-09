import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import styled, { keyframes } from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledContainer = styled(Container)`
  background-color: #f4f4f4;
  padding: 50px 0;
  animation: ${fadeIn} 1s ease-out;
`;

const DescriptionCol = styled(Col)`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ImageCol = styled(Col)`
  img {
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const HeadingCol = styled(Col)`
  margin-top: 50px;
  text-align: center;

  h1 {
    color: var(--imp-text-color);
    margin-bottom: 25px;
    transition: color 0.5s ease-in-out;
  }
  &:hover h1 {
    color: #6a1b9a;
  }
`;

const CardHoverEffect = styled.div`
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <StyledContainer fluid>
      <Container>
        <Row
          className="justify-content-center text-center"
          style={{ padding: "10px" }}
        >
          <DescriptionCol md={7}>
            <h1 className="display-4" style={{ paddingBottom: "20px" }}>
              Discover Who <strong className="purple">I AM</strong>
            </h1>
            <div data-aos="fade-right">
              <AboutCard />
            </div>
          </DescriptionCol>
          <ImageCol md={5} data-aos="fade-left">
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />
          </ImageCol>
        </Row>
        <Row>
          <HeadingCol data-aos="fade-up">
            <h1 className="project-heading">
              Professional <strong className="purple">Skills</strong>
            </h1>
            <CardHoverEffect>
              <Techstack />
            </CardHoverEffect>
          </HeadingCol>
        </Row>
        <Row>
          <HeadingCol data-aos="zoom-in">
            <h1 className="project-heading">
              <strong className="purple">Tools</strong> I Have Worked With
            </h1>
            <CardHoverEffect>
              <Toolstack />
            </CardHoverEffect>
          </HeadingCol>
        </Row>
      </Container>
    </StyledContainer>
  );
}

export default About;
