'use client';

import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

function FluidLetter({ char, mouseX, mouseY }) {
  const ref = useRef(null);
  const letterX = useMotionValue(0);
  const letterY = useMotionValue(0);

  useEffect(() => {
    const updatePosition = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        letterX.set(rect.left + rect.width / 2);
        letterY.set(rect.top + rect.height / 2);
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition);
    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition);
    };
  }, [letterX, letterY]);

  // Calculate distance using an array of MotionValues
  const distance = useTransform(
    [mouseX, mouseY, letterX, letterY],
    ([mx, my, lx, ly]) => {
      // If mouse is offscreen initially
      if (mx === -1000) return 1000;
      const dx = mx - lx;
      const dy = my - ly;
      return Math.sqrt(dx * dx + dy * dy);
    }
  );

  // Mappings based on distance
  const maxDist = 200;
  
  // When close: move up, scale up, full opacity, slight rotation
  const targetY = useTransform(distance, [0, maxDist], [-15, 0], { clamp: true });
  const targetScale = useTransform(distance, [0, maxDist], [1.15, 1], { clamp: true });
  const targetOpacity = useTransform(distance, [0, maxDist], [1, 0.4], { clamp: true });
  const targetRotate = useTransform(
    [distance, mouseX, letterX],
    ([dist, mx, lx]) => {
      if (dist >= maxDist) return 0;
      // Rotate based on whether mouse is left or right of letter
      const sign = mx > lx ? -1 : 1;
      const intensity = (1 - dist / maxDist) * 10;
      return sign * intensity;
    }
  );

  // Apply spring physics for "fluid, gentle motion, soft easing"
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const y = useSpring(targetY, springConfig);
  const scale = useSpring(targetScale, springConfig);
  const opacity = useSpring(targetOpacity, springConfig);
  const rotate = useSpring(targetRotate, springConfig);

  return (
    <motion.span
      ref={ref}
      style={{
        display: 'inline-block',
        y,
        scale,
        opacity,
        rotate,
        transformOrigin: 'bottom center',
        whiteSpace: char === ' ' ? 'pre' : 'normal',
      }}
    >
      {char}
    </motion.span>
  );
}

export default function CursorFluidText({ text, className }) {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const words = text.split(' ');

  return (
    <h1 className={className} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {words.map((word, wIdx) => (
        <span key={wIdx} style={{ display: 'inline-flex', marginRight: wIdx !== words.length - 1 ? '0.4em' : '0' }}>
          {word.split('').map((char, cIdx) => (
            <FluidLetter key={cIdx} char={char} mouseX={mouseX} mouseY={mouseY} />
          ))}
        </span>
      ))}
    </h1>
  );
}
