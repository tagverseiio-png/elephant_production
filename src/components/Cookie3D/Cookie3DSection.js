'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, PerspectiveCamera } from '@react-three/drei';
import styles from './Cookie3DSection.module.css';

function ProceduralCookie() {
  const group = useRef();
  
  // Rotating the cookie slowly
  useFrame((state, delta) => {
    group.current.rotation.y += delta * 0.15;
    group.current.rotation.z += delta * 0.05;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
  });

  // Generate random chips once
  const chips = useMemo(() => {
    return [...Array(40)].map(() => {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.0; 
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      return [x * 0.95, y * 0.95, z * 0.95];
    });
  }, []);

  return (
    <group ref={group} scale={[1.2, 1.2, 0.4]}>
      {/* Main Cookie Body */}
      <mesh receiveShadow castShadow>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial 
          color="#d59550" 
          roughness={1} 
        />
      </mesh>
      
      {/* Chocolate Chips */}
      {chips.map((pos, i) => (
        <mesh key={i} position={pos} scale={[1, 1, 2.5]} castShadow>
          <sphereGeometry args={[0.15 + Math.random() * 0.1, 16, 16]} />
          <meshStandardMaterial color="#2d1305" roughness={0.8} />
        </mesh>
      ))}
    </group>
  );
}

export default function Cookie3DSection() {
  return (
    <section className={styles.cookieSection}>
      <div className={styles.cookieBg}></div>
      
      <div className={styles.cookieTextWrapper}>
        <h2 className={styles.cookieTitle}>Taste the Sky</h2>
      </div>
      
      <div className={styles.canvasContainer}>
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[0, -0.5, 8]} fov={45} />
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 10, 5]} intensity={2.5} castShadow />
          <directionalLight position={[-5, -10, -5]} intensity={0.5} />
          <Environment preset="sunset" />
          
          <Float speed={2} rotationIntensity={0.2} floatIntensity={1.5}>
            <ProceduralCookie />
          </Float>
        </Canvas>
      </div>
    </section>
  );
}
