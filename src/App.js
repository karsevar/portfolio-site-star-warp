import React, { useState, useEffect, useRef } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import StarWarpComponent from "./components/starWarpComponent";
import ScrollComponent from "./components/scrollComponent";
import AboutComponent from "./components/aboutComponent";
import NavSphere from "./components/NavSphere";
import ProjectsComponent from "./components/projectsComponent";
import ContactComponent from "./components/ContactComponent";

function App() {
  const [crawlPos, setCrawlPos] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [transformBoolean, setTransformBoolean] = useState(false);
  const [resizeFlicker, setResizeFlicker] = useState(false);
  const crawlRef = useRef(null);
  const [canvasStyle, canvasStyleSet] = useState({ width: 0, height: 0 });

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
    console.log("crawlRef.current.clientHeight", crawlRef.current.clientHeight);
    if (crawlRef.current.clientHeight === 0) {
      setCrawlPos(1200);
    } else {
      setCrawlPos(crawlRef.current.clientHeight - 400);
    }
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
      <StarWarpComponent
        setCanvasStyles={canvasStyleSet}
        setTransformBoolean={setResizeFlicker}
      />
      <div
        id='crawl-container'
        className='App'
        style={{ width: canvasStyle.width, height: canvasStyle.height }}
      >
        {/* Navigation menu circular code */}
        {transformBoolean ? <></> : <NavSphere />}

        <div
          id='crawl'
          ref={crawlRef}
          style={transformBoolean ? { transform: "none" } : {}}
        >
          {/* {console.log("crawlRef variables", crawlRef.current.clientHeight)} */}
          <div id='crawl-content' style={{ top: `${crawlPos}px` }}>
            <Route
              exact
              path='/'
              render={(props) => (
                <AboutComponent
                  {...props}
                  setTransformBoolean={setTransformBoolean}
                  setScrollBack={setResizeFlicker}
                />
              )}
            />
            <Route
              path='/projects'
              render={(props) => (
                <ProjectsComponent
                  {...props}
                  setTransformBoolean={setTransformBoolean}
                />
              )}
            />
            <Route
              path='/contactme'
              render={(props) => <ContactComponent {...props} />}
            />
          </div>
        </div>
      </div>
      <ScrollComponent transformBoolean={resizeFlicker} />
    </>
  );
}

export default App;
