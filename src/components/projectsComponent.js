import React from "react";
import { ReactComponent as FishFriends } from "../images/coollogo_com-326361383.svg";

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
          <FishFriends />
        </legend>
        <button onClick={() => handleClickTransform()}>
          Click to Transform!
        </button>
        <button onClick={() => handleClickReTransform()}>
          Click to Retransform!
        </button>
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
