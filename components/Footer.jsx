'use client'

import { faFacebookF, faInstagramSquare, faLinkedinIn, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Footer ()  {
  const [menuItems] = useState({
    general: [
      { name: "Service", link: "#" },
      { name: "Warehouse", link: "#" },
      { name: "Industries", link: "#" },
      { name: "Technology", link: "#" },
      { name: "About Us", link: "#" },
      { name: "Contact", link: "#" },
      { name: "Privacy Policy", link: "#" },
    ],
    services: [
      { name: "Third Party Logistic (3PL)", link: "#" },
      { name: "Foreign Trade Zone (FTZ)", link: "#" },
      { name: "Handling & Relabeling", link: "#" },
      { name: "Documentation", link: "#" },
      { name: "Compliance", link: "#" },
    ],
  });

  return (
    <>
    <footer className="px-5 py-10 text-primary bg-white border-b border-primary">
      <div className="justify-between mx-auto md:flex max-w-screen-2xl">
        {/* Left Section */}
        <div className="w-full md:w-4/12">
          <div className="flex flex-col items-start md:w-3/4 justify-left">
            <img src={'https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/Logo.png'} alt="Tri Link" className="mx-auto max-w-64" />
            <p className="my-2 mt-2 lg:text-center">
              Tri Link delivers exceptional FTZ and 3PL services tailored to
              your global trade needs.
            </p>
            <p className="mt-2 mb-2 lg:text-center">
              Our solutions combine innovation, quality, and efficiency to
              exceed your expectations and meet your specific requirements.
            </p>
          </div>
        </div>

        {/* Middle Section (General Links) */}
        <div className="w-full md:w-2/12">
          <h3 className="text-2xl font-semibold">General</h3>
          <ul className="mt-3 space-y-2">
            {menuItems.general.map((item, index) => (
              <li key={index} className="py-2">
                <a
                  href={item.link}
                  className="text-lg"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section (Services Links) */}
        <div className="w-full md:w-2/12">
          <h3 className="text-2xl font-semibold">
            Services
          </h3>
          <ul className="mt-3 space-y-2">
            {menuItems.services.map((item, index) => (
              <li key={index} className="py-2">
                <a
                  href={item.link}
                  className="text-lg"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Call Us Section */}
        <div className="w-full mt-6 md:w-auto ">
          <h3 className="text-2xl font-semibold">
            Call Us!
          </h3>
          <div className="mt-3 space-y-1">
            <p className="text-lg">
              +1-888-487-7707
            </p>
            <p className="text-lg">
              in California: +1-562-280-7200
            </p>
            <p className="text-lg">
              in Florida: +1-786-249-7200
            </p>
            <p className="text-lg">
              in New York: +1-631-737-7500
            </p>
          </div>
        </div>
      </div>

      <div className="items-center justify-between mx-auto lg:flex max-w-screen-2xl">
        <div className="mt-10 text-lg font-semibold text-center">
          <p>Empowering Your Global Trade</p>
        </div>
        {/* Social Icons Section */}
        <div className="flex justify-center mt-8 space-x-5">
          <a
            href="#"
            className="p-3 text-2xl duration-200 ease-linear border rounded-full h-12 w-12 flex justify-center hover:text-white broder border-primary hover:bg-primary"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="#"
            className="p-3 text-2xl duration-200 ease-linear border rounded-full h-12 w-12 flex justify-center hover:text-white broder border-primary hover:bg-primary"
          >
            <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
          <a
            href="#"
            className="p-3 text-2xl duration-200 ease-linear border rounded-full h-12 w-12 flex justify-center hover:text-white broder border-primary hover:bg-primary"
          >
            <FontAwesomeIcon icon={faInstagramSquare} />
            </a>
          <a
            href="#"
            className="p-3 text-2xl duration-200 ease-linear border rounded-full h-12 w-12 flex justify-center hover:text-white broder border-primary hover:bg-primary"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
        </div>
      </div>
    </footer>
    <div className="flex items-center justify-between px-5 mx-auto my-8 max-w-screen-2xl text-primary bg-white">
    <span className="text-lg">© Tri-Link FTZ 2024, All Rights Reserved</span>
    <span className="text-lg">WEBSITE BY VIBE BRANDING</span>
  </div>
  </>
  );
};

