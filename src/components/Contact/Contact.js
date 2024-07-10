import React, { useState, useEffect } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const StyledContainer = styled(Container)`
  padding-top: 100px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: var(--section-background-color);
`;

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 500px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 30px;
  background-color: #ffffff;
  animation: ${fadeIn} 0.8s ease-out;
`;

const CustomButton = styled(Button)`
  width: 100%;
  background-color: #000;
  border: none;
  &:hover {
    background-color: darken(var(--imp-text-color), 10%);
  }
`;

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <StyledContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title className="text-center mb-4">Get In Touch</Card.Title>
          {!submitted ? (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder="Your Message"
                  required
                />
              </Form.Group>
              <CustomButton type="submit">Send Message</CustomButton>
            </Form>
          ) : (
            <Alert variant="success">
              Thanks for contacting me! I will get back to you soon.
            </Alert>
          )}
        </Card.Body>
      </StyledCard>
    </StyledContainer>
  );
}

export default Contact;
