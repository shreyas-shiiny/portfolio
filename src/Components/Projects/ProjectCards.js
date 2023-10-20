import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "" : "View Project"}
        </Button> <br></br><br></br>
        {/* <Button variant="primary" href = {props.link1} target ="_blank">
        <BiLinkExternal /> &nbsp;
        {props.isBlog ? "" : "View Demo"}
        </Button> */}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;