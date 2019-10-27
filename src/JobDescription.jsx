import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";

import "./JobDescription.css";
export default function Job(props) {
  return (
    <Container
      fluid
      style={{
        color: "rgb(40, 44, 52)",

        width: "100%",
        height: 400,
        backgroundColor: "rgb(248, 249, 250)",
        fontFamily: "Source Sans Pro",
        padding: 15
      }}
    >
      <Row>
        <Col
          md={{ span: 7 }}
          style={{
            textAlign: "left",
            fontSize: 24
          }}
        >
          <div>
            <strong>{props.company}</strong> | {props.title}{" "}
          </div>
        </Col>
      </Row>
      <Row>
        <Col
          style={{
            fontStyle: "italic",
            color: "#646f79",
            fontSize: 18,
            textAlign: "left",
            opacity: 0.8,
            marginTop: 5
          }}
        >
          {props.location}
          &nbsp;&nbsp;•&nbsp;&nbsp;
          {props.dates}
        </Col>
      </Row>

      <Row style={{ height: "100%" }}>
        <Col
          style={{
            textAlign: "left",
            height: "100%",
            position: "relative"
          }}
        >
          <Container fluid style={{ height: "100%" }}>
            <Row style={{ height: "100%" }}>
              <Col className="my-auto">
                <p style={{ color: "#646f79", opacity: 0.8, fontSize: 18 }}>
                  {props.tools}
                </p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
