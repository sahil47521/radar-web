"use client";

import { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, useTexture, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function PortraitSlideshow() {
  const [index, setIndex] = useState(0);
  const textures = useTexture([
    "/features/1-portrait.png",
    "/features/2-portrait.png",
    "/features/3-portrait.png",
    "/features/4-portrait.png",
    "/features/5-portrait.png",
  ]);

  useEffect(() => {
    textures.forEach((t) => {
      t.colorSpace = THREE.SRGBColorSpace;
      t.needsUpdate = true;
    });
  }, [textures]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % textures.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [textures.length]);

  return (
    <mesh>
      <planeGeometry args={[3.2, 5.8]} />
      <meshBasicMaterial 
        map={textures[index]} 
        transparent={true} 
        alphaTest={0.5}
      />
    </mesh>
  );
}

function FloatingContent() {
  const groupRef = useRef<THREE.Group>(null);
  const [jiggle, setJiggle] = useState({ x: 0, y: 0, scale: 1 });

  // Spring physics values
  const spring = useRef({ rx: 0, ry: 0, s: 1, vx: 0, vy: 0, vs: 0 });

  useFrame((state) => {
    if (groupRef.current) {
      // Idle floating
      const idleX = Math.cos(state.clock.elapsedTime * 0.2) * 0.05;
      const idleY = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;

      // Spring physics logic
      const stiffness = 0.15;
      const damping = 0.85;

      // Rotation Spring
      spring.current.vx += (0 - spring.current.rx) * stiffness;
      spring.current.vy += (0 - spring.current.ry) * stiffness;
      spring.current.rx += (spring.current.vx *= damping);
      spring.current.ry += (spring.current.vy *= damping);

      // Scale Spring
      spring.current.vs += (1 - spring.current.s) * stiffness;
      spring.current.s += (spring.current.vs *= damping);

      groupRef.current.rotation.x = idleX + spring.current.rx;
      groupRef.current.rotation.y = idleY + spring.current.ry;
      groupRef.current.scale.setScalar(spring.current.s);
    }
  });

  const handlePointerDown = () => {
    // Add a sudden "punch" to the scale and rotation
    spring.current.vs = -0.1; // Squish
    spring.current.vx = (Math.random() - 0.5) * 0.5;
    spring.current.vy = (Math.random() - 0.5) * 0.5;
  };

  const handlePointerMove = (e: any) => {
    if (e.buttons === 1) { // If mouse is pressed
      spring.current.vx += e.movementY * 0.002;
      spring.current.vy += e.movementX * 0.002;
    }
  };

  return (
    <group
      ref={groupRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
    >
      <Suspense fallback={null}>
        <PortraitSlideshow />
      </Suspense>
    </group>
  );
}

export default function Phone3D() {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ background: 'transparent' }}>
      <Canvas 
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }} 
        style={{ background: 'transparent' }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
        <Suspense fallback={null}>
          <ambientLight intensity={1.5} />
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <FloatingContent />
          </Float>
          <ContactShadows position={[0, -3.2, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
        </Suspense>
      </Canvas>
    </div>
  );
}
