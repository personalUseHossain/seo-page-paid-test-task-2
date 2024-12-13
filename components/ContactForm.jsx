import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ContactForm()  {
  return (
    <div className="px-5 bg-white">
      <div className="items-center px-2 pt-10 mx-auto lg:flex max-w-screen-2xl">
        <div className="w-full lg:w-1/2">
          <h4 className="text-2xl text-center font-semibo lg:text-left ld lg:text-2xl text-primary">
            Get Started <br /> with a{" "}
            <span className="font-bold">Free Quote</span> <br /> or Consultation
          </h4>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="my-8">
            <p>Name *</p>
            <input
              type="text"
              placeholder="Name*"
              className="w-full py-1 border-b-2 border-primary lg:w-auto"
            />
            {/* <p className="Cmt-4">This is a required field.</p> */}
          </div>
          <div className="my-8">
            <p>Surname </p>
            <input
              type="text"
              placeholder="Surname"
              className="w-full py-1 border-b-2 border-primary lg:w-auto"
            />
          </div>
          <div className="my-8">
            <p>Email *</p>
            <input
              type="text"
              placeholder="Email *"
              className="w-full py-1 border-b-2 border-primary lg:w-auto"
            />
            {/* <p className="mt-4">This is a required field.</p> */}
          </div>
          <div className="w-full my-8">
            <p>Message *</p>
            <textarea
              rows={3}
              placeholder="Message *"
              id=""
              className="w-full py-1 border-b-2 border-primary"
            ></textarea>
            {/* <p className="mt-4">This is a required field.</p> */}
          </div>
          <div className="my-8">
            <button className="w-full py-6 text-xl font-semibold text-gray-100 uppercase rounded lg:w-auto px-28 bg-[#50845e]">
              Send
            </button>
            <div className="items-center mt-4 md:flex text-primary">
              <p>If you are a human seeing this field, please leave it empty</p>
              
            </div>
            <label className="flex items-center">
                <p className="text-primary">empty</p>
              <input
                type="text"
                className="w-full my-2 border-2 md:w-auto md:ml-2 border-primary"
              />
              </label>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl">
        <div className="text-gray-100 bg-[#50845e] lg:w-[200px] flex items-center justify-center py-4 lg:py-8 w-full">
          <div>
            <FontAwesomeIcon icon={faPhone} className="text-xl transform -rotate-90" />
          </div>
          <div className="ml-2 text-sm font-semibold text-center text-gray-100">
            <p>Reach out! </p>
            <span className="text-sm font-semibold text-gray-100">
              +1-888-487-7707
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

