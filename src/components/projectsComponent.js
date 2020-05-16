import React, { useState } from "react";

import ProjectCard from "./ProjectCard";

import { ReactComponent as FishFriends } from "../images/coollogo_com-326361383.svg";
import { ReactComponent as CoachMe } from "../images/coollogo_com-276021646.svg";
import { ReactComponent as FoodieFun } from "../images/coollogo_com-279641067.svg";
import coachMeImage from "../images/coachme1.png";
import fishFriendsImage from "../images/Screen Shot 2020-05-13 at 3.02.23 PM.png";
import foodieFunImage from "../images/Screen Shot 2020-05-15 at 10.31.49 AM.png";
import { ReactComponent as ProjectSVG } from "../images/project-diagram-solid.svg";
import { ReactComponent as GithubSVG } from "../images/github-square-brands.svg";

import CoachMeLogo from "../images/coollogo_com-113011439.png";
import FishFriendsLogo from "../images/coollogo_com-1324236.png";
import FoodieFunLogo from "../images/coollogo_com-1173231.png";

function ProjectsComponent(props) {
  // console.log("props from app.js", props);
  const setTransformBoolean = props.setTransformBoolean;

  const [expandCoachMe, setExpandCoachMe] = useState(false);
  const [expandFishFriends, setExpandFishFriends] = useState(false);
  const [expandFoodieFun, setExpandFoodieFun] = useState(false);

  const handleClickCoachMe = () => {
    console.log("handle transform click pressed");
    setTransformBoolean(true);
    setExpandCoachMe(true);
  };

  const handleClickFishFriends = () => {
    setTransformBoolean(true);
    setExpandFishFriends(true);
  };

  const handleClickFoodieFun = () => {
    setTransformBoolean(true);
    setExpandFoodieFun(true);
  };

  const handleExitCoachMe = () => {
    setTransformBoolean(false);
    setExpandCoachMe(false);
  };

  const handleExitFishFriends = () => {
    setTransformBoolean(false);
    setExpandFishFriends(false);
  };

  const handleExitFoodieFun = () => {
    setTransformBoolean(false);
    setExpandFoodieFun(false);
  };

  if (expandCoachMe) {
    const summary = `CoachMe is an interactive health coaching platform used by both
    health coaches to improve their workflow with managing their
    patients and patients to record and view their health metrics.`;

    const techUsed = [
      "React was used to build out all the user interface components and logic",
      "Node Sass for all the styling within both the patient and health coach dashboards",
      "Express to create the RESTful API framework for the server",
      "Postgres SQL and Knex for database structure and query interface",
      "Airtable for mirroring existing stakeholder data",
      "Twilio for in app text messaging functionality",
    ];

    const contributions = [
      "Was the sole backend developer for the project",
      "Developed text message scheduling functionality for weekly and monthly reoccurance",
      "Created framework to query and mirror Airtable data from stakeholder's past database",
    ];

    return (
      <ProjectCard
        summary={summary}
        techUsed={techUsed}
        contributions={contributions}
        handleClickReTransform={handleExitCoachMe}
        logoImage={CoachMeLogo}
        appImage={coachMeImage}
        github={"https://github.com/coachmehealth"}
        appLink={"https://coach-me-health-development.netlify.app/"}
      />
    );
  } else if (expandFishFriends) {
    const summary = `FishFriends is a web application used by fishing enthusiasts to find public access water front facilities as well as 
    review said facilities which can then be publicly viewed by all users.`;

    const techUsed = [
      "React was used to build out all the user interface components and logic",
      "Node Sass for styling the facility review components and map overlay",
      "Express to create the RESTful API framework for the server",
      "SQL lite and Knex for database structure and query interface",
      "React Map GL to render a map of Washington state and position the water facility sites according to latitude and longitude",
    ];

    const contributions = [
      "Developed the database framework for saving water facility reviews",
      "Discovered and utilized a water facilities API from the Fish and Wildlife Administration of Washington State for application site seed data",
      "Created multiple endpoints for data read, write, and edit requests from the frontend application",
    ];

    return (
      <ProjectCard
        summary={summary}
        techUsed={techUsed}
        contributions={contributions}
        handleClickReTransform={handleExitFishFriends}
        logoImage={FishFriendsLogo}
        appImage={fishFriendsImage}
        github={"https://github.com/Build-Week-FishFriends"}
        appLink={"https://fishfriends.netlify.app"}
      />
    );
  } else if (expandFoodieFun) {
    const summary = `FoodieFun is a personalized restaurant review web application. 
    Users can write personalized reviews of any restaurant in their area and view old 
    reviews when logged into their preexisting FoodieFun account.`;

    const techUsed = [
      "React for the user interface structure",
      "Axios for pull, push, and put requests to the backend server",
      "Semantic UI for basic component styling and application theme",
    ];

    const contributions = [
      "Designed basic React component hierarchy",
      "Instrumental in ensuring that CRUD functionality was achieved",
      "Helped in navigating through merge conflicts and ensuring that after each push request the basic functionality and aesthetic of the application was maintained.",
    ];

    return (
      <ProjectCard
        summary={summary}
        techUsed={techUsed}
        contributions={contributions}
        handleClickReTransform={handleExitFoodieFun}
        logoImage={FoodieFunLogo}
        appImage={foodieFunImage}
        github={"https://github.com/buildweek-foodiefun"}
        appLink={"https://bw-foodiefun.netlify.app/loginform"}
      />
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
                onClick={() => handleClickCoachMe()}
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
                onClick={() => handleClickFishFriends()}
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
                onClick={() => handleClickFoodieFun()}
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
