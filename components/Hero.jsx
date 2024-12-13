"use client";

import React, { useEffect, useRef, useState } from "react";
import "@/styles/Hero.css";
import HeroSectionImage from "@/images/hero-bg.webp";
import Image from "next/image";

export default function Hero() {
  const [scales, setScales] = useState([1, 1, 1, 1]); // State to store scale of each word
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Mouse position

  const heroSectionRef = useRef(null);

  // Event handler for mouse movement
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setPosition({ x: clientX, y: clientY });

    const words = document.querySelectorAll(".hero-top-text h1 span");
    const distances = [];

    words.forEach((word, index) => {
      const { left, top, width, height } = word.getBoundingClientRect();

      // Calculate the center of the word
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      // Calculate the distance from the mouse cursor to the word
      const distance = Math.sqrt(
        Math.pow(clientX - centerX, 2) + Math.pow(clientY - centerY, 2)
      );

      distances.push(distance);
    });

    // Find the closest word index
    const closestIndex = distances.indexOf(Math.min(...distances));

    // Set scale and margin only for the closest word
    const newScales = distances.map((distance, index) => {
      // Define scaling factor: only the closest word scales up
      if (index === closestIndex) {
        const scaleFactor = Math.max(1, Math.min(1.2, 1 + (1 - distance / 300))); // Scale based on distance, max 1.2
        return scaleFactor;
      }
      return 1; // All other words remain at scale 1
    });

    setScales(newScales);
  };

  // Add event listener when the component mounts
  useEffect(() => {
    heroSectionRef.current.addEventListener("mousemove", handleMouseMove);

    // Clean up event listener when the component unmounts
    return () => {
      heroSectionRef.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Image
        className="hero-section-image"
        src={HeroSectionImage}
        alt="Hero section image"
      />
      <div className="hero h-[100vh] flex flex-col justify-center items-start gap-32" ref={heroSectionRef}>
        <div className="hero-top-text">
          <h1 className="text-primary font-bold text-6xl">
            <span
              style={{
                transform: `scale(${scales[0]})`,
                marginRight: `${scales[0] > 1 ? 25 : 0}px`,
              }}
            >
              EMPOWER
            </span>
            &nbsp;
            <span
              style={{
                transform: `scale(${scales[1]})`,
                marginLeft: `${scales[1] > 1 ? 20 : 0}px`,
                marginRight: `${scales[1] > 1 ? 20 : 0}px`,
              }}
            >
              YOUR
            </span>
            &nbsp;
            <span
              style={{
                transform: `scale(${scales[2]})`,
                marginLeft: `${scales[2] > 1 ? 20 : 0}px`,
                marginRight: `${scales[2] > 1 ? 20 : 0}px`,
              }}
            >
              GLOBAL
            </span>
            &nbsp;
            <span
              style={{
                transform: `scale(${scales[3]})`,
                marginLeft: `${scales[3] > 1 ? 20 : 0}px`,
              }}
            >
              TRADE
            </span>
          </h1>
          <p className="font-[100] text-primary mt-1 tracking-widest text-xl">
            with high-efficiency and FTZ solutions
          </p>
        </div>
        <div className="justify-items-end w-[90vw]">
          <div className="flex flex-col justify-center items-center gap-3">
            <p className="text-primary">
              Scroll more <br /> & explore!
            </p>
            <img
              src="https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/Arow-Down-Icon.svg"
              alt="Scroll button animation"
              height={40}
              width={40}
            />
          </div>
        </div>
      </div>
    </>
  );
}

