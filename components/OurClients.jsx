
// "use client";

// import { useEffect, useRef } from "react";
// import TagCloud from "TagCloud";  // Importing TagCloud library
// import "@/styles/OurClients.css";

// export default function OurClients() {
//   const containerRef = useRef(null); // Reference for the tag cloud container

//   const logos = [
//     "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/American-Airlines-White.svg",
//     "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/Park-Street-White.svg",
//     "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/DLTrading-White.svg",
//     "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/Palm-Bay-International-White.svg",
//     "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/FellowesBrands-White.svg",
//     "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/American-Airlines-White.svg",
//     "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/American-Airlines-White.svg",
//     "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/Park-Street-White.svg",
//     "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/DLTrading-White.svg",
//     "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/Palm-Bay-International-White.svg",
//     "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/FellowesBrands-White.svg",
//     "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/American-Airlines-White.svg",
//   ];

//   useEffect(() => {
//     // Create the tag cloud items where each item is the logo URL as a string
//     const items = logos.map((logo, index) => {
//       return (
//         <img src={logo} alt="" />
//       )
//     });

//     // TagCloud options
//     const options = {
//       radius: 300,        // Adjust the radius of the cloud
//       maxSpeed: "slow",   // Adjust rotation speed
//       initSpeed: "slow",  // Initial speed of the rotation
//       keep: true,         // Keep items visible as they rotate
//       reverseDirection: false, // Disable mouse reversing of direction
//       useContainerInlineStyles: true,  // Use inline styles for the container
//       useItemInlineStyles: true,      // Use inline styles for each item
//       useHTML: true,                // Allow HTML content (for images)
//     };

//     // Initialize the TagCloud with the container reference and options
//     TagCloud(containerRef.current, items, options);

//     return () => {
//       // Cleanup if necessary when the component unmounts
//     };
//   }, [logos]);

//   return (
//     <>
//       <div className="bg-[#a3b4bd] h-[50vh]"></div>
//       <div className="bg-[#a3b4bd] py-12  h-fit overflow-hidden">
//         <div className="px-4 mx-auto lg:flex sm:max-w-full md:max-w-screen-md lg:max-w-7xl 2xl:max-w-screen-2xl">
//           <div className="w-full lg:w-1/2">
//             <div className="max-w-4xl p-8 mx-auto text-center lg:text-left rounded-xl">
//               <button className="px-8 py-1 my-12 text-sm text-black uppercase bg-white border border-black rounded-full">
//                 Our clients
//               </button>
//               <h2 className="mb-4 text-3xl font-bold text-white">
//                 Solving problems with <br />
//                 3PL and FTZ Solutions for the <br />
//                 <span className="font-bold text-brand-primary">
//                   Worlds Biggest Brands
//                 </span>
//               </h2>
//               <p className="w-3/5 mx-auto mb-6 text-base text-gray-600 lg:mx-0">
//                 Discover how our FTZ services streamline your import/export
//                 processes and reduce costs.
//               </p>
//               <div className="flex justify-center space-x-4 lg:justify-normal">
//                 <button className="px-8 py-3 text-white rounded-sm outline-none bg-brand-secondary hover:bg-white hover:text-[#50845e] bg-[#50845e]">
//                   SERVICES
//                 </button>
//                 <button className="px-6 py-2 text-gray-800 bg-white rounded-sm outline-none hover:bg-gray-100">
//                   TECHNOLOGY
//                 </button>
//               </div>
//             </div>
//           </div>
//           {/* Tag Cloud Container for logos */}
//           <div
//             ref={containerRef}
//             className="relative w-full lg:w-1/2 text-shpere mb-20"
//             style={{ height: "400px" }} // Ensuring proper size for the tag cloud
//           >
//             {/* This span will be populated by the TagCloud library */}
//             <span className="tagcloud"></span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }




"use client";

import { useEffect, useRef } from "react";
import TagCloud from "TagCloud";  // Importing TagCloud library
import "@/styles/OurClients.css";

export default function OurClients() {
  const containerRef = useRef(null); // Reference for the tag cloud container

  const logos = [
    "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/American-Airlines-White.svg",
    "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/Park-Street-White.svg",
    "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/DLTrading-White.svg",
    "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/Palm-Bay-International-White.svg",
    "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/FellowesBrands-White.svg",
    "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/American-Airlines-White.svg",
    "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/American-Airlines-White.svg",
    "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/Park-Street-White.svg",
    "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/DLTrading-White.svg",
    "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/Palm-Bay-International-White.svg",
    "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/FellowesBrands-White.svg",
    "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/American-Airlines-White.svg",
  ];

  useEffect(() => {
    // Create the tag cloud items where each item is the HTML string for the logo image
    const items = logos.map((logo, index) => {
      return `<img src="${logo}" alt="logo ${index + 1}" class="logo-item-img" />`;
    });

    // TagCloud options
    const options = {
      radius: 300,        // Adjust the radius of the cloud
      maxSpeed: "slow",   // Adjust rotation speed
      initSpeed: "slow",  // Initial speed of the rotation
      keep: true,         // Keep items visible as they rotate
      reverseDirection: false, // Disable mouse reversing of direction
      useContainerInlineStyles: true,  // Use inline styles for the container
      useItemInlineStyles: true,      // Use inline styles for each item
      useHTML: true,                // Allow HTML content (for images)
    };

    // Initialize the TagCloud with the container reference and options
    TagCloud(containerRef.current, items, options);

    return () => {
      // Cleanup if necessary when the component unmounts
    };
  }, [logos]);

  return (
    <>
      <div className="bg-[#a3b4bd] py-12  h-fit overflow-hidden flex flex-wrap gap-10 justify-center relative z-10">
        <div className="px-4 mx-auto lg:flex sm:max-w-full md:max-w-screen-md lg:max-w-7xl 2xl:max-w-screen-2xl">
          <div className="w-full lg:w-1/2">
            <div className="max-w-4xl mx-auto text-center lg:text-left rounded-xl">
              <button className="px-8 py-1 my-12 text-sm text-black uppercase bg-white border border-black rounded-full">
                Our clients
              </button>
              <h2 className="mb-4 text-3xl font-bold text-white">
                Solving problems with <br />
                3PL and FTZ Solutions for the <br />
                <span className="font-bold text-brand-primary">
                  Worlds Biggest Brands
                </span>
              </h2>
              <p className="w-3/5 mx-auto mb-6 text-base text-gray-600 lg:mx-0">
                Discover how our FTZ services streamline your import/export
                processes and reduce costs.
              </p>
              <div className="flex justify-center space-x-4 lg:justify-normal">
                <button className="px-8 py-3 text-white rounded-sm outline-none bg-brand-secondary hover:bg-white hover:text-[#50845e] bg-[#50845e]">
                  SERVICES
                </button>
                <button className="px-6 py-2 text-gray-800 bg-white rounded-sm outline-none hover:bg-gray-100">
                  TECHNOLOGY
                </button>
              </div>
            </div>
          </div>
          {/* Tag Cloud Container for logos */}
          <div
            ref={containerRef}
            className="relative w-full lg:w-1/2 text-shpere mb-20"
            style={{ height: "400px" }} // Ensuring proper size for the tag cloud
          >
            {/* This span will be populated by the TagCloud library */}
            <span className="tagcloud h-20 w-20"></span>
          </div>
        </div>
      </div>
    </>
  );
}
