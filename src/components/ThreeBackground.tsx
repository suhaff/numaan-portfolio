"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 7;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0); // transparent so CSS background shows
    mount.appendChild(renderer.domElement);

    // Central 3D shape (glowy icosahedron)
    const coreGeometry = new THREE.IcosahedronGeometry(2, 1);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x4f46e5,
      metalness: 0.6,
      roughness: 0.25,
      emissive: 0x312e81,
      emissiveIntensity: 0.8,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(coreMesh);

    // Soft lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x38bdf8, 1.4, 25);
    blueLight.position.set(-6, 4, 4);
    scene.add(blueLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 1.6, 25);
    purpleLight.position.set(6, -3, 5);
    scene.add(purpleLight);

    const orangeLight = new THREE.PointLight(0xf97316, 1.0, 30);
    orangeLight.position.set(0, 6, -4);
    scene.add(orangeLight);

    // Particles
    const particleCount = 450;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 14 * Math.random() + 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.08,
      color: 0x818cf8,
      transparent: true,
      opacity: 0.9,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Animation
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      coreMesh.rotation.x = elapsed * 0.25;
      coreMesh.rotation.y = elapsed * 0.32;

      particles.rotation.y = elapsed * 0.02;
      particles.rotation.x = Math.sin(elapsed * 0.15) * 0.08;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mount) return;
      const newWidth = mount.clientWidth;
      const newHeight = mount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, []);

  return <div ref={mountRef} className="three-bg" aria-hidden="true" />;
};

export default ThreeBackground;
