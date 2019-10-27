import React, { useState } from "react";
import Typed from "react-typed";
import { Container, Row, Col } from "react-bootstrap";
import resume from "./veeral_bhagat.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faEnvelopeSquare,
  faCaretSquareDown,
  faFileAlt
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function Icons() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={2}>
          <a target="_blank" href="https://linkedin.com/in/bhagatv">
            <FontAwesomeIcon size="3x" icon={faLinkedin} className="icon" />
          </a>
        </Col>
        <Col xs={2}>
          <a target="_blank" className="icon" href="mailto:bhagatv@uci.edu">
            <FontAwesomeIcon size="3x" icon={faEnvelopeSquare} />
          </a>
        </Col>
        <Col xs={2}>
          <a target="_blank" className="icon" href="https://github.com/bhagatv">
            <FontAwesomeIcon size="3x" icon={faGithubSquare} />
          </a>
        </Col>
        <Col xs={2}>
          <a target="_blank" className="icon" href={resume}>
            <FontAwesomeIcon size="3x" icon={faFileAlt} />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
