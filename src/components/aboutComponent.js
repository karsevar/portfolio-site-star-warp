import React, { useState, useEffect } from "react";
import NameLogo from "../images/coollogo_com-72345118.svg";
import ProfessionLogo from "../images/coollogo_com-209701667.svg";
import { ReactComponent as AboutSVG } from "../images/coollogo_com-220706091.svg";
function AboutComponent(props) {
  return (
    <div className='about-container'>
      <img src={NameLogo} className='svg-logo' />
      <img src={ProfessionLogo} className='svg-logo-subheader' />
      <fieldset className='about-subcontainer'>
        <legend>TechStack</legend>
      </fieldset>
      <fieldset className='about-subcontainer'>
        <legend>
          <div className='svg-divider'>
            <AboutSVG />
          </div>
        </legend>
        <div className='background-container'>
          <p>Hello There!</p>
          <p>
            My name is Mason Karsevar and I'm a full stack web developer with
            experience coding professionally in vanilla JavaScript, HTML,
            NodeJs, and React as well as hobby level experience in programming
            machine learning algorithms and statistical analysis workflows using
            R and the Python packages Scikit Learn and Tensorflow.
          </p>
          <p>
            Please feel free on to contact me if you want to learn more about my
            experience or just simply want to chat about computer architecture
            and cool implementations for some novel algorithm.
          </p>
          <p>
            As you can see from this site's design, I'm a little of a nerd....
          </p>
        </div>
      </fieldset>
    </div>
  );
}

export default AboutComponent;
