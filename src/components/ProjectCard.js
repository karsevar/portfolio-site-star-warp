import React from "react";

// Experimental import code: will be replaced with props:
import CoachMeLogo from "../images/coollogo_com-113011439.png";
import { ReactComponent as ProjectSVG } from "../images/project-diagram-solid.svg";
import coachMeImage from "../images/coachme1.png";

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
      <div className='text-content'>
        <img src={coachMeImage} />
        <div className='text-container'>
          <p>
            CoachMe is an interactive health coaching platform used by both
            health coaches to improve their workflow with managing their
            patients and patients to record and view their health metrics.
          </p>
          <h4>Tech Used: </h4>
          <ul>
            <li>
              React was used to build out all the user interface components and
              logic
            </li>
            <li>
              Node Sass for all the styling within both the patient and health
              coach dashboards
            </li>
            <li>Express to create the RESTful API framework for the server</li>
            <li>
              Postgres SQL and Knex for database structure and query interface
            </li>
            <li>Airtable for mirroring existing stakeholder data</li>
            <li>Twilio for in app text messaging functionality</li>
          </ul>
          <h4>Contributions:</h4>
          <ul>
            <li>Was the sole backend developer for the project</li>
            <li>
              Developed text message scheduling functionality for weekly and
              monthly reoccurance
            </li>
            <li>
              Created framework to query and mirror Airtable data from
              stakeholder's past database
            </li>
          </ul>
        </div>
      </div>
      <button onClick={() => handleClickReTransform()}>Back</button>
    </div>
  );
}

export default ProjectCard;
