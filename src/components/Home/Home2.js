import React, { useEffect } from "react";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import myImg from "../../Assets/avatar-1.jpg";
import Tilt from "react-parallax-tilt";
import Type from "./Type";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCodeBranch,
  faGlobe,
  faLaptopCode,
  faChartLine,
  faBrain,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";

// Imported components
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function Home2() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Play animation only once
    });
  }, []);

  const cardStyle = {
    position: "relative", // Ensure particles are correctly positioned
    maxWidth: "70rem", // Increased max width
    margin: "20px auto", // Reduced margin to bring it closer
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    padding: "20px",
    borderRadius: "15px",
    backgroundColor: "#f8f9fa",
    border: "none",
    overflow: "hidden", // Ensure particles do not overflow
    transition: "transform 0.2s, box-shadow 0.2s", // Add hover effect
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
    },
  };

  const sectionHeaderStyle = {
    color: "#000", // Bootstrap primary color
    marginBottom: "15px",
    textAlign: "center",
  };

  const introTextStyle = {
    position: "relative",
    zIndex: 5,
    background: "rgba(255, 255, 255, 0.8)", // Subtle white background overlay
    padding: "30px 40px", // Adjusted padding
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    marginBottom: "20px", // Add margin bottom to bring elements closer
    animation: "fadeIn 2s ease-in-out", // Added animation
    fontFamily: "'Poppins', sans-serif",
    color: "#000",
    transition: "color 0.3s ease-in-out, transform 0.3s ease-in-out",
    textShadow: "2px 2px 5px rgba(0,0,0,0.3)", // 3D text shadow effect
  };

  const imageColStyle = {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
  };

  return (
    <div
      className="home-center"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <Container
        fluid
        className="home-container"
        id="about"
        style={{ position: "relative", zIndex: 1 }}
      >
        <Row className="align-items-center justify-content-center">
          <Col md={5} className="intro-text" style={introTextStyle}>
            <h1
              className="display-4 animated fadeInDown"
              style={{ color: "#000" }}
            >
              Hi There! 👋
            </h1>
            <h2>I'm Pranay Sood</h2>
            <p className="lead animated fadeIn" style={{ color: "#000" }}>
              Electrical and Computer Engineering Graduate
            </p>
            <Type />
          </Col>
          <Col md={5} className="my-auto" style={imageColStyle}>
            <Tilt className="animated fadeInRight">
              <img
                src={myImg}
                alt="Pranay Sood"
                className="img-fluid rounded avatar-img"
                style={{ maxWidth: "100%" }}
              />
            </Tilt>
          </Col>
        </Row>

        <Row className="justify-content-center" style={{ marginTop: "50px" }}>
          <Col md={10}>
            <h2 style={sectionHeaderStyle}>Skills and Qualifications</h2>
            <Row>
              <Col md={6}>
                <Card style={cardStyle} data-aos="fade-up">
                  <Card.Body>
                    <Card.Title style={sectionHeaderStyle}>
                      <FontAwesomeIcon icon={faUser} className="me-2" /> About
                      Me
                    </Card.Title>
                    <Card.Text as="div">
                      <p>
                        <FontAwesomeIcon icon={faCodeBranch} className="me-2" />{" "}
                        <strong>Professional Path:</strong> My career is marked
                        by a passion for innovation, especially in AI, machine
                        learning, and cloud infrastructures. At DXC Technology,
                        I enhanced my technical and project management skills
                        through complex cloud migrations and root cause analysis
                        in production systems.
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faGlobe} className="me-2" />{" "}
                        <strong>Creating the Future:</strong> Dedicated to
                        advancing software engineering and system architecture,
                        I design scalable, sustainable tech ecosystems and
                        foster a culture of innovation and excellence in the
                        tech community.
                      </p>
                      <p>
                        Engage with my technological journey and explore
                        collaborations by visiting my{" "}
                        <a href="https://github.com/pranaysood">GitHub</a> or
                        connecting on{" "}
                        <a href="https://www.linkedin.com/in/pranaysood">
                          LinkedIn
                        </a>
                        .
                      </p>
                    </Card.Text>
                    <Card.Text>
                      Discover my projects and the technologies I work with on{" "}
                      <a href="https://github.com/pranaysood">GitHub</a>.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card style={cardStyle} data-aos="fade-up">
                  <Card.Body>
                    <Card.Title style={sectionHeaderStyle}>
                      <FontAwesomeIcon icon={faLaptopCode} className="me-2" />{" "}
                      Skills
                    </Card.Title>
                    <div>
                      <p>Machine Learning Tools</p>
                      <ProgressBar
                        animated
                        now={90}
                        label="90%"
                        variant="info"
                        className="mb-3"
                      />
                      <p>Cloud Computing</p>
                      <ProgressBar
                        animated
                        now={85}
                        label="85%"
                        variant="success"
                        className="mb-3"
                      />
                      <p>Software Development</p>
                      <ProgressBar
                        animated
                        now={95}
                        label="95%"
                        variant="primary"
                        className="mb-3"
                      />
                      <p>Data Analysis</p>
                      <ProgressBar
                        animated
                        now={80}
                        label="80%"
                        variant="warning"
                        className="mb-3"
                      />
                      <p>AI and Machine Learning</p>
                      <ProgressBar
                        animated
                        now={85}
                        label="85%"
                        variant="danger"
                        className="mb-3"
                      />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="justify-content-center" style={{ marginTop: "50px" }}>
          <Col md={10}>
            <h2 style={sectionHeaderStyle}>Experience and Statistics</h2>
            <Row>
              <Col md={4}>
                <Card style={cardStyle} data-aos="fade-up">
                  <Card.Body>
                    <Card.Title style={sectionHeaderStyle}>
                      <FontAwesomeIcon icon={faChartLine} className="me-2" />{" "}
                      Statistics
                    </Card.Title>
                    <div style={{ textAlign: "center" }}>
                      <h3>
                        <FontAwesomeIcon icon={faBrain} className="me-2" />
                        <CountUp
                          start={0}
                          end={3}
                          duration={2.75}
                          separator=","
                          suffix="+"
                        />
                      </h3>
                      <p>Years of Experience</p>
                      <h3>
                        <CountUp
                          start={0}
                          end={6}
                          duration={2.75}
                          separator=","
                          suffix="+"
                        />
                      </h3>
                      <p>Academic Experience UG and MEng</p>
                      <h3>
                        <CountUp
                          start={0}
                          end={20}
                          duration={2.75}
                          separator=","
                          suffix="+"
                        />
                      </h3>
                      <p>Projects Completed</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={8}>
                <Card style={cardStyle} data-aos="fade-up">
                  <Card.Body>
                    <Card.Title style={sectionHeaderStyle}>
                      <FontAwesomeIcon
                        icon={faProjectDiagram}
                        className="me-2"
                      />{" "}
                      Root Cause Analysis Project
                    </Card.Title>
                    <Card.Text as="div">
                      <p>
                        <strong>Project:</strong> Root Cause Analysis in Cloud
                        Services
                      </p>
                      <p>
                        <strong>Supervisor:</strong> Dr. Yan Liu, Concordia
                        University
                      </p>
                      <p>
                        <strong>Description:</strong> Developed a sophisticated
                        Root Cause Analysis system using state-of-the-art AI and
                        machine learning techniques to identify and resolve
                        issues in cloud-based microservices architectures. The
                        project aimed to enhance the reliability and efficiency
                        of cloud services by accurately pinpointing the root
                        causes of performance anomalies.
                      </p>
                      <p>
                        <strong>Technologies Used:</strong> Python, TensorFlow,
                        PyTorch, Cloud Computing (AWS, Azure), Kubernetes,
                        Docker
                      </p>
                      <p>
                        <strong>Role:</strong> Lead Developer
                      </p>
                      <p>
                        <strong>Link:</strong>{" "}
                        <a href="https://github.com/pranaysood/Root-Cause-Analysis">
                          GitHub Repository
                        </a>
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Techstack />
        </Row>

        <Row>
          <Toolstack />
        </Row>

        <br></br>

        <br></br>
      </Container>
    </div>
  );
}

export default Home2;
