import React, { useEffect, useRef, useState } from "react";

function ScrollComponent(props) {
  const transformBoolean = props.transformBoolean;
  return (
    <div
      className='scrollable'
      // style={transformBoolean ? { display: "none" } : {}}
    ></div>
  );
}

export default ScrollComponent;
