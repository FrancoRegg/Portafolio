import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/sin-fondo.png";
import Home2 from "./Home2";
import { AiOutlineDownload } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import CV from "../../Assets/CV Franco Programación.pdf";
import Type from "./Type";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
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
                <Type />
              </div>
              <Button 
                variant="primary"
                href={CV}
                target="_blank"
                style={{ maxWidth: "250px" }}>
                <AiOutlineDownload style={{ marginRight: "8px" }}/>
                Descarga CV
              </Button>
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
      <Home2 />
    </section>
  );
}

export default Home;
