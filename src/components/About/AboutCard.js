import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <div>
            <p>
              ¡Soy Franco! Incursione al mundo de la Programación por curiosidad. Desde entonces disfruto creando experiencias web para los usuarios.
            </p>
            <br/>
            <p>
              Entre mis éxitos destaco que durante el Bootcamp de 4Geeks Academy, comprendí que <span className="yellow">trabajando en equipo se puede llegar muy lejos</span>. Ayudé a mis compañeros a interiorizar conceptos y a ponerlos en práctica.
            </p>
            <br/>
            <p>
              <span className="yellow">Cuento con experiencia desarrollando aplicaciones web</span>, y actualmente estoy creando una iniciativa para colaborar en la sociedad. Donde cada persona pueda contar con apoyo para avanzar un paso más en su camino de vida. 
            </p>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
