import React, { useEffect, useRef, useState } from "react";

function ScrollComponent(props) {
  const transformBoolean = props.transformBoolean;
  return (
    <div
      className='scrollable'
      // style={transformBoolean ? { overflowY: "hidden" } : {}}
    ></div>
  );
}

export default ScrollComponent;
