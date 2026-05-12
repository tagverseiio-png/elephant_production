'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const [hoverImageSrc, setHoverImageSrc] = useState('');

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const cursorImage = target.getAttribute('data-cursor-image') || target.closest('[data-cursor-image]')?.getAttribute('data-cursor-image');
      
      if (cursorImage) {
        setHoverImageSrc(cursorImage);
        setIsHoveringImage(true);
      } else {
        setIsHoveringImage(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className={`${styles.cursorRing} ${isHoveringImage ? styles.hideRing : ''}`}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      <motion.div
        className={`${styles.cursorDot} ${isHoveringImage ? styles.hideDot : ''}`}
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
      
      <motion.div
        className={styles.cursorImageContainer}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: isHoveringImage ? 1 : 0, 
          opacity: isHoveringImage ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        {hoverImageSrc && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={hoverImageSrc} alt="cursor image reveal" className={styles.cursorImage} />
        )}
      </motion.div>
    </>
  );
}
