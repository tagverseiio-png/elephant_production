'use client';
import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, PerspectiveCamera, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

function ScrollCamera() {
  const group = useRef();
  
  useFrame(() => {
    if (!group.current) return;
    
    // Calculate scroll progress (0 to 1)
    const scrollY = window.scrollY;
    // We add a safety check in case the body hasn't fully rendered
    const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
    const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
    
    let targetX = 0;
    let targetY = 0;
    let targetZ = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let targetRotZ = 0;
    let targetScale = 0.5;

    // Define the keyframes for the scroll trajectory
    if (progress < 0.25) {
      // Hero Section -> Bento 1 (Who we are)
      // Camera starts off-center (right side) and moderately small
      const p = progress / 0.25;
      targetX = THREE.MathUtils.lerp(3.5, 2.5, p);
      targetY = THREE.MathUtils.lerp(-1, -1.5, p);
      targetZ = THREE.MathUtils.lerp(2, 1.5, p);
      targetRotY = THREE.MathUtils.lerp(Math.PI * 0.1, -Math.PI / 6, p);
      targetRotX = THREE.MathUtils.lerp(Math.PI * 0.1, 0, p);
      targetScale = THREE.MathUtils.lerp(0.5, 0.35, p);
    } else if (progress < 0.5) {
      // Bento 1 -> Bento 2 (Influencer Strategy)
      // Camera moves left (where text is) and sizes down again
      const p = (progress - 0.25) / 0.25;
      targetX = THREE.MathUtils.lerp(2.5, -3, p);
      targetY = THREE.MathUtils.lerp(-1.5, -0.5, p);
      targetZ = THREE.MathUtils.lerp(1.5, 2.5, p);
      targetRotY = THREE.MathUtils.lerp(-Math.PI / 6, Math.PI / 4, p);
      targetScale = THREE.MathUtils.lerp(0.35, 0.25, p);
    } else if (progress < 0.75) {
      // Bento 2 -> Bento 3 (Experiential)
      const p = (progress - 0.5) / 0.25;
      targetX = THREE.MathUtils.lerp(-3, 3, p);
      targetY = THREE.MathUtils.lerp(-0.5, -1, p);
      targetZ = THREE.MathUtils.lerp(2.5, 2, p);
      targetRotY = THREE.MathUtils.lerp(Math.PI / 4, -Math.PI / 8, p);
      targetScale = THREE.MathUtils.lerp(0.25, 0.3, p);
    } else {
      // Bento 3 -> Footer (Instagram)
      const p = (progress - 0.75) / 0.25;
      targetX = THREE.MathUtils.lerp(3, 0, p);
      targetY = THREE.MathUtils.lerp(-1, 0, p);
      targetZ = THREE.MathUtils.lerp(2, 4, p);
      targetRotY = THREE.MathUtils.lerp(-Math.PI / 8, Math.PI * 2, p);
      targetScale = THREE.MathUtils.lerp(0.3, 0.5, p);
    }
    
    // Add continuous floating idle animation
    const time = performance.now() / 1000;
    targetY += Math.sin(time * 2) * 0.15;
    targetRotZ += Math.sin(time * 1) * 0.05;

    // Interpolate towards the target smoothly
    group.current.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.08);
    group.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);
    const targetQuaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(targetRotX, targetRotY, targetRotZ));
    group.current.quaternion.slerp(targetQuaternion, 0.08);
  });

  return (
    <group ref={group} scale={[0.5, 0.5, 0.5]}>
      {/* ═ Main Body ═ */}
      <RoundedBox args={[1.4, 1.4, 2.2]} radius={0.1} position={[0, 0, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#1f1f1f" roughness={0.8} metalness={0.2} />
      </RoundedBox>

      {/* ═ Back Battery Pack ═ */}
      <RoundedBox args={[1.3, 1.3, 0.6]} radius={0.05} position={[0, 0, -1.4]} castShadow receiveShadow>
        <meshStandardMaterial color="#111111" roughness={0.9} />
      </RoundedBox>
      <mesh position={[0, 0, -1.75]}>
        <boxGeometry args={[0.5, 0.8, 0.1]} />
        <meshStandardMaterial color="#050505" />
      </mesh>

      {/* ═ Top Handle ═ */}
      <group position={[0, 0.9, -0.2]}>
        {/* Vertical posts */}
        <mesh position={[0, 0, 0.6]} castShadow>
          <boxGeometry args={[0.2, 0.4, 0.2]} />
          <meshStandardMaterial color="#222" metalness={0.5} />
        </mesh>
        <mesh position={[0, 0, -0.6]} castShadow>
          <boxGeometry args={[0.2, 0.4, 0.2]} />
          <meshStandardMaterial color="#222" metalness={0.5} />
        </mesh>
        {/* Horizontal bar */}
        <RoundedBox args={[0.3, 0.2, 1.6]} radius={0.05} position={[0, 0.3, 0]} castShadow>
          <meshStandardMaterial color="#151515" roughness={0.9} />
        </RoundedBox>
      </group>

      {/* ═ Top Microphone ═ */}
      <group position={[0.4, 1.1, 0.6]} rotation={[0, 0, 0]}>
        <mesh castShadow rotation={[Math.PI/2, 0, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 1, 16]} />
          <meshStandardMaterial color="#0a0a0a" roughness={1} />
        </mesh>
        {/* Mic mount */}
        <mesh position={[0, -0.2, -0.2]}>
          <boxGeometry args={[0.05, 0.2, 0.1]} />
          <meshStandardMaterial color="#333" />
        </mesh>
      </group>

      {/* ═ Side Monitor (Flipped Out) ═ */}
      <group position={[-0.8, 0, 0]} rotation={[0, -Math.PI / 6, 0]}>
        <RoundedBox args={[0.1, 0.8, 1.2]} radius={0.02} castShadow>
          <meshStandardMaterial color="#111" roughness={0.7} />
        </RoundedBox>
        {/* Screen */}
        <mesh position={[-0.06, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <planeGeometry args={[1.1, 0.7]} />
          {/* Glowing screen effect */}
          <meshBasicMaterial color="#4488ff" />
        </mesh>
      </group>

      {/* ═ Lens Mount (Silver Ring) ═ */}
      <mesh position={[0, 0, 1.15]} rotation={[Math.PI/2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.55, 0.55, 0.1, 32]} />
        <meshStandardMaterial color="#aaaaaa" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* ═ Lens Barrel ═ */}
      <group position={[0, 0, 1.5]} rotation={[Math.PI/2, 0, 0]}>
        {/* Base barrel */}
        <mesh castShadow>
          <cylinderGeometry args={[0.5, 0.5, 0.6, 32]} />
          <meshStandardMaterial color="#181818" roughness={0.5} metalness={0.3} />
        </mesh>
        {/* Focus Ring */}
        <mesh position={[0, 0.4, 0]} castShadow>
          <cylinderGeometry args={[0.52, 0.52, 0.2, 32]} />
          <meshStandardMaterial color="#111" roughness={0.9} />
        </mesh>
        {/* Front element barrel */}
        <mesh position={[0, 0.6, 0]} castShadow>
          <cylinderGeometry args={[0.48, 0.48, 0.3, 32]} />
          <meshStandardMaterial color="#181818" />
        </mesh>
      </group>

      {/* ═ Matte Box (Front Hood) ═ */}
      <group position={[0, 0, 2.4]}>
        <mesh castShadow>
          <boxGeometry args={[1.6, 1.2, 0.4]} />
          <meshStandardMaterial color="#0a0a0a" roughness={0.9} />
        </mesh>
        {/* Hollow center for lens */}
        <mesh position={[0, 0, 0.21]}>
          <planeGeometry args={[1.5, 1.1]} />
          <meshStandardMaterial color="#000" />
        </mesh>
      </group>

      {/* ═ Lens Glass ═ */}
      <mesh position={[0, 0, 2.4]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.05, 32]} />
        <meshStandardMaterial color="#151b24" metalness={1} roughness={0.05} transparent opacity={0.9} />
      </mesh>
      {/* Reflection highlight layer */}
      <mesh position={[0, 0, 2.43]} rotation={[Math.PI/2, 0, 0]}>
        <sphereGeometry args={[0.4, 32, 32, 0, Math.PI*2, 0, Math.PI/4]} />
        <meshStandardMaterial color="#55aaff" metalness={0.8} roughness={0.1} transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>

      {/* ═ Red Recording Light ═ */}
      <mesh position={[0.6, 0.5, 1.1]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={2} />
      </mesh>
      
    </group>
  );
}

export default function Camera3DLayer() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: 100
    }}>
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 10, 5]} intensity={2.5} castShadow />
        <directionalLight position={[-5, -10, -5]} intensity={1} />
        <Environment preset="city" />
        
        <ScrollCamera />
      </Canvas>
    </div>
  );
}
