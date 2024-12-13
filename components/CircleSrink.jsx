
// 'use client';

// import { useScroll, motion, useTransform } from 'framer-motion';
// import React, { useRef, useState, useEffect } from 'react';

// const CircleShrink = () => {
//   const circleRef = useRef(null); // Ref to the circle element
//   const [isTextVisible, setIsTextVisible] = useState(false);

//   // Use framer-motion's useScroll hook to track scroll progress
//   const { scrollYProgress } = useScroll({
//     target: circleRef, // Track the scroll progress for the circle container
//     offset: ["start 80%", "end center"], // Start shrinking earlier when the circle reaches 80% of the screen height
//   });

//   // Use useTransform to map scrollYProgress to the scale value
//   const scale = useTransform(scrollYProgress, [0, 0.1, 0.9], [15, 5, 1]); // Shrink more slowly to scale 1

//   // Show text when the scale reaches 1
//   const opacity = useTransform(scale, [1], [1]); // Text becomes visible when scale reaches 1

//   // Monitor scale value using onChange
//   useEffect(() => {
//     const unsubscribe = scale.onChange((latest) => {
//       // This runs every time the scale value updates
//       if (latest === 1) {
//         setIsTextVisible(true); // Show text when scale reaches 1
//       } else {
//         setIsTextVisible(false); // Hide text if not at scale 1
//       }

//       // Debugging the scale value
//       console.log('Scale:', latest);
//     });

//     // Clean up the listener when the component is unmounted
//     return () => unsubscribe();
//   }, [scale]);

//   return (
//     <div className="h-[200vh] flex justify-center overflow-visible"> {/* Ensure no overflow hidden on parent */}
//       {/* Motion Div for scaling */}
//       <div className='w-[100vw] overflow-hidden'>
//       <motion.div
//         ref={circleRef} // Use the circleRef for the scroll tracking
//         style={{
//           scale: scale, // Bind the scale to the scrollYProgress
//         }}
//         transition={{ type: "spring", stiffness: 100, damping: 25 }} // Smooth transition for scaling
//         className="h-80 w-80 text-center rounded-full bg-[#a3b4bd] sticky top-[25rem] bottom-20 z-[-1]"
//       >
//         {/* Circle content */}
//         {isTextVisible && (
//           <motion.div
//             className="absolute inset-0 flex items-center justify-center text-sm text-white"
//             style={{ opacity: opacity }} // Fade in the text when scale reaches 1
//           >
//             Ready to Simplify Logistics and Reduce Costs with World-Class 3PL and FTZ Solutions?
//           </motion.div>
//         )}
//       </motion.div>
//       </div>
//     </div>
//   );
// };

// export default CircleShrink;



'use client';

import { useScroll, motion, useTransform } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';

const CircleShrink = () => {
  const circleRef = useRef(null); // Ref to the circle element
  const [isTextVisible, setIsTextVisible] = useState(false);

  // Use framer-motion's useScroll hook to track scroll progress
  const { scrollYProgress } = useScroll({
    target: circleRef, // Track the scroll progress for the circle container
    offset: ["start 80%", "end center"], // Start shrinking earlier when the circle reaches 80% of the screen height
  });

  // Use useTransform to map scrollYProgress to the scale value
  const scale = useTransform(scrollYProgress, [0.5, 0.8, 1], [10, 5, 1]); // Shrink more slowly to scale 1

  // Show text when the scale reaches 1
  const opacity = useTransform(scale, [1], [1]); // Text becomes visible when scale reaches 1

  // Monitor scale value using onChange
  useEffect(() => {
    const unsubscribe = scale.onChange((latest) => {
      // This runs every time the scale value updates
      if (latest === 1) {
        setIsTextVisible(true); // Show text when scale reaches 1
      } else {
        setIsTextVisible(false); // Hide text if not at scale 1
      }

      // Debugging the scale value
      console.log('Scale:', latest);
    });

    // Clean up the listener when the component is unmounted
    return () => unsubscribe();
  }, [scale]);

  return (
    <div className="h-[200vh] flex justify-center"> {/* Remove overflow-hidden to keep the sticky working */}
      {/* Motion Div for scaling */}
      <motion.div
        ref={circleRef} // Use the circleRef for the scroll tracking
        style={{
          scale: scale, // Bind the scale to the scrollYProgress
        }}
        transition={{ type: "spring", stiffness: 100, damping: 25 }} // Smooth transition for scaling
        className="h-80 w-80 text-center rounded-full bg-[#a3b4bd] sticky top-[25rem] z-[-1]"
      >
        {/* Circle content */}
        {isTextVisible && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-sm text-white"
            style={{ opacity: opacity }} // Fade in the text when scale reaches 1
          >
            Ready to Simplify Logistics and Reduce Costs with World-Class 3PL and FTZ Solutions?
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default CircleShrink;
