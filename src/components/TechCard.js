import React, { useState, useEffect } from "react";

import { ReactComponent as GithubSVG } from "../images/github-square-brands.svg";

function TechCard(props) {
  const setBoolean = props.setBoolean;
  const setTransformBoolean = props.setTransformBoolean;
  const resourceArray = props.resourceArray;

  const handleBackClick = () => {
    setBoolean(false);
    setTransformBoolean(false);
  };
  return (
    <div className='tech-view-container'>
      {resourceArray.map((techObject) => {
        return (
          <div className='skill-view-container'>
            <techObject.logo />
            <div className='skill-content'>
              <p>{techObject.description}</p>
            </div>
            <div className='skill-btn-container'>
              <a href={techObject.github}>
                <GithubSVG />
              </a>
            </div>
          </div>
        );
      })}
      <button onClick={() => handleBackClick()}>Back</button>
    </div>
  );
}

export default TechCard;
