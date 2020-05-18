import React, { useState } from "react";

function TechCard(props) {
  const setBoolean = props.setBoolean;
  const setTransformBoolean = props.setTransformBoolean;

  const handleBackClick = () => {
    setBoolean(false);
    setTransformBoolean(false);
  };
  return (
    <div className='tech-card-container'>
      <button onClick={() => handleBackClick()}>Back</button>
    </div>
  );
}

export default TechCard;
