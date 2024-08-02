import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import { AiOutlineDownload } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import CV from "../../Assets/programacion CV.pdf";
import ContactMe from "./Contact";

function Home() {
  return (
    <section>
      <Container fluid className="home-section">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                ¡Hola, 
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
                <br/>soy<strong className="main-name"> Franco Reggiardo!</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}> 
                <p style={{ fontSize: "1.2em" }}>
                  <span className="yellow">Desarrollador Full Stack.</span> <span className="orange">De Barcelona, España.</span> Me encanta resolver problemas cotidianos con líneas de código.
                </p>
              </div>
              <Button                
                variant="primary"
                href={CV}
                target="_blank"
                style={{ borderWidth:"medium", maxWidth:"250px", marginLeft: "50px" }}>
                <AiOutlineDownload style={{ marginRight: "8px" }}/>
                Descarga CV
              </Button>
              <ContactMe />
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
