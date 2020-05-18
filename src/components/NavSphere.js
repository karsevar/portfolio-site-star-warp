import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as UserSVG } from "../images/user-alt-solid.svg";
import { ReactComponent as ProjectSVG } from "../images/project-diagram-solid.svg";
import { ReactComponent as EmailSVG } from "../images/envelope-open-text-solid.svg";

function NavSphere(props) {
  const [navBoolean, setNavBoolean] = useState(false);

  const handleNavClick = () => {
    console.log("Navigation circle was clicked");
    setNavBoolean(!navBoolean);
  };

  return (
    <div class='component'>
      <button class='cn-button' id='cn-button' onClick={() => handleNavClick()}>
        {navBoolean ? "Close" : "Menu"}
      </button>
      <div
        class={navBoolean ? "cn-wrapper opened-nav" : "cn-wrapper"}
        id='cn-wrapper'
      >
        <ul>
          <li>
            <Link to='/projects'>
              <ProjectSVG />
            </Link>
          </li>
          <li>
            <Link to='/'>
              <UserSVG />
            </Link>
          </li>
          <li>
            <a href='#'>
              <EmailSVG />
            </a>
          </li>
        </ul>
      </div>
      <div id='cn-overlay' class='cn-overlay'></div>
    </div>
  );
}

export default NavSphere;
