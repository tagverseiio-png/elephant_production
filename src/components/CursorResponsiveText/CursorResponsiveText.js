'use client';
import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import styles from '@/app/page.module.css';

export default function CursorResponsiveText({ text }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 100 });

  const bgX = useTransform(smoothX, [-1, 1], ['20%', '80%']);
  const bgY = useTransform(smoothY, [-1, 1], ['20%', '80%']);
  const backgroundPosition = useTransform([bgX, bgY], ([x, y]) => `${x} ${y}`);

  return (
    <motion.h1 
      className={styles.heroTitle}
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200')",
        backgroundSize: "140%", // larger than 100% to allow panning
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        backgroundPosition
      }}
    >
      {text}
    </motion.h1>
  );
}
