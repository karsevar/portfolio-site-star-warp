import React, { useState, useEffect } from "react";

import TechCard from "./TechCard";

import NameLogo from "../images/coollogo_com-72345118.svg";
import ProfessionLogo from "../images/coollogo_com-209701667.svg";
import { ReactComponent as AboutSVG } from "../images/coollogo_com-220706091.svg";
import { ReactComponent as TechStackSVG } from "../images/coollogo_com-3960500.svg";
import { ReactComponent as Technologies } from "../images/coollogo_com-193321698.svg";
import { ReactComponent as Algorithms } from "../images/coollogo_com-2749875.svg";
import { ReactComponent as PythonLogo } from "../images/python-brands.svg";
import { ReactComponent as RLogo } from "../images/r-project-brands.svg";
import { ReactComponent as NodeLogo } from "../images/node-brands.svg";
import { ReactComponent as ReactLogo } from "../images/react-brands.svg";
import { ReactComponent as JSLogo } from "../images/js-brands.svg";
import { ReactComponent as HTMLLogo } from "../images/html5-brands.svg";
import { ReactComponent as CSSLogo } from "../images/css3-brands.svg";

function AboutComponent(props) {
  const [techBoolean, setTechBoolean] = useState(false);
  const [languageBoolean, setLanguageBoolean] = useState(false);

  const setTransformBoolean = props.setTransformBoolean;

  const handleTechClick = () => {
    console.log("tech button has been clicked");
    setTechBoolean(true);
    setTransformBoolean(true);
  };

  const handleLanguageClick = () => {
    console.log("language button has been clicked");
    setLanguageBoolean(true);
    setTransformBoolean(true);
  };

  if (techBoolean) {
    const techArray = [
      {
        logo: NodeLogo,
        description:
          "Spinning up backend servers and creating user friendly APIs is really my greatest joy.",
        github: "https://fish-friends.herokuapp.com/docs/",
      },
      {
        logo: ReactLogo,
        description:
          "With about 2 years in React, I am more than confortable with building out React frontend applications",
        github: "https://github.com/coachmehealth/coach-me-fe",
      },
    ];
    return (
      <TechCard
        resourceArray={techArray}
        setBoolean={setTechBoolean}
        setTransformBoolean={setTransformBoolean}
      />
    );
  } else if (languageBoolean) {
    const techArray = [
      {
        logo: PythonLogo,
        description:
          "I have been coding in Python for 2 years and am well versed in using it with numerious machine learning libraries.",
        github: "https://github.com/karsevar/tensorflow_projects",
      },
      {
        logo: RLogo,
        description:
          "R was the first programming language I learned and as such it holds a very special place in my heart",
        github: "https://github.com/karsevar/R_for_Data_Science-",
      },
      {
        logo: JSLogo,
        description:
          "JavaScript was the third language I learned and is currently the language that I'm most fluent in",
        github: "https://github.com/coachmehealth/coach-me-be",
      },
      {
        logo: HTMLLogo,
        description:
          "Just like with JavaScript, HTML5 was part of the primary curriculum at Lambda School",
        github: "https://github.com/route-management-system/user-interface",
      },
      {
        logo: CSSLogo,
        description:
          "Just like with JavaScript, HTML5 was part of the primary curriculum at Lambda School",
        github: "https://github.com/buildweek-foodiefun/front-end",
      },
    ];
    return (
      <TechCard
        resourceArray={techArray}
        setBoolean={setLanguageBoolean}
        setTransformBoolean={setTransformBoolean}
      />
    );
  } else {
    return (
      <div className='about-container'>
        <img src={NameLogo} className='svg-logo' />
        <img src={ProfessionLogo} className='svg-logo-subheader' />
        <fieldset className='about-subcontainer'>
          <legend>
            <TechStackSVG />
          </legend>
          <div className='languages-container'>
            <div className='language'>
              <PythonLogo />
            </div>
            <div className='language'>
              <RLogo />
            </div>
            <div className='language'>
              <JSLogo />
            </div>
            <div className='language'>
              <HTMLLogo />
            </div>
            <div className='language'>
              <CSSLogo />
            </div>
          </div>
          <div className='about-btn-container'>
            <button className='about-btn' onClick={() => handleLanguageClick()}>
              See More
            </button>
          </div>
        </fieldset>
        <fieldset className='about-subcontainer'>
          <legend>
            <Technologies />
          </legend>
          <div className='languages-container'>
            <div className='language'>
              <NodeLogo />
            </div>
            <div className='language'>
              <ReactLogo />
            </div>
          </div>
          <div className='about-btn-container'>
            <button className='about-btn' onClick={() => handleTechClick()}>
              See More
            </button>
          </div>
        </fieldset>
        <fieldset className='about-subcontainer'>
          <legend>
            <Algorithms />
          </legend>
          <div className='algorithms-container'>
            <p>Latest Algorithm Challenge</p>
          </div>
        </fieldset>
        <fieldset className='about-subcontainer'>
          <legend>
            <AboutSVG />
          </legend>
          <div className='background-container'>
            <p>Hello There!</p>
            <p>
              My name is Mason Karsevar and I'm a full stack web developer with
              experience coding professionally in vanilla JavaScript, HTML,
              NodeJs, and React as well as hobby level experience in programming
              machine learning algorithms and statistical analysis workflows
              using R and the Python packages Scikit Learn and Tensorflow.
            </p>
            <p>
              Please feel free on to contact me if you want to learn more about
              my experience or just simply want to chat about computer
              architecture and cool implementations for some novel algorithm.
            </p>
            <p>
              As you can see from this site's design, I'm a little of a nerd....
            </p>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default AboutComponent;
