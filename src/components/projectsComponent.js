import React, { useState } from "react";
import { ReactComponent as FishFriends } from "../images/coollogo_com-326361383.svg";
import { ReactComponent as CoachMe } from "../images/coollogo_com-276021646.svg";
import { ReactComponent as FoodieFun } from "../images/coollogo_com-279641067.svg";
import coachMeImage from "../images/coachme1.png";
import fishFriendsImage from "../images/Screen Shot 2020-05-13 at 3.02.23 PM.png";
import foodieFunImage from "../images/Screen Shot 2020-05-15 at 10.31.49 AM.png";
import { ReactComponent as ProjectSVG } from "../images/project-diagram-solid.svg";
import { ReactComponent as GithubSVG } from "../images/github-square-brands.svg";

function ProjectsComponent(props) {
  // console.log("props from app.js", props);
  const setTransformBoolean = props.setTransformBoolean;

  const [expandCoachMe, setExpandCoachMe] = useState(false);

  const handleClickTransform = () => {
    console.log("handle transform click pressed");
    setTransformBoolean(true);
    setExpandCoachMe(true);
  };

  const handleClickReTransform = () => {
    setTransformBoolean(false);
    setExpandCoachMe(false);
  };

  if (expandCoachMe) {
    return (
      <div className='project-view-container'>
        <h1>Single Project View!!!</h1>
        <button onClick={() => handleClickReTransform()}>Back!!!</button>
      </div>
    );
  } else {
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
              <div className='project-btn project-btn-div'>
                <a href='https://coach-me-health-development.netlify.app/'>
                  <ProjectSVG />
                  <p>Visit App</p>
                </a>
              </div>
              <div className='project-btn project-btn-div'>
                <a href='https://github.com/coachmehealth'>
                  <GithubSVG />
                  <p>Github</p>
                </a>
              </div>
            </div>
          </div>
          <div className='project-text'>
            <p>
              CoachMe is a userfacing web application that gives desired patient
              management functionality to health coaches and quick health
              metrics lookup to patients suffering from cronic diseases.
            </p>
          </div>
        </fieldset>
        <fieldset className='project-content'>
          <legend>
            <FishFriends />
          </legend>
          <div className='image-container'>
            <img src={fishFriendsImage} />
            <div className='project-btn-container'>
              <button
                onClick={() => handleClickTransform()}
                className='project-btn'
              >
                Learn More
              </button>
              <div className='project-btn project-btn-div'>
                <a href='https://fishfriends.netlify.app'>
                  <ProjectSVG />
                  <p>Visit App</p>
                </a>
              </div>
              <div className='project-btn project-btn-div'>
                <a href='https://github.com/Build-Week-FishFriends'>
                  <GithubSVG />
                  <p>Github</p>
                </a>
              </div>
            </div>
          </div>
          <div className='project-text'>
            <p>
              FishFriends is a social media platform for fishing enthusiasts.
              Through using this web application's interface users can find
              water front properties with public access the United States and
              post customizable notes on which fish they caught and the quality
              of the facility.
            </p>
          </div>
        </fieldset>
        <fieldset className='project-content'>
          <legend>
            <FoodieFun />
          </legend>
          <div className='image-container'>
            <img src={foodieFunImage} />
            <div className='project-btn-container'>
              <button
                onClick={() => handleClickTransform()}
                className='project-btn'
              >
                Learn More
              </button>
              <div className='project-btn project-btn-div'>
                <a href='https://bw-foodiefun.netlify.app/loginform'>
                  <ProjectSVG />
                  <p>Visit App</p>
                </a>
              </div>
              <div className='project-btn project-btn-div'>
                <a href='https://github.com/buildweek-foodiefun'>
                  <GithubSVG />
                  <p>Github</p>
                </a>
              </div>
            </div>
          </div>
          <div className='project-text'>
            <p>
              Restaurant review web application where users have the ability to
              view their past reviews on a sylish dashboard.
            </p>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default ProjectsComponent;
