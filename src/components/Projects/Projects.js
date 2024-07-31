import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import palante from "../../Assets/Projects/palante.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Trabajos </strong> Recientes
        </h1>
        <p style={{ color: "white" }}>
        Aquí hay algunos proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={palante}
              isBlog={false}
              title="Pa'lante"
              description="Esta aplicación está en proceso... Su fin es ayudar al usuario a encontrar soluciones para sus problemas emocionales. Aquí puede conectar con profesionales de la rama de la psicología y, además, puede encontrar personas con historias similares a la suya."
              ghLink="https://github.com/FrancoRegg/Pa-lante"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
