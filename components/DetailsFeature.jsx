"use client";

import React, { useState, useEffect } from "react";
import ServiceTextureImage from "@/images/service-page-texture.jpeg";
import Image from "next/image";
import Counter from "./CustomCounter";

export default function DetailsFeature() {
  const data = [
    { value: 80, label: "Average Number Of Clients", color: "text-white" },
    {
      value: 95,
      label: "% Rate of orders completed on time",
      color: "text-gray-500",
    },
    {
      value: 76,
      label: "% Warehouse capacity utilization rate",
      color: "text-[#a8bcac]",
    },
  ];

  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    console.log(visibleIndexes);
  }, [visibleIndexes]);

  // IntersectionObserver callback to handle visibility
  const handleIntersection = (index, isVisible) => {
    setVisibleIndexes((prev) => {
      if (isVisible && !prev.includes(index)) {
        return [...prev, index]; // Add index if it becomes visible
      }
      if (!isVisible && prev.includes(index)) {
        return prev.filter((i) => i !== index); // Remove index if it goes out of view
      }
      return prev;
    });
  };

  useEffect(() => {
    // Initialize the intersection observer
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the element is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.dataset.index); // Get index from the data-index attribute
        handleIntersection(index, entry.isIntersecting); // Call the handler
      });
    }, options);

    // Target all divs that need to be observed
    const divs = document.querySelectorAll(".track-div");
    divs.forEach((div) => observer.observe(div));

    return () => observer.disconnect(); // Clean up the observer on component unmount
  }, []);

  return (
    <div>
      <div className="z-20 2xl:-mt-[500px] bg-primary pb-20 relative">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 rounded-lg">
              <h3 className="mb-4 text-2xl font-semibold text-center text-gray-100 lg:text-3xl">
                Cost-Saving FTZ Fulfillment
              </h3>
              <p className="text-center text-gray-100">
                Using our top-tier 3PL warehouses within Free Trade Zones, you
                can substantially reduce or eliminate taxes, duties, and trade
                fees, elevating your bottom line.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <h3 className="mb-4 text-2xl font-semibold text-center text-gray-100 lg:text-3xl">
                Unmatched FDA/EPA Approved Relabeling
              </h3>
              <p className="text-center text-gray-100">
                Tri-Link is the only Environmental Protection Agency (EPA)
                approved labeling facility, offering unparalleled FDA approved
                re-labeling of products.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <h3 className="mb-4 text-2xl font-semibold text-center text-gray-100 lg:text-3xl">
                World-Class Warehouse Services
              </h3>
              <p className="text-center text-gray-100">
                Our cutting-edge facilities with best-in-class security & 24/7
                monitoring meet the highest federal standards, so you can have
                peace of mind that your shipment is safe and secure.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <h3 className="mb-4 text-2xl font-semibold text-center text-gray-100 lg:text-3xl">
                Efficient 3PL Services
              </h3>
              <p className="text-center text-gray-100">
                Streamline your supply chain with seamless global transport,
                strategically placed entry points, inventory management,
                fulfillment, and distribution
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary pt-72">
        <p
          className="sticky top-0 w-full px-5 pt-20 mx-auto text-2xl text-center text-gray-200 lg:px-44 2xl:px-[30rem] md:px-10 lg:text-4xl bg-brand-primary"
          style={{
            zIndex: 10,
            paddingBottom: '3rem'
          }}
        >
          3PL and FTZ{" "}
          <span className="font-bold text-[#50845e]">
            logistic solutions
          </span>{" "}
          to Optimize Your Operations, Streamline Transportation, and Link You
          with Your Customers
        </p>
        
        <div className="h-[300vh] flex flex-col justify-between">
        {data.map((item, index) => (
          <div key={index}>
              <Counter
                key={index}
                initialValue={item.value}
                label={item.label}
                color={item.color}
                onIntersect={(isVisible) => handleIntersection(index, isVisible)}
                isVisible={visibleIndexes.includes(index)} // Check visibility from array
              />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
