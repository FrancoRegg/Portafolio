import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Contact from "../Home/Home2"

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={5}
            style={{ paddingTop: "60px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />

          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Aboutcard />
          </Col>
        </Row>
        <h1 className="project-heading">
          Conjunto de <strong className="yellow">Habilidades </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="yellow">Herramientas</strong> que uso
        </h1>
        <Toolstack />
        <Contact />

        {/*<Github />*/}
      </Container>
    </Container>
  );
}

export default About;
