import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagramSquare,
  faLinkedinIn,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialMedia() {
  return (
    <div className="bg-primary">
      <div className="items-center justify-between px-8 py-20 mx-auto lg:flex max-w-screen-2xl 2xl:px-0">
        <div className="flex flex-col items-center w-full mb-6 text-center lg:items-start lg:mb-0 lg:w-1/2">
          <img src={'https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/TriLink-Logo-White.svg'} alt="tri link" className="w-52" />
          <p className="mt-2 text-2xl font-normal text-gray-100">
            Keep in touch!
          </p>
        </div>
        {/* Social Icons Section */}
        <div className="flex justify-center w-full space-x-5 lg:justify-end lg:w-1/2">
          <a
            href="#"
            className="p-3 text-2xl text-gray-100 duration-200 ease-linear border border-gray-100 rounded-full h-12 w-12 flex justify-center hover:bg-gray-100 hover:text-primary broder"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="#"
            className="p-3 text-2xl text-gray-100 duration-200 ease-linear border border-gray-100 rounded-full h-12 w-12 flex justify-center hover:bg-gray-100 hover:text-primary broder"
          >
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
          <a
            href="#"
            className="p-3 text-2xl text-gray-100 duration-200 ease-linear border border-gray-100 rounded-full h-12 w-12 flex justify-center hover:bg-gray-100 hover:text-primary broder"
          >
            <FontAwesomeIcon icon={faInstagramSquare} />
          </a>
          <a
            href="#"
            className="p-3 text-2xl text-gray-100 duration-200 ease-linear border border-gray-100 rounded-full h-12 w-12 flex justify-center hover:bg-gray-100 hover:text-primary broder"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </div>
  );
}
