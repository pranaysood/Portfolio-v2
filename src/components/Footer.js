import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// Styling the footer container
const StyledFooter = styled(Container)`
  background: #f0f0f0; // Example background color
  color: #333;
  padding: 20px 0;
  font-size: 16px;
  border-top: 1px solid #ccc;
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 1; // Ensure it is above the particle background
`;

// Styling for social icons
const SocialIcon = styled.a`
  color: #007bff;
  margin: 0 10px;
  &:hover {
    color: #0056b3;
  }
`;

// Styling for the text in footer
const FooterText = styled.h5`
  color: #666;
  font-size: 15px;
  text-align: center;
`;

function Footer() {
  const year = new Date().getFullYear(); // Current year for the copyright notice

  return (
    <StyledFooter fluid>
      <Row className="text-center text-md-left">
        <Col md={4}>
          <FooterText>Designed by Pranay Sood</FooterText>
        </Col>
        <Col md={4}>
          <FooterText>Copyright © {year}</FooterText>
        </Col>
        <Col md={4}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SocialIcon
              href="https://github.com/pranaysood"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub size="30px" />
            </SocialIcon>
            <SocialIcon
              href="https://twitter.com/pranaysood"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter size="30px" />
            </SocialIcon>
            <SocialIcon
              href="https://linkedin.com/in/pranaysood"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size="30px" />
            </SocialIcon>
            <SocialIcon
              href="https://instagram.com/pranaysood"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram size="30px" />
            </SocialIcon>
          </div>
        </Col>
      </Row>
    </StyledFooter>
  );
}

export default Footer;
