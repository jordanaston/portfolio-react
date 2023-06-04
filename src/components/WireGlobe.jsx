import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function WireGlobe() {
  const containerRef = useRef(null);

  useEffect(() => {
    let container = containerRef.current;
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    let renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth * 0.55, window.innerHeight * 0.55);
    container.appendChild(renderer.domElement);

    let sphereGeometry = new THREE.SphereGeometry(1.5, 24, 24);
    let edgesGeometry = new THREE.EdgesGeometry(sphereGeometry);
    let material = new THREE.LineBasicMaterial({
      color: 0x929a8e,
      opacity: 0.5,
      transparent: true,
    });
    let sphere = new THREE.LineSegments(edgesGeometry, material);
    scene.add(sphere);

    sphere.rotation.x = 0.8;  // Tilt the top forward
    sphere.rotation.y = 0.5; 

    let mouseDown = false;
    let rotateSpeed = 0.004;
    let lastMouseX = null;
    let lastMouseY = null;

    function onMouseMove(event) {
      if (!mouseDown) {
        return;
      }
      let mouseX = event.clientX;
      let mouseY = event.clientY;
      if (lastMouseX != null && lastMouseY != null) {
        let deltaX = mouseX - lastMouseX;
        let deltaY = mouseY - lastMouseY;
        sphere.rotation.x += deltaY * rotateSpeed;
        sphere.rotation.y += deltaX * rotateSpeed;
        sphere.rotation.z += (deltaX + deltaY) * rotateSpeed;
      }
      lastMouseX = mouseX;
      lastMouseY = mouseY;
    }

    function onMouseDown(event) {
      mouseDown = true;
      lastMouseX = event.clientX;
      lastMouseY = event.clientY;
    }

    function onMouseUp(event) {
      mouseDown = false;
      lastMouseX = null;
      lastMouseY = null;
    }

    function animate() {
      requestAnimationFrame(animate);
      sphere.rotation.y += rotateSpeed;
      renderer.render(scene, camera);
    }
    animate();

    document.addEventListener('mousemove', onMouseMove, false);
    container.addEventListener('mousedown', onMouseDown, false);
    container.addEventListener('mouseup', onMouseUp, false);

    return () => {
      document.removeEventListener('mousemove', onMouseMove, false);
      container.removeEventListener('mousedown', onMouseDown, false);
      container.removeEventListener('mouseup', onMouseUp, false);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="wire-globe-container" />;
}

export default WireGlobe;