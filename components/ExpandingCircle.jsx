'use client';

import { useScroll, motion, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const ExpandingCircle = () => {
  const circleRef = useRef(null); // Ref to the circle element

  // Use framer-motion's useScroll hook to track scroll progress
  const { scrollYProgress } = useScroll({
    target: circleRef, // Track the scroll progress for the circle container
    offset: ["start 50%", "end 100%"], // Make sure the scaling happens as you scroll from top to bottom
  });

  // Use useTransform to map scrollYProgress to the scale value
  // Here, as scrollYProgress goes from 0 to 1, scale should go from 1 to 15
  const scale = useTransform(scrollYProgress, [0, .5, 1], [1, 2, 7]);
  // Use useTransform to map scrollYProgress to the color transition
  const backgroundColor = useTransform(
    scrollYProgress, 
    [0, 1], 
    ['#a0bcac', '#a3b4bd'] // Color fades from one to another as scroll progresses
  );

  return (
    <div ref={circleRef} className="h-[300vh] relative flex justify-center items-start"> {/* Ensure overflow visible to allow sticky behavior */}
      <motion.div
         // Use the circleRef for the scroll tracking
        style={{
          scale: scale, // Bind the scale to the scrollYProgress
          backgroundColor: backgroundColor, // Bind the background color to scrollYProgress
        }}
        transition={{ type: "spring", stiffness: 100, damping: 25 }} // Smooth transition for scaling
        className="h-72 w-72 text-center rounded-full sticky top-0 z-[1]"
      >
        {/* No text inside the circle */}
      </motion.div>
      <div className='h-[50vh] bg-white'></div>
    </div>
  );
};

export default ExpandingCircle;
