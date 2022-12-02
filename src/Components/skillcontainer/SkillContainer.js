import React from "react";
import "./SkillContainer.css";
import { Element } from "react-scroll";
import computer from "../../images/computer.jpg";
import LinearProgress from "@mui/material/LinearProgress";

const SkillContainer = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12"></div>
          <Element className="skillcontainer" id="skills">
            <div className="skillcontainer__image">
              <img src={computer} alt="" className="skillimage" />
            </div>
            <div className="skillcontainer__text">
              <h2>SKILLSET</h2>
              <div className="skillcontainer__skilset">
                <h5>Html</h5>
                <div className="skillcontainer__slider skillcontainer__slider1">
                  <LinearProgress variant="determinate" value={80} />
                </div>
              </div>
              <div className="skillcontainer__skilset">
                <h5>Css</h5>
                <div className="skillcontainer__slider skillcontainer__slider2">
                  <LinearProgress variant="determinate" value={60} />
                </div>
              </div>
              <div className="skillcontainer__skilset">
                <h5>JavaScript</h5>
                <div className="skillcontainer__slider skillcontainer__slider3">
                  <LinearProgress variant="determinate" value={70} />
                </div>
              </div>
              <div className="skillcontainer__skilset">
                <h5>React js</h5>
                <div className="skillcontainer__slider skillcontainer__slider4">
                  <LinearProgress variant="determinate" value={70} />
                </div>
              </div>
              <div className="skillcontainer__skilset">
                <h5>Node js</h5>
                <div  className="skillcontainer__slider skillcontainer__slider5">
                  <LinearProgress id="node" variant="determinate" value={60} />
                </div>
              </div>
              <div className="skillcontainer__skilset">
                <h5>Express js</h5>
                <div className="skillcontainer__slider skillcontainer__slider6">
                  <LinearProgress variant="determinate" value={60} />
                </div>
                <h5>MongoDB</h5>
                <div className="skillcontainer__slider skillcontainer__slider7">
                  <LinearProgress variant="determinate" value={70} />
                </div>
              </div>
            </div>
          </Element>
        </div>
      </div>
    </div>
  );
};

export default SkillContainer;
