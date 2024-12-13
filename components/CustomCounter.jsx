import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Counter({ initialValue, label, color, isVisible, onIntersect }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  // Reset and start counting when the element is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onIntersect(true); // Call the handler to mark as in view
          } else {
            onIntersect(false); // Mark as out of view
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [onIntersect]);

  // Counting logic
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < initialValue) return prevCount + 1;
          clearInterval(interval);
          return prevCount;
        });
      }, 30); // Adjust counting speed in milliseconds

      return () => clearInterval(interval);
    }
  }, [isVisible, initialValue]);

  return (
    <>
    <motion.section
      ref={counterRef}
      className={`flex justify-center items-end transition-all duration-500 h-screen ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        display: "flex",
        width: "100vw",
        justifyContent: "flex-end",
      }}
    >
      <motion.div
        style={{
          fontWeight: "bold",
          color: "white",
        }}
        initial={{ opacity: 0, y: 100 }} // Initial position from the bottom
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }} // Animate to original position
        exit={{ opacity: 0, y: 100 }} // Exit animation when the counter changes
        transition={{ duration: 0.5 }}
        className="p-5"
      >
        <motion.span className={`flex items-center ${color}`}>
          <span className="text-7xl 2xl:text-9xl">{count}</span>
          <span className="text-sm font-normal leading-7 w-24">{label}</span>
        </motion.span>
      </motion.div>
    </motion.section>
    </>

  );
}
