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
        {navBoolean ? "-" : "+"}
      </button>
      <div
        class={navBoolean ? "cn-wrapper opened-nav" : "cn-wrapper"}
        id='cn-wrapper'
      >
        <ul>
          <li>
            <Link to='/projects'>
              {/* <span class='icon-picture'></span> */}
              <ProjectSVG />
            </Link>
          </li>
          <li>
            <Link to='/'>
              {/* <span class='icon-headphones'></span> */}
              <UserSVG />
            </Link>
          </li>
          <li>
            <a href='#'>
              {/* <span class='icon-home'></span> */}
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
