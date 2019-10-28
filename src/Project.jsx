import React from "react";
import { Container, Row, Col } from "react-bootstrap";

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
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="project-git-link"
            href={props.link}
          >
            <div className="project-title">{props.title}</div>
          </a>

          <Container fluid className="project-quote">
            {props.quote}
          </Container>
        </Col>

        <Col className="project-desc col-12 col-md-6 col-sm-12 col-xs-12">
          <div style={{ textAlign: "left" }}>{props.desc}</div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="project-git-link"
            href={props.link}
          >
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
