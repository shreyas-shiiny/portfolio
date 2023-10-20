import React from "react";
import Card from "react-bootstrap/Card";
import { VscActivateBreakpoints } from "react-icons/vsc";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi , I am  <span className="purple">  shreyas  </span>
            from <span className="purple">  Bengaluru, Karnataka , India. </span>
            <br />I am currently pursuing MERN-Full Satck Web Developer 
            <br />
            <p> i  completed my Post Graduation(M.Tech) E&C in the steam of Embedded system who is dreaming to become an Successful Developer since when I started playing the TempleRun and CandyCrush games I am extremely interested in software development. so i am confident that I am well-prepared to be a valuable contributor to company growth and success.
Through my academic journey, I applied a strong focus on building my software development and programming abilities. i am detail-oriented and meticulous when managing competing priorities within tight deadlines. I work best in roles where utilizing system development allows me to make a positive impact while using creative problem-solving to resolve issues and achieve goals</p>
            <br />
             some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <VscActivateBreakpoints /> &nbsp; Watching Web series
            </li>
            <li className="about-activity">
              <VscActivateBreakpoints /> &nbsp; Following Tech-News
            </li>
            <li className="about-activity">
              <VscActivateBreakpoints /> &nbsp; Playing Games(Online and offline games)
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;