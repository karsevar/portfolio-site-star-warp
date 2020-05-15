import React, { useState, useEffect, useRef } from "react";
import { Route, Link } from "react-router-dom";

import "./App.css";
import StarWarpComponent from "./components/starWarpComponent";
import ScrollComponent from "./components/scrollComponent";
import AboutComponent from "./components/aboutComponent";
import ProjectsComponent from "./components/projectsComponent";
import { ReactComponent as UserSVG } from "./images/user-alt-solid.svg";
import { ReactComponent as ProjectSVG } from "./images/project-diagram-solid.svg";
import { ReactComponent as EmailSVG } from "./images/envelope-open-text-solid.svg";

function App() {
  const [crawlPos, setCrawlPos] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [transformBoolean, setTransformBoolean] = useState(false);
  const crawlRef = useRef(null);
  const [canvasStyle, canvasStyleSet] = useState({ width: 0, height: 0 });
  const [navBoolean, setNavBoolean] = useState(false);

  const handleNavClick = () => {
    console.log("Navigation circle was clicked");
    setNavBoolean(!navBoolean);
  };

  // main scroll logic for the application:
  const moveCrawl = (distance) => {
    setCrawlPos(crawlPos + distance);
  };

  const tick = () => {
    let elapsed = scroll - window.scrollY;
    setScroll(window.scrollY);
    moveCrawl(elapsed * 0.5);
  };

  const init = () => {
    setScroll(2);
    requestAnimationFrame(tick);
  };

  useEffect(() => {
    setCrawlPos(crawlRef.current.clientHeight);
    requestAnimationFrame(init);

    const handleScroll = (e) => {
      requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", (e) => handleScroll(e), true);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [canvasStyle]);

  return (
    <>
      <StarWarpComponent setCanvasStyles={canvasStyleSet} />
      <div
        id='crawl-container'
        className='App'
        style={{ width: canvasStyle.width, height: canvasStyle.height }}
      >
        {/* Navigation menu circular code */}
        <div class='component'>
          <button
            class='cn-button'
            id='cn-button'
            onClick={() => handleNavClick()}
          >
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
        <div
          id='crawl'
          ref={crawlRef}
          style={transformBoolean ? { transform: "none" } : {}}
        >
          <div id='crawl-content' style={{ top: `${crawlPos}px` }}>
            <Route exact path='/' component={AboutComponent} />
            <Route
              path='/projects'
              render={(props) => (
                <ProjectsComponent
                  {...props}
                  setTransformBoolean={setTransformBoolean}
                />
              )}
            />
            {/* <AboutComponent />
            <ProjectsComponent /> */}
          </div>
        </div>
      </div>
      <ScrollComponent />
    </>
  );
}

export default App;
