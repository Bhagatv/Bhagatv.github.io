import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faEnvelopeSquare,
  faCaretSquareDown,
  faFileAlt,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

import "./Project.css";

export default function Project(props) {
  return (
    <Container className="project-cont">
      <Row
        fluid
        className={
          props.inverse ? "project-row flex-sm-row-reverse" : "project-row"
        }
      >
        <Col className="project-title-cont my-auto col-12 col-md-6 col-sm-12 col-xs-12 ">
          <a target="_blank" className="project-git-link" href={props.link}>
            <div className="project-title">{props.title}</div>
          </a>

          <Container fluid className="project-quote">
            {props.quote}
          </Container>
        </Col>

        <Col className="project-desc col-12 col-md-6 col-sm-12 col-xs-12">
          <div style={{ textAlign: "left" }}>{props.desc}</div>
          <a target="_blank" className="project-git-link" href={props.link}>
            <div className="project-git">
              <span className="devpost">Check out our Devpost! </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </div>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export function InverseProject(props) {
  return (
    <Container className="project-cont">
      <Row fluid className="project-row">
        <Col className="project-desc">
          <div style={{ textAlign: "left" }}>{props.desc}</div>
          <a target="_blank" className="project-git-link" href={props.link}>
            <div className="project-git">
              <span className="devpost">Check out our Devpost! </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </div>
          </a>
        </Col>
        <Col className="project-title-cont my-auto">
          <a target="_blank" className="project-git-link" href={props.link}>
            <div className="project-title">{props.title}</div>
          </a>
          <Container fluid className="project-quote">
            {props.quote}
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
