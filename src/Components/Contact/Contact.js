import React from "react";
import { Element } from "react-scroll";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Element id="contact" className="contact">
        <h1>Contact</h1>
        <div className="contact__container">
          <p>
            Email : <span>vijayshagara1221@gmail.com</span>
          </p>
          <p>
            Github Username : <span>vijayshagara1221@gmail.com</span>
          </p>
          <div className="contact__icons">
            <a href="https://www.linkedin.com/">
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </a>
            <a href="https://www.facebook.com/">
              <IconButton>
                <FacebookIcon />
              </IconButton>
            </a>
            <a href="https://www.instagram.com/">
              <IconButton>
                <InstagramIcon />
              </IconButton>
            </a>
          </div>
        </div>
      </Element>
      <div className="formData">
        <form
          target="_blank"
          action="https://formsubmit.co/vijayshagara1221@gmail.com"
          method="POST"
        >
          <input
            id="inputfield"
            className="input"
            type="text"
            name="Name"
            placeholder="Name "
            required
          />
          <br />
          <br />
          <input
            id="inputfield"
            className="input"
            type="email"
            name="Email"
            placeholder="Email"
            required
          />
          <br />
          <br />
          <input
            id="inputfield"
            className="input"
            type="text"
            name="Subject"
            placeholder="Subject"
            required
          />
          <br />
          <br />
          <textarea
            id="inputfield"
            className="input"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
          <br />
          <br />
          <input
            id="inputfield"
            style={{ background: "blue", color: "white", marginBottom: 5 }}
            type="submit"
            value="Submit"
            class="btn btn-primary"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
