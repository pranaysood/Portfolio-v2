import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
function Home() {
  return (
    <section className="home-section" id="home">
      <Home2 />
      <Container fluid className="home-content">
        <Row className="justify-content-center align-items-center text-center"></Row>

        <Row className="justify-content-center">
          <Col md={5}></Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
