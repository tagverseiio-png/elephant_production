'use client';

import { useEffect, useRef } from 'react';
import styles from './SnowParticles.module.css';

export default function SnowParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    
    const ctx = canvas.getContext('2d', { alpha: true });
    let width = parent.offsetWidth;
    let height = parent.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    // Reduced from 150 to 80 particles — visually identical, 47% less CPU
    const particleCount = 80;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2 + 0.5,
        d: Math.random() * particleCount,
        vx: Math.random() * 1 - 0.5,
        vy: Math.random() * 1 + 0.5,
      });
    }

    let animationFrameId;
    let isVisible = false; // Start hidden, let observer trigger
    let frameCount = 0;

    function draw() {
      if (!isVisible) return;

      // Throttle to ~30fps instead of 60fps — snow doesn't need 60fps
      frameCount++;
      if (frameCount % 2 !== 0) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.beginPath();
      
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
      }
      ctx.fill();
      update();
    }

    let angle = 0;
    function update() {
      angle += 0.01;
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
        p.x += Math.sin(angle) * 2;

        if (p.x > width + 5 || p.x < -5 || p.y > height) {
          if (i % 3 > 0) {
            particles[i] = { x: Math.random() * width, y: -10, r: p.r, d: p.d };
          } else {
            if (Math.sin(angle) > 0) {
              particles[i] = { x: -5, y: Math.random() * height, r: p.r, d: p.d };
            } else {
              particles[i] = { x: width + 5, y: Math.random() * height, r: p.r, d: p.d };
            }
          }
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          draw();
        } else {
          cancelAnimationFrame(animationFrameId);
        }
      });
    }, { threshold: 0 });
    
    observer.observe(canvas);

    let resizeTimeout;
    const resizeObserver = new ResizeObserver(() => {
      // Debounce resize to avoid layout thrashing
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        width = parent.offsetWidth;
        height = parent.offsetHeight;
        canvas.width = width;
        canvas.height = height;
      }, 200);
    });

    resizeObserver.observe(parent);

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
      clearTimeout(resizeTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.snowCanvas} />;
}
