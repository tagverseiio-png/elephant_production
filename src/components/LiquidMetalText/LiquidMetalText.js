'use client';
import { useEffect, useRef } from 'react';
import styles from './LiquidMetalText.module.css';

export default function LiquidMetalText({ textLines }) {
  const svgRef = useRef(null);
  const lightRef = useRef(null);
  const turbulenceRef = useRef(null);
  const blobsRef = useRef([]);

  useEffect(() => {
    const svg = svgRef.current;
    const light = lightRef.current;
    const turbulence = turbulenceRef.current;
    if (!svg || !light || !turbulence) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let targetX = mouseX;
    let targetY = mouseY;
    let time = 0;

    const handleMouseMove = (e) => {
      const rect = svg.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Initialize blob physics
    const numBlobs = 20;
    const blobs = Array.from({ length: numBlobs }).map((_, i) => {
      const el = blobsRef.current[i];
      return {
        el,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        baseX: Math.random() * window.innerWidth,
        baseY: Math.random() * window.innerHeight,
        speed: Math.random() * 0.015 + 0.005,
        angle: Math.random() * Math.PI * 2,
        radius: Math.random() * 150 + 50
      };
    });

    let rafId;
    let isVisible = true;
    const render = () => {
      if (!isVisible) return;
      time += 0.01;
      
      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.08;
      mouseY += (targetY - mouseY) * 0.08;

      // Update specular light position (Parallax & metallic lighting)
      light.setAttribute('x', mouseX);
      light.setAttribute('y', mouseY);

      // Idle texture animation
      const baseFreqX = 0.015 + Math.sin(time * 0.5) * 0.005;
      const baseFreqY = 0.015 + Math.cos(time * 0.3) * 0.005;
      turbulence.setAttribute('baseFrequency', `${baseFreqX} ${baseFreqY}`);

      // Update gooey blobs
      blobs.forEach((b) => {
        b.angle += b.speed;
        
        // Organic floating
        b.x = b.baseX + Math.cos(b.angle) * 150;
        b.y = b.baseY + Math.sin(b.angle) * 150;
        
        // Liquid attraction to mouse
        const dx = mouseX - b.x;
        const dy = mouseY - b.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        
        if (dist < 400) {
           const pull = (400 - dist) / 400;
           b.x += dx * pull * 0.05;
           b.y += dy * pull * 0.05;
        }

        if (b.el) {
          b.el.setAttribute('cx', b.x);
          b.el.setAttribute('cy', b.y);
          b.el.setAttribute('r', b.radius + Math.sin(time * 2 + b.angle) * 20);
        }
      });

      if (isVisible) {
        rafId = requestAnimationFrame(render);
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          render();
        } else {
          cancelAnimationFrame(rafId);
        }
      });
    }, { threshold: 0 });
    
    observer.observe(svg);

    render();
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className={styles.container}>
      <svg ref={svgRef} className={styles.svg} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="gooey-metal" colorInterpolationFilters="sRGB">
            {/* Create gooey base */}
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="
              1 0 0 0 0  
              0 1 0 0 0  
              0 0 1 0 0  
              0 0 0 30 -12" result="goo" />
            
            {/* Add liquid texture noise */}
            <feTurbulence ref={turbulenceRef} type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
            <feDisplacementMap in="goo" in2="noise" scale="30" xChannelSelector="R" yChannelSelector="G" result="displacedGoo" />
            
            {/* Compute alpha for bump map/lighting */}
            <feGaussianBlur in="SourceAlpha" stdDeviation="5" result="alphaBlur" />
            <feDisplacementMap in="alphaBlur" in2="noise" scale="30" xChannelSelector="R" yChannelSelector="G" result="displacedAlpha" />
            
            {/* Add metallic specular highlight */}
            <feSpecularLighting in="displacedAlpha" surfaceScale="15" specularConstant="2.5" specularExponent="35" lightingColor="#ffe6cc" result="specular">
              <fePointLight ref={lightRef} x="500" y="500" z="250" />
            </feSpecularLighting>
            
            {/* Combine lighting with base colors */}
            <feComposite in="specular" in2="displacedGoo" operator="in" result="litGoo" />
            <feMerge>
              <feMergeNode in="displacedGoo" />
              <feMergeNode in="litGoo" />
            </feMerge>
          </filter>

          {/* Mask ensures metallic goo only appears inside text */}
          <mask id="text-mask">
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className={styles.textMask} fill="white">
              {textLines.map((line, i) => (
                <tspan key={i} x="50%" dy={i === 0 ? `-${(textLines.length - 1) * 0.6}em` : '1.2em'}>
                  {line}
                </tspan>
              ))}
            </text>
          </mask>
        </defs>

        <g mask="url(#text-mask)">
          {/* Base metallic background */}
          <rect width="100%" height="100%" fill="#1a1a1a" />
          
          {/* Animated liquid blobs */}
          <g filter="url(#gooey-metal)">
            {[...Array(20)].map((_, i) => (
              <circle 
                key={i} 
                ref={el => blobsRef.current[i] = el}
                r="100" 
                fill={i % 3 === 0 ? "#e6b380" : i % 2 === 0 ? "#b38659" : "#4a4a4a"} 
              />
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
}
