import React from "react";
import { Element } from "react-scroll";
import Projects from "../projects/Projects";
import "./ProjectContainer.css";
import library from "../../images/library.png";
import student from "../../images/student.png";
import rental from "../../images/rental.png";

const projectContainer = () => {
  const projects = [
    {
      img: library,
      title: "Simple CURD Library Application",
      desc: "It is a simple CURD application,implemented by Dashboard method it has four functionality like get,post,put & delete,like simple beginner curd project",
      link: "https://library-crud-app-vijay.netlify.app",
    },
    {
      img: student,
      title: "Simple CURD School Management Application",
      desc: "It is a simple CURD application,implemented by Dashboard method it has four functionality like get,post,put & delete,like simple beginner curd project",
      link: "https://simple-curd-school-application.netlify.app",
    },
    {
      img: rental,
      title: "Eqipment Rental Application",
      desc: "It is a simple eqipment rental application made up of reactjs used in frontEnd,expressjs is used in backEnd & mongoDB is used as dataBase",
      link: "https://simple-rental-app-vijay.netlify.app",
    },
    /* {
      img: "https://th.bing.com/th/id/R.c1cbb1632851fd10c90779c0ebbc7e08?rik=qN%2baeSzgTZHgzQ&riu=http%3a%2f%2fstatic1.wikia.nocookie.net%2f__cb20130704022309%2fxmenmovies%2fimages%2fe%2feb%2fF_163494.jpg&ehk=%2fOMlMpYXkT%2bynIdUFw%2b6aG5dQzTmgnYC%2fugL3y2H0xc%3d&risl=&pid=ImgRaw&r=0",
      title: "Facebook",
      desc: "Download and use 40,000+ 4k Wallpaper stock photos for free. Thousands of new images every day Completely Free to Use High-quality videos and images from Pexels",
      link: "https://www.linkedin.com/in/thiru-c-3085391a5/",
    }, */
    /* {
      img: "https://th.bing.com/th/id/R.c1cbb1632851fd10c90779c0ebbc7e08?rik=qN%2baeSzgTZHgzQ&riu=http%3a%2f%2fstatic1.wikia.nocookie.net%2f__cb20130704022309%2fxmenmovies%2fimages%2fe%2feb%2fF_163494.jpg&ehk=%2fOMlMpYXkT%2bynIdUFw%2b6aG5dQzTmgnYC%2fugL3y2H0xc%3d&risl=&pid=ImgRaw&r=0",
      title: "Facebook",
      desc: "Download and use 40,000+ 4k Wallpaper stock photos for free. Thousands of new images every day Completely Free to Use High-quality videos and images from Pexels",
      link: "https://www.linkedin.com/in/thiru-c-3085391a5/",
    },
    {
      img: "https://th.bing.com/th/id/R.c1cbb1632851fd10c90779c0ebbc7e08?rik=qN%2baeSzgTZHgzQ&riu=http%3a%2f%2fstatic1.wikia.nocookie.net%2f__cb20130704022309%2fxmenmovies%2fimages%2fe%2feb%2fF_163494.jpg&ehk=%2fOMlMpYXkT%2bynIdUFw%2b6aG5dQzTmgnYC%2fugL3y2H0xc%3d&risl=&pid=ImgRaw&r=0",
      title: "Facebook",
      desc: "Download and use 40,000+ 4k Wallpaper stock photos for free. Thousands of new images every day Completely Free to Use High-quality videos and images from Pexels",
      link: "https://www.linkedin.com/in/thiru-c-3085391a5/",
    }, */
  ];
  return (
    <div>
      <Element className="projectcontainer" id="projects">
        <h1>Projects</h1>
        <p>
          Here some Projects which i done for improving my skill & which i was
          practicing to improving my skill
        </p>
        <div className="projectcontainer__projects">
          {projects.map((project, index) => {
            return (
              <Projects
                key={index}
                img={project.img}
                title={project.title}
                desc={project.desc}
                link={project.link}
              />
            );
          })}
        </div>
      </Element>
    </div>
  );
};

export default projectContainer;
