import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Scrollspy from "react-scrollspy";
import Carousel from "./Carousel";

import { Container, Navbar, Nav } from "react-bootstrap";
import Welcome from "./Welcome";
import Icons from "./Icons";
import Project from "./Project";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";
import "./index.css";

function App() {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ fontFamily: "Source Sans Pro" }}>
      <Navbar
        id="navbar"
        expand="lg"
        style={{
          backgroundColor: navBackground ? "rgb(248, 249, 250)" : "#282c34"
        }}
      >
        <Navbar.Brand
          href="#home"
          style={{ color: navBackground ? "#282c34" : "white" }}
        >
          Veeral Bhagat
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ">
            <Scrollspy
              items={["home", "info", "projects"]}
              currentClassName="active"
              className="navbar-nav"
            >
              <li className="nav-item">
                <a
                  className="nav-item js-scroll-trigger"
                  href="#home"
                  style={{ color: navBackground ? "#282c34" : "white" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-item js-scroll-trigger"
                  href="#info"
                  style={{ color: navBackground ? "#282c34" : "white" }}
                >
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-item js-scroll-trigger"
                  href="#projects"
                  style={{ color: navBackground ? "#282c34" : "white" }}
                >
                  Projects
                </a>
              </li>
            </Scrollspy>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div id="section-cont">
        <section id="background">
          <section id="home" className="App">
            <Welcome />
            <Container className="icon-cont">
              <Icons />
            </Container>
            <a href="#info" className="down-arrow-cont">
              <FontAwesomeIcon
                size="5x"
                className="down-arrow"
                icon={faChevronDown}
              />
            </a>
          </section>

          <section id="info" className="Info">
            <Container id="carousel-cont">
              <div id="experience-title">Experience</div>

              <Carousel />
            </Container>
          </section>
          <section id="projects">
            <div id="projects-title">Projects</div>
            <Project
              title="Emocean"
              quote="Hack UCI 2019 Winner for Hacker's Choice & Best UI/UX"
              desc="Emocean is a mood tracker and emotion analysis tool that provides users with a summary of their moods throughout videos. After watching a video, users can look through our charts that compare a user's emotions as compared to others who watched the same video. Created using a vanilla HTML/CSS frontend with a Python Flask backend, with use of Microsoft Azure's Face API for image analysis."
              link="https://devpost.com/software/emocean"
              inverse={false}
            />
            <Project
              title="InstaCar"
              quote="Hack USC 2019 Winner for Best use of Smartcar API"
              desc="InstaCar is a peer-to-peer car renting service that allows for an interactionless exchange between owners and renters. Our platform allows users to rent, unlock, and even find nearby vehicles all through the web interface. Builting using a Python Flask backend, Google Firebase for storing vehicle and user data, and vanilla HTML/CSS for the frontend."
              link="https://devpost.com/software/instacar-o4ge0r"
              inverse
            />
            <Project
              title="Pokegatchi"
              quote="Hack UCI 2018 Winner for Most Addicting App & Most Polished Game"
              desc="Mobile application that allows users to translate Pokemon cards into an augmented reality environment where the user can care for the Pokemon as if they were virtual pets, a la Tamagotchis, and battle each other as if they were Pokemon. Created using Vuforia for the AR and image recognition components & Unity to render the 3D models"
              link="https://devpost.com/software/pokemon-ar"
              inverse={false}
            />
          </section>
        </section>
      </div>
    </div>
  );
}

export default App;
