import React from "react";
import Header from "./Components/Headers/Header";
import SkillContainer from "./Components/skillcontainer/SkillContainer";
import Topcontainer from "./Components/Topcontainer/Topcontainer";
import ProjectContainer from "./Components/projectcontainer/projectcontainer";
import ExperienceContainer from "./Components/ExpeienceContainer/ExperienceContainer";
import Contact from "./Components/Contact/Contact";
import "./App.css";
const App = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Header />
            <Topcontainer />
            <SkillContainer />
            <ProjectContainer />
            <ExperienceContainer />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
