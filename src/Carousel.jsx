import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Container } from "react-bootstrap";
import Job from "./Job";
import "./Carousel.css";
export default () => (
  <Carousel
    autoPlay
    interval={10000}
    showArrows={false}
    showIndicators={false}
    showStatus={false}
    dynamicHeight={true}
    infiniteLoop={true}
  >
    <Container className="job-cont" fluid>
      <Job
        company="Akuna Capital"
        location="Chicago, IL"
        dates="Jun 2019 - Aug 2019"
        tools="Worked on the Risk Development team, which owned tools that the firm used to measure market exposure. Created a long-running service in Python using Asyncio that changed the way trade limits would be configured internally to prevent large monetary losses. I also wrote backend APIs that would aggregate historical trade data for consumption by internal tools."
        title="Software Engineer Intern"
        description={[]}
      />
      <img style={{ display: "none" }} src={null} alt="dummy img" />
    </Container>
    <Container className="job-cont" fluid>
      <Job
        company="UC Irvine"
        location="Irvine, CA"
        dates="Sep 2018 - Present"
        tools="Developed and maintained web applications in PHP and Drupal for various departments throughout the university. Built a React Native mobile application for commencement to help spread information to both students and attendees. Wrote backend APIs in Laravel that transformed student information data and provided developers with an easy endpoint for retrieving data."
        title="Part Time Software Engineer"
        description={[]}
      />
      <img style={{ display: "none" }} src={null} alt="dummy img" />
    </Container>
    <Container className="job-cont" fluid>
      <Job
        company="Aetna"
        location="Hartford, CT"
        dates="Jun 2018 - Aug 2018"
        tools="Worked on a data analytics software team that focused on providing tooling that captured fradulent activity. Developed an application in Python that analyses & scores transaction data to detect fraud and outputs a deliverable report to help management assess daily risk scores. Squashed multiple bugs in production where merchant data was being parsed incorrectly."
        title="Software Engineer Intern"
        description={[]}
      />
      <img style={{ display: "none" }} src={null} alt="dummy img" />
    </Container>
  </Carousel>
);
