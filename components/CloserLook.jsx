'use client'

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SliderCard = ({ date, title, background }) => {
  return (
    <div
      className="relative bg-cover h-[500px] rounded-3xl p-10 flex flex-col justify-between "
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-20 rounded-3xl"></div>
      <p className="z-10 text-lg text-gray-100">{date}</p>
      <p
        className="z-10 text-3xl text-gray-100"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
      >
        {title}
      </p>
      <a href="#" className="z-10 text-gray-300 underline">
        Read the article
      </a>
    </div>
  );
};

export default function CloserLook() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: (
      <div className="custom-arrow prev-arrow">
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
    ),
    nextArrow: (
      <div className="custom-arrow next-arrow">
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const sliderData = [
    {
      date: "October 14, 2024",
      title: "Top 8 Benefits of Foreign Trade Zones",
      background: "https://i.ibb.co.com/F4Q5PNR/1.webp", // Replace with actual image URL
    },
    {
      date: "October 14, 2024",
      title: "Are Tariffs Truly Good for America?",
      background: "https://i.ibb.co.com/ynPrC7v/2.webp", // Replace with actual image URL
    },
    {
      date: "October 14, 2024",
      title: "EPA Approved Warehouse & 3PL Offers All the Benefits Of A FTZ",
      background: "https://i.ibb.co.com/3CtHsB1/3.webp", // Replace with actual image URL
    },
    {
      date: "October 14, 2024",
      title:
        "Unlocking Business Independence: Tri-Link Inc.'s Success Story in Suffolk County's Foreign Trade Zone",
      background: "https://i.ibb.co.com/r0ZRG1h/4.webp", // Replace with actual image URL
    },
    {
      date: "October 14, 2024",
      title: "How to Fast-Track Your FTZ Solution",
      background: "https://i.ibb.co.com/HpBZd0b/5.jpg", // Replace with actual image URL
    },
    {
      date: "October 14, 2024",
      title: "FTZ vs Bonded Warehouse",
      background: "https://i.ibb.co.com/3CtHsB1/3.webp", // Replace with actual image URL
    },
  ];

  return (
    <>
      <hr className="h-[3px]" />
      <div className="relative bg-white py-8 pb-20 mx-auto border-b-2 slider-container">
        <h4 className="my-8 text-primary mb-24 text-3xl text-center ">
          A Closer Look
        </h4>
        <Slider ref={sliderRef} {...settings}>
          {sliderData.map((ele, index) => {
            return (
              <div className="p-4" key={index}>
                <SliderCard date={ele.date} title={ele.title} background={ele.background} />
              </div>
            );
          })}
        </Slider>
        <div className="flex gap-5 justify-center w-full">
          <div
            className="custom-arrow prev-arrow"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div
            className="custom-arrow next-arrow"
            onClick={() => sliderRef.current.slickNext()}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
    </>
  );
}
