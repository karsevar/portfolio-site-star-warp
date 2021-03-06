import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import starImage from "../images/star.png";

function StarWarpComponent(props) {
  let scene, camera, renderer, stars, starGeo;
  const setTransformBoolean = props.setTransformBoolean;

  function init(canvasElement) {
    scene = new THREE.Scene({ canvas: canvasElement });
    camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 1;
    camera.rotation.x = Math.PI / 2;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    starGeo = new THREE.Geometry();
    for (let i = 0; i < 6000; i++) {
      let star = new THREE.Vector3(
        Math.random() * 600 - 300,
        Math.random() * 600 - 300,
        Math.random() * 600 - 300
      );
      star.velocity = 0;
      star.acceleration = 0.001;
      starGeo.vertices.push(star);
    }

    let sprite = new THREE.TextureLoader().load(starImage);

    let starMaterial = new THREE.PointsMaterial({
      color: 0xaaaaaa,
      size: 0.7,
      map: sprite,
    });

    stars = new THREE.Points(starGeo, starMaterial);
    scene.add(stars);

    // window.addEventListener("resize", onWindowResize, false);

    animate();
  }

  // function onWindowResize() {
  //   camera.aspect = window.innerWidth / window.innerHeight;
  //   camera.updateProjectionMatrix();
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  // }

  function animate() {
    starGeo.vertices.forEach((p) => {
      p.velocity += p.acceleration;
      p.y -= p.velocity;

      if (p.y < -200) {
        p.y = 200;
        p.velocity = 0;
      }
    });
    starGeo.verticesNeedUpdate = true;
    stars.rotation.y += 0.0002;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  const canvasRef = useRef(null);

  useEffect(() => {
    init(canvasRef);
    window.addEventListener("resize", onWindowResize, false);
    function onWindowResize() {
      setTransformBoolean(true);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      props.setCanvasStyles({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setTransformBoolean(false);
    }

    props.setCanvasStyles({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}

export default StarWarpComponent;
