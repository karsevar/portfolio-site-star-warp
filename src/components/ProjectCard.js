import React from "react";

// Experimental import code: will be replaced with props:
import CoachMeLogo from "../images/coollogo_com-113011439.png";
import { ReactComponent as ProjectSVG } from "../images/project-diagram-solid.svg";

function ProjectCard(props) {
  const handleClickReTransform = props.handleClickReTransform;
  return (
    <div className='project-view-container'>
      <div className='logo-btn-container'>
        <img src={CoachMeLogo} />
        <div className='view-btn-container'>
          <div className='view-btn'>
            <a href='https://coach-me-health-development.netlify.app/'>
              {/* <ProjectSVG /> */}
              <p>Visit App</p>
            </a>
          </div>
          <div className='view-btn'>
            <a href='https://coach-me-health-development.netlify.app/'>
              {/* <ProjectSVG /> */}
              <p>Github</p>
            </a>
          </div>
        </div>
      </div>
      <button onClick={() => handleClickReTransform()}>Back!!!</button>
    </div>
  );
}

export default ProjectCard;
