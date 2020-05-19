import React, { useState, useEffect } from "react";

import { ReactComponent as Email } from "../images/coollogo_com-268314890.svg";
import { ReactComponent as SocialMedia } from "../images/coollogo_com-188533900.svg";

function ContactComponent(props) {
  return (
    <div className='contact-me-container'>
      <fieldset className='contact-subcontainer'>
        <legend>
          <SocialMedia />
        </legend>
        <div className='social-media'></div>
      </fieldset>
      <fieldset className='contact-subcontainer'>
        <legend>
          <Email />
        </legend>
        <div className='email-container'></div>
      </fieldset>
    </div>
  );
}

export default ContactComponent;
