"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function Feauter() {
  const services = [
    { title: "Cost-Saving FTZ Fulfillment" },
    { title: "Unmatched FDA/EPA Approved Relabeling" },
    { title: "World-Class Warehouse Services" },
    { title: "Efficient 3PL Services" },
  ];

  const [screenWidth, setScreenWidth] = useState(typeof window !== undefined && window?.innerWidth);
  const [isMerged, setIsMerged] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    if(typeof window !== undefined){
        const handleResize = () => setScreenWidth(window?.innerWidth);

        const handleScroll = () => {
          const section = document.getElementById("featureSection");
          if (section) {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.offsetHeight;
            const viewportHeight = window?.innerHeight;
    
            // Calculate scroll progress relative to the section's bottom
            const sectionProgress =
              1 -
              Math.min(
                Math.max(
                  (sectionTop + sectionHeight - viewportHeight) /
                    (viewportHeight / 2),
                  0
                ),
                1
              );
    
            // Set scroll progress and trigger merge animation when user scrolls closer to the bottom of the section
            setScrollProgress(sectionProgress);
            const mergeThreshold = screenWidth <= 768 ? 0.1 : 0.01; // Larger threshold for smaller devices
    
    setIsMerged(sectionProgress > mergeThreshold);
            // setIsMerged(sectionProgress > 0.01); // Adjust this value to control when merge happens
          }
        };
    
        if (isMerged) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
    
        window?.addEventListener("resize", handleResize);
        window?.addEventListener("scroll", handleScroll);
    
        handleScroll(); // Initial check
    
        return () => {
          window?.removeEventListener("resize", handleResize);
          window?.removeEventListener("scroll", handleScroll);
        };
    }
  }, []);

  const serviceTransforms = [
    { x: screenWidth <= 1280 ? -450 : -550 },
    { x: screenWidth <= 1280 ? -150 : -180 },
    { x: screenWidth <= 1280 ? 150 : 180 },
    { x: screenWidth <= 1280 ? 450 : 550 },
  ];

  // Scaling logic based on scroll progress
  const scale = useSpring(scrollProgress * 50, { stiffness: 50, damping: 20 });

  const dynamicScale = scale.canTrackVelocity ? (scrollProgress * 60) / 2 : 1;

  return (
    <>
      <div id="featureSection" className="bg-white">
        <div
          style={{ maxWidth: "100vw", overflow: "hidden" }}
          className="h-[100vh] lg:h-[180vh] 2xl:h-[180vh]"
        >
          <div className="grid h-[100vh] relative items-center justify-center w-full z-10">
            <h2 className="text-4xl font-thin text-center text-[#1A3647]">
              Worldwide Transport, Simplified
            </h2>

            {/* Four circles in a single row */}
            <div className="flex justify-center h-full">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="absolute flex items-center justify-center text-center text-white bg-primary rounded-full w-[20vw] h-[20vw] mr-5"
                  initial={serviceTransforms[index]}
                  animate={
                    isMerged ? { x: 0, scale: 1 } : serviceTransforms[index]
                  }
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.p
                    className="p-4 font-thin lg:text-xl"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isMerged ? 0 : 1 }}
                  >
                    {service.title}
                  </motion.p>
                </motion.div>
              ))}
            </div>

            {/* Single circle (to show when merged) */}
            <motion.div
              style={{
                opacity: 1,
                scale: dynamicScale, // Directly use scale here for the circle
                position: "absolute",
                top: "60%", // Center the circle
                left: "46%",
                transform: "translate(-50%, -50%)", // Ensure it's centered
                width: 100, // Apply the scale to the width
                height: 100, // Apply the scale to the height
              }}
              className="bg-primary rounded-full z-10"
            />
          </div>
        </div>
      </div>
      <div className="bg-primary h-[70vh] w-full"></div>
    </>
  );
}
