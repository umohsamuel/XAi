import React, { useEffect, useRef } from "react";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import starsTexture from "../assets/3Dassets/img/stars.jpg";
import sunTexture from "../assets/3Dassets/img/sun.jpg";
import mercuryTexture from "../assets/3Dassets/img/mercury.jpg";
import venusTexture from "../assets/3Dassets/img/venus.jpg";
import earthTexture from "../assets/3Dassets/img/earth.jpg";
import marsTexture from "../assets/3Dassets/img/mars.jpg";
import jupiterTexture from "../assets/3Dassets/img/jupiter.jpg";
import saturnTexture from "../assets/3Dassets/img/saturn.jpg";
import saturnRingTexture from "../assets/3Dassets/img/saturn ring.png";
import uranusTexture from "../assets/3Dassets/img/uranus.jpg";
import uranusRingTexture from "../assets/3Dassets/img/uranus ring.png";
import neptuneTexture from "../assets/3Dassets/img/neptune.jpg";
import plutoTexture from "../assets/3Dassets/img/pluto.jpg";

const ThreedModel = React.memo(() => {
  const rendererRef = useRef();
  const sceneRef = useRef();
  const cameraRef = useRef();
  const orbitRef = useRef();

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;
    document.body.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;
    camera.position.set(-90, 140, 140);

    const orbit = new OrbitControls(camera, renderer.domElement);
    orbitRef.current = orbit;
    orbit.update();

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    const cubeTextureLoader = new THREE.CubeTextureLoader();
    scene.background = cubeTextureLoader.load([
      starsTexture,
      starsTexture,
      starsTexture,
      starsTexture,
      starsTexture,
      starsTexture,
    ]);

    const textureLoader = new THREE.TextureLoader();

    const sunGeo = new THREE.SphereGeometry(16, 30, 30);
    const sunMat = new THREE.MeshBasicMaterial({
      map: textureLoader.load(sunTexture),
    });
    const sun = new THREE.Mesh(sunGeo, sunMat);
    scene.add(sun);

    function createPlanete(size, texture, position, ring) {
      const geo = new THREE.SphereGeometry(size, 30, 30);
      const mat = new THREE.MeshStandardMaterial({
        map: textureLoader.load(texture),
      });
      const mesh = new THREE.Mesh(geo, mat);
      const obj = new THREE.Object3D();
      obj.add(mesh);
      if (ring) {
        const ringGeo = new THREE.RingGeometry(
          ring.innerRadius,
          ring.outerRadius,
          32
        );
        const ringMat = new THREE.MeshBasicMaterial({
          map: textureLoader.load(ring.texture),
          side: THREE.DoubleSide,
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        obj.add(ringMesh);
        ringMesh.position.x = position;
        ringMesh.rotation.x = -0.5 * Math.PI;
      }
      scene.add(obj);
      mesh.position.x = position;
      return { mesh, obj };
    }

    const mercury = createPlanete(3.2, mercuryTexture, 28);
    const venus = createPlanete(5.8, venusTexture, 44);
    const earth = createPlanete(6, earthTexture, 62);
    const mars = createPlanete(4, marsTexture, 78);
    const jupiter = createPlanete(12, jupiterTexture, 100);
    const saturn = createPlanete(10, saturnTexture, 138, {
      innerRadius: 10,
      outerRadius: 20,
      texture: saturnRingTexture,
    });
    const uranus = createPlanete(7, uranusTexture, 176, {
      innerRadius: 7,
      outerRadius: 12,
      texture: uranusRingTexture,
    });
    const neptune = createPlanete(7, neptuneTexture, 200);
    const pluto = createPlanete(2.8, plutoTexture, 216);

    // LIGHT
    const pointLight = new THREE.PointLight(0xffffff, 2, 300);
    scene.add(pointLight);

    const sunLight = new THREE.PointLight(0xffffff, 1, 300);
    const sunPosition = sun.position;
    sunLight.position.copy(sunPosition);
    scene.add(sunLight);

    function animate() {
      //Self-rotation
      sun.rotateY(0.004);
      mercury.mesh.rotateY(0.004);
      venus.mesh.rotateY(0.002);
      earth.mesh.rotateY(0.02);
      mars.mesh.rotateY(0.018);
      jupiter.mesh.rotateY(0.04);
      saturn.mesh.rotateY(0.038);
      uranus.mesh.rotateY(0.03);
      neptune.mesh.rotateY(0.032);
      pluto.mesh.rotateY(0.008);

      //Around-sun-rotation
      mercury.obj.rotateY(0.04);
      venus.obj.rotateY(0.015);
      earth.obj.rotateY(0.01);
      mars.obj.rotateY(0.008);
      jupiter.obj.rotateY(0.002);
      saturn.obj.rotateY(0.0009);
      uranus.obj.rotateY(0.0004);
      neptune.obj.rotateY(0.0001);
      pluto.obj.rotateY(0.00007);

      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }

    rendererRef.current.setAnimationLoop(animate);

    const handleResize = () => {
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Assuming you have an event listener for touchpad pinch, modify it like this:

    function handleTouchPinch(event) {
      // Prevent the default behavior (zooming)
      event.preventDefault();

      // Your zooming logic (if any)
      // ...
    }

    rendererRef.current.domElement.addEventListener(
      "gesturechange",
      handleTouchPinch,
      false
    );

    const handleMouseWheel = (event) => {
      event.preventDefault();
      // Handle mouse wheel (zoom) logic here
    };

    rendererRef.current.domElement.addEventListener(
      "mousewheel",
      handleMouseWheel,
      false
    );

    return () => {
      // Clean up event listeners and resources on unmount
      window.removeEventListener("resize", handleResize);
      rendererRef.current.domElement.removeEventListener(
        "gesturechange",
        handleTouchPinch
      );
      rendererRef.current.domElement.removeEventListener(
        "mousewheel",
        handleMouseWheel
      );

      // Dispose of materials, textures, geometries, and objects
      sun.geometry.dispose();
      sun.material.dispose();
      mercury.mesh.geometry.dispose();
      mercury.mesh.material.dispose();
      venus.mesh.geometry.dispose();
      venus.mesh.material.dispose();
      earth.mesh.geometry.dispose();
      earth.mesh.material.dispose();
      mars.mesh.geometry.dispose();
      mars.mesh.material.dispose();
      jupiter.mesh.geometry.dispose();
      jupiter.mesh.material.dispose();
      saturn.mesh.geometry.dispose();
      saturn.mesh.material.dispose();
      uranus.mesh.geometry.dispose();
      uranus.mesh.material.dispose();
      neptune.mesh.geometry.dispose();
      neptune.mesh.material.dispose();
      pluto.mesh.geometry.dispose();
      pluto.mesh.material.dispose();
      // Dispose of other planet geometries and materials

      // Dispose of Three.js resources
      rendererRef.current.dispose();
    };
  }, []);

  //   return <div className=" z-[999999] overflow-x-hidden"></div>;
});

export default ThreedModel;
