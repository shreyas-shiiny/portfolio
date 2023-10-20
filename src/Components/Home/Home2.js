import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpeg";
import {AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A <span className="purple"> little Few things about </span> me
            </h1>
            <p className="home-about-body">
            I'm a self-taught programmer who is passionate about Web Development
              <br />
              <br />Passionate learner and a developer in 
              <i>
                <b className="purple"> ReactJS, Javascript, GitHub , CSS, HTML </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> 
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            {/* <Tilt></Tilt> */}
            <img src={myImg} className="img-fluid" alt="avatar" height="200px" width="200px" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONTACT ME </h1>
            <p>
              You can openly <span className="purple">connect </span>with me
            </p><strong>
            <div itemscope itemtype="https://schema.org/LocalBusiness">
                Phone Number : <span itemprop="telephone"><a href="tel:+917022238553">
                +91 7022238553</a></span>
                </div>
                <div itemscope itemtype="https://schema.org/LocalBusiness">
                Email ID : <span itemprop="email"><a href="mailto:shreyasbm97@gmail.com"> shreyasbm97@gmail.com </a></span>
                </div>   </strong><br></br>
                <p>you can connect me in social media</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/shreyas-shiiny"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shreyas-bm-65969915a"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;