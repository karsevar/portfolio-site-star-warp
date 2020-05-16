import React from "react";

// Experimental import code: will be replaced with props:
import CoachMeLogo from "../images/coollogo_com-113011439.png";
import { ReactComponent as ProjectSVG } from "../images/project-diagram-solid.svg";
import coachMeImage from "../images/coachme1.png";

function ProjectCard(props) {
  const handleClickReTransform = props.handleClickReTransform;
  const techUsed = props.techUsed;
  const contributions = props.contributions;
  const summary = props.summary;
  const logoImage = props.logoImage;
  const appImage = props.appImage;
  const github = props.github;
  const appLink = props.appLink;

  return (
    <div className='project-view-container'>
      <div className='logo-btn-container'>
        <img src={logoImage} />
        <div className='view-btn-container'>
          <div className='view-btn'>
            <a href={appLink}>
              {/* <ProjectSVG /> */}
              <p>Visit App</p>
            </a>
          </div>
          <div className='view-btn'>
            <a href={github}>
              {/* <ProjectSVG /> */}
              <p>Github</p>
            </a>
          </div>
        </div>
      </div>
      <div className='text-content'>
        <img src={appImage} />
        <div className='text-container'>
          <p>{summary}</p>
          <h4>Tech Used: </h4>
          <ul>
            {techUsed.map((tech) => {
              return <li>{tech}</li>;
            })}
          </ul>
          <h4>Contributions:</h4>
          <ul>
            {contributions.map((contri) => {
              return <li>{contri}</li>;
            })}
          </ul>
        </div>
      </div>
      <button onClick={() => handleClickReTransform()}>Back</button>
    </div>
  );
}

export default ProjectCard;
