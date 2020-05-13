import React from "react";
import { ReactComponent as FishFriends } from "../images/coollogo_com-326361383.svg";

function ProjectsComponent(props) {
  return (
    <div className='projects-container'>
      <fieldset className='project-content'>
        <legend>
          <FishFriends />
        </legend>
      </fieldset>
      <fieldset className='project-content'>
        <legend>
          <FishFriends />
        </legend>
      </fieldset>
      <fieldset className='project-content'>
        <legend>
          <FishFriends />
        </legend>
      </fieldset>
    </div>
  );
}

export default ProjectsComponent;
