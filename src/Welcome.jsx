import React, { useState, useEffect } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import logo from "./logo.svg";
import Typed from "react-typed";

import "./Welcome.css";

export default function Welcome() {
  const [first_delay, setFirst] = useState(false);
  const [second_delay, setSecond] = useState(false);

  const mountedTitle = {
    opacity: 1,
    transition: "opacity 500ms ease-in",
    fontSize: 128
  };
  const unmountedTitle = {
    opacity: 0,
    transition: "opacity 500ms ease-in",
    fontSize: 128
  };
  const mountedStyle = {
    opacity: 1,
    transition: "opacity 500ms ease-in",
    fontSize: 28
  };
  const unmountedStyle = {
    opacity: 0,
    transition: "opacity 500ms ease-in",
    fontSize: 28
  };

  useEffect(() => {
    setTimeout(() => {
      setFirst(true);
    }, 1000);
    setTimeout(() => {
      setSecond(true);
    }, 2000);
  }, []);

  return (
    <div style={{ marginLeft: 15, minHeight: 300 }}>
      <div style={first_delay ? mountedTitle : unmountedTitle}>Hello.</div>

      <Typed
        style={first_delay ? mountedStyle : unmountedStyle}
        strings={[
          "My name is Veeral Bhagat.",
          "I am a fourth year computer science major."
        ]}
        typeSpeed={30}
        backSpeed={30}
        loop={true}
        startDelay={1500}
      />

      {/*<div style={first_delay ? mountedStyle : unmountedStyle} className="f">
        My name is Veeral Bhagat.
      </div>
      <div style={second_delay ? mountedStyle : unmountedStyle} className="f">
        I am a fourth year computer science major.
      </div>*/}
    </div>
  );
}
