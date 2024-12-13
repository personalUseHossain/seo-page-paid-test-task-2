import Image from "next/image";
import SliderImage from "@/images/retailsProductions/1.jpg";
import SliderImage2 from "@/images/retailsProductions/2.jpg";
import SliderImage3 from "@/images/retailsProductions/3.jpg";
import SliderImage4 from "@/images/retailsProductions/4.jpg";
import SliderImage5 from "@/images/retailsProductions/5.jpg";
import SliderImage6 from "@/images/retailsProductions/6.jpg";
import SliderImage7 from "@/images/retailsProductions/7.jpg";
import SliderImage8 from "@/images/retailsProductions/8.jpg";
import SliderImage9 from "@/images/retailsProductions/9.jpg";
import FloatingDots from "./FloatingDots";

export default function RetailsProducts() {
  const items = [
    { imageSource: SliderImage, text: "Apparel & Fashion" },
    { imageSource: SliderImage2, text: "Health, Beauty & Cosmetics" },
    { imageSource: SliderImage3, text: "Footwear & Footgear" },
    { imageSource: SliderImage4, text: "Kids Products & Toys" },
    { imageSource: SliderImage5, text: "Consumer Electronics" },
    { imageSource: SliderImage6, text: "Home Goods & Décor" },
    { imageSource: SliderImage7, text: "Food Items, Beverages, and Alcohol" },
    { imageSource: SliderImage8, text: "Construction Materials & Tires" },
    { imageSource: SliderImage9, text: "Raw Materials" },
  ];

  return (
    <div className="py-12 bg-white relative">
      <h4 className="mb-8 text-3xl font-bold text-center text-primary">
        Key Retail Products
      </h4>
      <div className="relative max-w-screen-xl px-10 2xl:max-w-screen-2xl h-[600px] mx-auto flex rounded-2xl overflow-hidden">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-1 w-full h-full overflow-hidden cursor-pointer transition-all duration-500 flex justify-end items-center hover:grow-[8] lg:hover:grow-[4] rounded-lg relative"
          >
            <Image
              src={item.imageSource}
              alt={item.text}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="absolute inset-0 w-full h-full rounded-lg"
            />
            <span className="text-center w-full rotate-[-90deg] transition-all duration-500 uppercase text-white font-bold tracking-[.1em] text-[10px] absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-lg shadow-lg">
              {item.text}
            </span>
          </div>
        ))}
      </div>
      <FloatingDots />

    </div>
  );
}
