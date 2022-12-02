import React from "react";
import { Element } from "react-scroll";
import Topconent from "../Topcontent/Topconent";
import "./Topcontainer.css";

const Topcontainer = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12"></div>
          <Element name="about" className="topcontainer">
            <Topconent />
          </Element>
        </div>
      </div>
    </div>
  );
};

export default Topcontainer;
