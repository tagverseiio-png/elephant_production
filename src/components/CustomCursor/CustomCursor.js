'use client';

import { useEffect, useRef, useCallback } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const imgContainerRef = useRef(null);
  const imgRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const springPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);
  const isHovering = useRef(false);

  // Single rAF loop for cursor — no React re-renders
  const tick = useCallback(() => {
    // Ease the ring toward the cursor
    springPos.current.x += (pos.current.x - springPos.current.x) * 0.15;
    springPos.current.y += (pos.current.y - springPos.current.y) * 0.15;

    if (ringRef.current) {
      ringRef.current.style.transform = `translate3d(${springPos.current.x - 15}px, ${springPos.current.y - 15}px, 0)`;
    }
    if (dotRef.current) {
      dotRef.current.style.transform = `translate3d(${pos.current.x - 4}px, ${pos.current.y - 4}px, 0)`;
    }
    if (imgContainerRef.current) {
      imgContainerRef.current.style.transform = `translate3d(${springPos.current.x - 100}px, ${springPos.current.y - 100}px, 0)`;
    }

    rafId.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    const handleMove = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
    };

    const handleOver = (e) => {
      const target = e.target;
      const cursorImage =
        target.getAttribute('data-cursor-image') ||
        target.closest('[data-cursor-image]')?.getAttribute('data-cursor-image');

      if (cursorImage) {
        if (imgRef.current) imgRef.current.src = cursorImage;
        if (imgContainerRef.current) {
          imgContainerRef.current.style.opacity = '1';
          imgContainerRef.current.style.transform += ' scale(1)';
        }
        if (ringRef.current) ringRef.current.style.opacity = '0';
        if (dotRef.current) dotRef.current.style.opacity = '0';
        isHovering.current = true;
      } else if (isHovering.current) {
        if (imgContainerRef.current) imgContainerRef.current.style.opacity = '0';
        if (ringRef.current) ringRef.current.style.opacity = '1';
        if (dotRef.current) dotRef.current.style.opacity = '1';
        isHovering.current = false;
      }
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('mouseover', handleOver, { passive: true });

    // Start animation loop
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
      cancelAnimationFrame(rafId.current);
    };
  }, [tick]);

  return (
    <>
      <div ref={ringRef} className={styles.cursorRing} />
      <div ref={dotRef} className={styles.cursorDot} />
      <div ref={imgContainerRef} className={styles.cursorImageContainer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img ref={imgRef} alt="cursor image reveal" className={styles.cursorImage} />
      </div>
    </>
  );
}
