'use client';

import React, { useRef, useEffect } from 'react';

export default function StarfieldBackground({
  starCount = 400,
  maxShiftPx = 5,
  trailOpacity = 0.15,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const newStar = () => {
      const depth = Math.random();
      return {
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        depth,
        size: depth < 0.3 ? 1 : depth < 0.6 ? 1.5 : 2,
      };
    };

    resize();
    window.addEventListener('resize', resize);

    const stars = Array.from({ length: starCount }, newStar);

    let targetX = 0;
    let targetY = 0;
    const onPointerMove = (e) => {
      const xRatio = (e.clientX / width - 0.5) * 2;
      const yRatio = (e.clientY / height - 0.5) * 2;
      targetX = xRatio * maxShiftPx;
      targetY = yRatio * maxShiftPx;
    };
    window.addEventListener('pointermove', onPointerMove);

    let backgroundImage = new Image();
    backgroundImage.src = '/images/nebula_20.png'; // Place your nebula image in public/

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      if (backgroundImage.complete) {
        ctx.globalAlpha = 0.4;
        ctx.drawImage(backgroundImage, 0, 0, width, height);
        ctx.globalAlpha = 1.0;
      }

      ctx.fillStyle = `rgba(0, 0, 0, ${trailOpacity})`;
      ctx.fillRect(0, 0, width, height);

      for (const s of stars) {
        ctx.globalAlpha = 0.35 + 0.65 * s.depth;
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = 2 + s.depth * 4;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(
          s.baseX + targetX * s.depth,
          s.baseY + targetY * s.depth,
          s.size,
          s.size
        );
        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, [starCount, maxShiftPx, trailOpacity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 block pointer-events-none"
      style={{ backgroundColor: 'transparent' }}
      aria-hidden="true"
    />
  );
}
