

'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FloatingDots from './FloatingDots';

export default function Logistic() {
  const circleRef = useRef(null); // Ref to the circle element
  const sectionRef = useRef(null); // Ref to the section you want to track
  
  const [isTopOfMiddle, setIsTopOfMiddle] = useState(true); // Default to true
  const [showText, setShowText] = useState(false); // State for controlling text visibility

  // Detect when scroll is at the top of the middle of the section
  useEffect(() => {
    if(typeof window !== undefined){
        const handleScroll = () => {
            const section = sectionRef.current;
            if (!section) return;
      
            // Get the section's position relative to the viewport
            const rect = section.getBoundingClientRect();
            
            // Get the middle of the section (top + height / 2)
            const sectionMiddle = rect.top + rect.height / 2;
            const viewportMiddle = window?.innerHeight / 2;
            
            // Log the middle of the section to debug
            console.log(sectionMiddle);
            
            // Check if the middle of the section is near the middle of the viewport
            if (Math.abs(sectionMiddle - viewportMiddle) > 500 && sectionMiddle < 900) {
              setIsTopOfMiddle(false); // We are at the top of the middle of the section
            } else {
              setIsTopOfMiddle(true); // Not at the top of the middle of the section
            }
          };
      
          window?.addEventListener('scroll', handleScroll);
      
          return () => {
            window?.removeEventListener('scroll', handleScroll);
          };
    }
  }, []);

  // Show the text with a delay once isTopOfMiddle is false
  useEffect(() => {
    if (!isTopOfMiddle) {
      const timeout = setTimeout(() => {
        setShowText(true); // Show the text after 1 second
      }, 1000); // 1-second delay
      return () => clearTimeout(timeout); // Cleanup timeout
    } else {
      setShowText(false); // Hide the text immediately when isTopOfMiddle is true
    }
  }, [isTopOfMiddle]);

  return (
    <div className="h-[200vh] flex justify-center items-start relative mb-20">
      {/* Sticky Circle */}
      <motion.div
        ref={circleRef}
        style={{
          background: isTopOfMiddle
            ? `#a0bcac`
            : "url(https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/Warehouse-Circle.png) center no-repeat",
          backgroundSize: 'cover',
        }}
        initial={{ right: "50%", top: "3rem", scale: 1 }} // Initial state
        animate={{
          right: isTopOfMiddle ? "0" : "100%", 
          top: isTopOfMiddle ? "3rem" : "13rem", 
          scale: isTopOfMiddle ? 1 : 1.5 
        }} // Animation based on scroll position
        transition={{ duration: 1 }} // Duration of the animation
        className="h-80 w-80 text-center rounded-full sticky top-5 z-10 mt-10"
      ></motion.div>

      {/* Text to show after scroll with a 1-second delay */}
      {!isTopOfMiddle && showText && (
        <div className='sticky top-52 z-10 text-right text-primary w-1/2 ml-10'>
          <h1 className='font-bold text-3xl'>Specializing in Efficient, Lower-Cost Transport of Key Retail Products</h1>
          <p>They say, “Money Makes the World Go Round,” but it’s actually Tri-Link’s global shipping and 3PL services, and the products we specialize in delivering efficiently with reduced duties and fees</p>
        </div>
      )}

      {/* Section to track */}
      <div
        ref={sectionRef}
        className="h-[100vh] flex justify-center items-center relative bg-red-400"
      >
        {/* This is an empty section used to track scroll position */}
      </div>
      <FloatingDots />

    </div>
  );
}
