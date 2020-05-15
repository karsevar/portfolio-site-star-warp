import React from "react";
import { ReactComponent as FishFriends } from "../images/coollogo_com-326361383.svg";
import { ReactComponent as CoachMe } from "../images/coollogo_com-276021646.svg";
import { ReactComponent as FoodieFun } from "../images/coollogo_com-279641067.svg";
import coachMeImage from "../images/coachme1.png";
import { ReactComponent as ProjectSVG } from "../images/project-diagram-solid.svg";

function ProjectsComponent(props) {
  // console.log("props from app.js", props);
  const setTransformBoolean = props.setTransformBoolean;

  const handleClickTransform = () => {
    console.log("handle transform click pressed");
    setTransformBoolean(true);
  };

  const handleClickReTransform = () => {
    setTransformBoolean(false);
  };

  return (
    <div className='projects-container'>
      <fieldset className='project-content'>
        <legend>
          <CoachMe />
        </legend>
        <div className='image-container'>
          <img src={coachMeImage} />
          <div className='project-btn-container'>
            <button
              onClick={() => handleClickTransform()}
              className='project-btn'
            >
              Learn More
            </button>
            <button
              onClick={() => handleClickReTransform()}
              className='project-btn'
            >
              Retransform!
            </button>
            <div className='project-btn project-btn-div'>
              <a>
                <ProjectSVG />
                <p>Visit App</p>
              </a>
            </div>
            <div className='project-btn project-btn-div'>Github</div>
          </div>
        </div>
        <div className='project-text'>
          <p>
            CoachMe is a userfacing web application that gives desired patient
            management functionality to health coaches and quick health metrics
            lookup to patients suffering from cronic diseases.
          </p>
        </div>
      </fieldset>
      <fieldset className='project-content'>
        <legend>
          <FishFriends />
        </legend>
      </fieldset>
      <fieldset className='project-content'>
        <legend>
          <FoodieFun />
        </legend>
      </fieldset>
    </div>
  );
}

export default ProjectsComponent;
