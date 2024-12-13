"use client";

import React, { useEffect, useRef, useState } from "react";

const FloatingDots = ({ color = "#193444" }) => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [dots, setDots] = useState([]);

  useEffect(() => {
    if(typeof window !==undefined){
        const createDots = () => {
            const dotCount = 250; // Number of dots
            const newDots = [];
      
            for (let i = 0; i < dotCount; i++) {
              const x = Math.random() * window?.innerWidth;
              const y = Math.random() * window?.innerHeight;
              const size = Math.random() * 3 + 1; // Random size of dots
              const direction = Math.random() * Math.PI * 2; // Random movement direction
              newDots.push({
                x,
                y,
                size,
                direction,
                speed: Math.random() * 0.5 + 0.5, // Speed of floating
              });
            }
      
            setDots(newDots);
          };
      
          createDots();
      
          // Mouse move listener
          const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
          };
      
          window?.addEventListener("mousemove", handleMouseMove);
      
          // Cleanup the event listener
          return () => {
            window?.removeEventListener("mousemove", handleMouseMove);
          };
    }
  }, []);

  useEffect(() => {
    const moveDots = () => {
      const newDots = dots.map((dot) => {
        // Apply floating movement when mouse is not nearby
        const newDirection = dot.direction + (Math.random() - 0.5) * 0.1; // Slight random change in direction
        const newX = dot.x + Math.cos(newDirection) * dot.speed;
        const newY = dot.y + Math.sin(newDirection) * dot.speed;

        // Instant attraction to the mouse
        const distanceX = mousePos.x - dot.x;
        const distanceY = mousePos.y - dot.y;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
        const attractionStrength = 0.05; // Strength of attraction to cursor

        const followX = dot.x + distanceX * attractionStrength;
        const followY = dot.y + distanceY * attractionStrength;

        return {
          ...dot,
          x: newX + (followX - newX) * attractionStrength, // Move towards mouse with attraction strength
          y: newY + (followY - newY) * attractionStrength,
          direction: newDirection, // Update direction for floating
        };
      });

      setDots(newDots);
    };

    // Continuously move the dots
    const interval = setInterval(moveDots, 16); // ~60 FPS

    return () => clearInterval(interval);
  }, [dots, mousePos]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: -1, // Ensure the dots are in the background
        overflow: "hidden",
      }}
    >
      {dots.map((dot, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: `${dot.y}px`,
            left: `${dot.x}px`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            borderRadius: "50%",
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingDots;
