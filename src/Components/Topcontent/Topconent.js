import React from "react";
import { Link } from "react-scroll";
import "./topcontent.css";
import vijayphoto from "../../images/vijayphoto.jpg";

const Topconent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="topcontent">
            <img className="image" src={vijayphoto} />
            <div className="topcontent__container">
              <h1>Mr.vijay</h1>
              <p>
                <h5>A Professional Full Stack Web Developer</h5>
              </p>
              <div>
                I am a confident, self driven, passionate, hardworking & fresher
                looking for an opportunity to work in a challenging environment
                and grow up with the organization. I am also fastlearner who
                likes to constantly upgrade myself.
              </div>

              <a
                href="https://drive.google.com/file/d/1YfAT6i3HJsQgGF8BQeGCRPdfTGvvPO4n/view?usp=share_link"
                target="_blank"
              >
                <button className="topcontent__downloadbutton">
                  Download cv
                </button>
              </a>
              <Link to="projects" smooth={true} duration={500}>
                <button className="topcontent__workbutton">My Work</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topconent;
