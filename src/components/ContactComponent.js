import React, { useState, useEffect } from "react";

import { ReactComponent as Email } from "../images/coollogo_com-268314890.svg";
import { ReactComponent as SocialMedia } from "../images/coollogo_com-188533900.svg";
import { ReactComponent as LinkedIn } from "../images/linkedin-brands.svg";
import { ReactComponent as Github } from "../images/github-square-brands.svg";

function ContactComponent(props) {
  const [formState, setFormState] = useState({
    name: "",
    contactInfo: "",
    comment: "",
  });

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    console.log("formState", formState);
    event.preventDefault();
    setFormState({ name: "", contactInfo: "", comment: "" });
  };

  return (
    <div className='contact-me-container'>
      <fieldset className='contact-subcontainer'>
        <legend>
          <SocialMedia />
        </legend>
        <div className='social-media'>
          <div className='social-logo'>
            <a href='https://www.linkedin.com/in/masonkarsevar'>
              <LinkedIn />
            </a>
          </div>
          <div className='social-logo'>
            <a href='https://github.com/karsevar'>
              <Github />
            </a>
          </div>
        </div>
      </fieldset>
      <fieldset className='contact-subcontainer'>
        <legend>
          <Email />
        </legend>
        <div className='email-container'>
          <form
            className='contact-me-form'
            onSubmit={(event) => handleSubmit(event)}
          >
            <input
              type='text'
              name='name'
              placeholder='Name'
              value={formState.name}
              onChange={(event) => handleChange(event)}
            />
            <input
              type='text'
              name='contactInfo'
              placeholder='Email'
              value={formState.contactInfo}
              onChange={(event) => handleChange(event)}
            />
            <textarea
              rows='5'
              cols='40'
              name='comment'
              placeholder='Please Input Comment Here...'
              value={formState.comment}
              onChange={(event) => handleChange(event)}
            ></textarea>
            <button className='contact-form-btn'>Send</button>
          </form>
        </div>
      </fieldset>
    </div>
  );
}

export default ContactComponent;
