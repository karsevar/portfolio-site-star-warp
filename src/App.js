import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import StarWarpComponent from "./components/starWarpComponent";
import ScrollComponent from "./components/scrollComponent";
import AboutComponent from "./components/aboutComponent";

function App() {
  const [crawlPos, setCrawlPos] = useState(0);
  const [scroll, setScroll] = useState(0);
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
        <div id='crawl' ref={crawlRef}>
          <div id='crawl-content' style={{ top: `${crawlPos}px` }}>
            <AboutComponent />
          </div>
        </div>
      </div>
      <ScrollComponent />
    </>
  );
}

export default App;