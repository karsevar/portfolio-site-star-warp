import React, { useState, useEffect } from "react";
import NameLogo from "../images/coollogo_com-72345118.svg";
import ProfessionLogo from "../images/coollogo_com-209701667.svg";
function AboutComponent(props) {
  return (
    <div className='about-container'>
      <img src={NameLogo} className='svg-logo' />
      <img src={ProfessionLogo} className='svg-logo-subheader' />
      <div className='about-subcontainer'>
        <h2>About</h2>
      </div>
    </div>
  );
}

export default AboutComponent;
