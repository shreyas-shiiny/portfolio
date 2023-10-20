import React from "react";
import { Container, Row,Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
      <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <h2 style={{ color: "white" }}>
          These are few projects I've worked on recently.
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Basic PORTFOLIO"
              description="It includes Basic HTML and Javascript. While developing this project I understand that how I can build a Basic Web-page "
              link="https://shreyas-shiiny.github.io/shreyasport.github.io/"
            /> 
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Blog"
              description="It includes the react-js components to create a blog page.In  this blog page where we can  have an idea about all the treding features in the industry as well the behind industries "
              link="https://653261556df19002fcf9409e--snazzy-basbousa-bc769d.netlify.app/"
            /> 
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="react-smooth"
              description="It  is a animation library work on React.The smooth Scrolling feature for web pages allows the user to scroll smoothly while navigating across a webpage. This feature came into wide use because the normal scrolling is choppy and annoying for a lot of users who have to read long pages on the web. "
              link="https://preeminent-cendol-0c8337.netlify.app/"
            /> 
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Question and Answers"
              description="In this i have to implemented toggle functionality to a button, so we can have states in our component that will either be true or false and based on the value of state we can implement toggle functionality. When we click on the button and the current value of the state is true then we changed it to false and vice versa "
              link="https://fabulous-fairy-cff80a.netlify.app/"
            /> 
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;