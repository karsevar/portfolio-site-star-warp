import React, { useState, useEffect } from "react";

import TechCard from "./TechCard";
import AlgorithmsCard from "./AlgorithmsCard";

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
import { ReactComponent as ProjectsSVG } from "../images/coollogo_com-4874472.svg";

function AboutComponent(props) {
  const [techBoolean, setTechBoolean] = useState(false);
  const [languageBoolean, setLanguageBoolean] = useState(false);
  const [algorithmBoolean, setAlgorithmBoolean] = useState(false);

  const setTransformBoolean = props.setTransformBoolean;
  const setScrollBack = props.setScrollBack;

  const handleAlgorithmClick = () => {
    setAlgorithmBoolean(true);
    setTransformBoolean(true);
  };

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

  const handleProjectsClick = () => {
    // console.log("props history", props);
    window.scrollTo(0, 0);
    props.history.push("/projects");
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
  } else if (algorithmBoolean) {
    const algorithmArray = [
      {
        title: "Reverse a doubly linked list",
        description:
          "https://www.hackerrank.com/challenges/reverse-a-doubly-linked-list/problem",
        solution:
          "https://github.com/karsevar/Code_Challenge_Practice/tree/master/reverse_doubly_linked_list",
      },
      {
        title: "Inserting a Node into a Sorted Doubly Linked List",
        description:
          "https://www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list/problem",
        solution:
          "https://github.com/karsevar/Code_Challenge_Practice/tree/master/doubly-linked-list-insertion",
      },
      {
        title: "Plus minus",
        description: "https://www.hackerrank.com/challenges/plus-minus/problem",
        solution:
          "https://github.com/karsevar/Code_Challenge_Practice/tree/master/plus-minus",
      },
    ];
    return (
      <AlgorithmsCard
        algorithmArray={algorithmArray}
        setBoolean={setAlgorithmBoolean}
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
            <AboutSVG />
          </legend>
          <div className='background-container'>
            <p>Hello There!</p>
            <p>
              My name is Mason Karsevar and I'm a full stack web developer with
              experience coding in JavaScript, CSS, and HTML.
            </p>
          </div>
        </fieldset>
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
            <h4>Latest Algorithm Challenge</h4>
            <div className='latest-algorithm'>
              <div className='algorithm-title'>
                <p>Reverse a doubly linked list</p>
              </div>
              <div className='algorithm-btns'>
                <div className='solution-btn'>
                  <a href='https://www.hackerrank.com/challenges/reverse-a-doubly-linked-list/problem'>
                    Problem
                  </a>
                </div>
                <div className='solution-btn'>
                  <a href='https://github.com/karsevar/Code_Challenge_Practice/tree/master/reverse_doubly_linked_list'>
                    Solution
                  </a>
                </div>
              </div>
            </div>
            <div className='about-btn-container'>
              <button
                className='about-btn'
                onClick={() => handleAlgorithmClick()}
              >
                See More
              </button>
            </div>
          </div>
        </fieldset>
        <fieldset className='about-subcontainer'>
          <legend>
            <ProjectsSVG />
          </legend>
          <div className='background-container'>
            <p>Click here to view projects....</p>
            <div className='about-btn-container'>
              <button
                className='about-btn'
                onClick={() => handleProjectsClick()}
              >
                Projects
              </button>
            </div>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default AboutComponent;
