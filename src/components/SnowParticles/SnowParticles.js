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
    
    const ctx = canvas.getContext('2d');
    let width = parent.offsetWidth;
    let height = parent.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const particles = [];
    const particleCount = 150;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2 + 0.5, // radius
        d: Math.random() * particleCount, // density
        vx: Math.random() * 1 - 0.5, // velocity x
        vy: Math.random() * 1 + 0.5, // velocity y
      });
    }

    let animationFrameId;

    function draw() {
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
        // 3D-like movement: sine wave for x, constant y, factoring in density
        p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
        p.x += Math.sin(angle) * 2;

        if (p.x > width + 5 || p.x < -5 || p.y > height) {
          if (i % 3 > 0) { // 66.67% of the flakes
            particles[i] = { x: Math.random() * width, y: -10, r: p.r, d: p.d };
          } else {
            // If the flake is exitting from the right
            if (Math.sin(angle) > 0) {
              particles[i] = { x: -5, y: Math.random() * height, r: p.r, d: p.d };
            } else {
              // If the flake is exitting from the left
              particles[i] = { x: width + 5, y: Math.random() * height, r: p.r, d: p.d };
            }
          }
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    const resizeObserver = new ResizeObserver(() => {
      width = parent.offsetWidth;
      height = parent.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    });

    resizeObserver.observe(parent);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.snowCanvas} />;
}
