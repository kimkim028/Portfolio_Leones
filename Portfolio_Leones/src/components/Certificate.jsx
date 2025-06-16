import React from "react";
import Db from "../assets/Databases.jpg";
import htmlcss from "../assets/HTML and CSS.jpg";
import network from "../assets/Network Security.jpg";

const images = [
  { src: Db, alt: "Databases" },
  { src: htmlcss, alt: "HTML and CSS" },
  { src: network, alt: "Network Security" },
];

const Certificate = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-12 bg-gray-900 text-white">
      {images.map((image, index) => (
        <div
          key={image.alt}
          className={`flex flex-col items-center justify-center w-full h-auto p-6 bg-gray-800 rounded-lg shadow-lg ${
            index === 2 ? "md:col-span-2 md:mx-auto" : ""
          }`}
        >
          {/* <h3 className="text-xl font-semibold mb-4 text-center">
            {image.alt}
          </h3> */}
          <img
            src={image.src}
            alt={image.alt}
            className="w-[70%] md:w-[60%] h-auto rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default Certificate;
