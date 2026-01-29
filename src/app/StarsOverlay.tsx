"use client";

import React, { useState, useEffect } from "react";

const STAR_COUNT = 150;
const WIDTH = 1920;
const HEIGHT = 900;

function randomBetween(a: number, b: number) {
  return Math.random() * (b - a) + a;
}

interface Star {
  cx: number;
  cy: number;
  r: number;
  opacity: number;
  duration: number;
  delay: number;
  isMoving?: boolean;
  startX?: number;
  startY?: number;
  endX?: number;
  endY?: number;
  moveDuration?: number;
  fadeOutStart?: number; // Porcentaje del camino donde comienza a desaparecer (0-100)
  fadeOutDuration?: number; // Duración del desvanecimiento en porcentaje
}

const StarsOverlay = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: STAR_COUNT }).map(() => {
      const isMoving = Math.random() < 0.40; // 60% de las estrellas se moverán
      let startX, startY, endX, endY, moveDuration;
      
      let fadeOutStart, fadeOutDuration;
      if (isMoving) {
        // Empezar desde la derecha superior (fuera del viewport)
        startX = randomBetween(WIDTH * 0.7, WIDTH + 100);
        startY = randomBetween(-50, HEIGHT * 0.3);
        // Terminar en la izquierda inferior (fuera del viewport)
        endX = randomBetween(-100, WIDTH * 0.3);
        endY = randomBetween(HEIGHT * 0.7, HEIGHT + 100);
        moveDuration = randomBetween(8, 15); // Duración del movimiento en segundos
        // Desvanecimiento aleatorio: algunas desaparecen en diferentes puntos del camino
        fadeOutStart = randomBetween(20, 80); // Comienza a desaparecer entre 20% y 80% del camino
        fadeOutDuration = randomBetween(10, 30); // Duración del desvanecimiento entre 10% y 30% del camino
      }
      
      return {
        cx: isMoving ? startX! : randomBetween(0, WIDTH),
        cy: isMoving ? startY! : randomBetween(0, HEIGHT),
        r: randomBetween(0.8, 2.2),
        opacity: isMoving ? randomBetween(0.4, 0.7) : randomBetween(0.12, 0.28), // Partículas en movimiento más visibles
        duration: randomBetween(2, 6),
        delay: randomBetween(0, 4),
        isMoving,
        startX,
        startY,
        endX,
        endY,
        moveDuration,
        fadeOutStart,
        fadeOutDuration,
      };
    });
    setStars(generatedStars);

    // Inyectar estilos para las animaciones de movimiento
    const styleId = 'star-move-animations';
    let styleElement = document.getElementById(styleId) as HTMLStyleElement;
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    // Generar keyframes para todas las estrellas en movimiento
    const movingStars = generatedStars.filter(star => star.isMoving);
    let keyframes = '';
    movingStars.forEach((star, i) => {
      const deltaX = star.endX! - star.startX!;
      const deltaY = star.endY! - star.startY!;
      const animationName = `star-move-${i}`;
      const fadeName = `star-fade-${i}`;
      const fadeOutStart = star.fadeOutStart!;
      const fadeOutEnd = Math.min(100, fadeOutStart + star.fadeOutDuration!);
      
      // Animación de movimiento
      keyframes += `
        @keyframes ${animationName} {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(${(deltaX / WIDTH) * 100}vw, ${(deltaY / HEIGHT) * 100}vh);
          }
        }
      `;
      
      // Animación de desvanecimiento
      keyframes += `
        @keyframes ${fadeName} {
          0% {
            opacity: ${star.opacity};
          }
          ${fadeOutStart}% {
            opacity: ${star.opacity};
          }
          ${fadeOutEnd}% {
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }
      `;
    });
    styleElement.textContent = keyframes;
  }, []);

  return (
    <>
      <svg className="pointer-events-none select-none absolute inset-0 z-40" width="100%" height="100%" viewBox={`0 0 ${WIDTH} ${HEIGHT}`} fill="none" style={{width: '100%', height: '100%'}}>
        {stars.filter(star => !star.isMoving).map((star, i) => (
          <circle
            key={`static-${i}`}
            cx={star.cx}
            cy={star.cy}
            r={star.r}
            fill="white"
            opacity={star.opacity}
            style={{
              filter: 'drop-shadow(0 0 4px #fff4) drop-shadow(0 0 1px #fff)',
              animation: `star-blink ${star.duration}s infinite`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </svg>
      {stars.filter(star => star.isMoving).map((star, i) => {
        const animationName = `star-move-${i}`;
        const fadeName = `star-fade-${i}`;
        return (
          <div
            key={`moving-${i}`}
            className="pointer-events-none select-none absolute z-40"
            style={{
              left: `${(star.startX! / WIDTH) * 100}%`,
              top: `${(star.startY! / HEIGHT) * 100}%`,
              width: `${star.r * 2}px`,
              height: `${star.r * 2}px`,
              animation: `star-blink ${star.duration}s infinite, ${animationName} ${star.moveDuration}s linear infinite, ${fadeName} ${star.moveDuration}s linear infinite`,
              animationDelay: `${star.delay}s`,
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                backgroundColor: 'white',
                opacity: star.opacity,
                filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.25)) drop-shadow(0 0 1px rgba(255, 255, 255, 1))',
              }}
            />
          </div>
        );
      })}
    </>
  );
};

export default StarsOverlay; 