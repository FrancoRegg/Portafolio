import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ContactMe = () => {
  return (
    <Container className="home-about-section-contact">
      <Row>
        <Col md={7} className="home-about-social-contact">
          <ul className="home-about-social-links-contact">
            <li className="social-icons">
              <a
                href="https://github.com/FrancoRegg"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/franco-reggiardo/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:franco.dev97@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <SiGmail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default ContactMe