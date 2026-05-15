import React from "react";
import Db from "../assets/Databases.jpg";
import htmlcss from "../assets/HTML and CSS.jpg";
import network from "../assets/Network Security.jpg";

const certificates = [
  {
    src: Db,
    title: "Databases",
    desc: "Part of the Certiport IT Specialist Certification, this validates skills in database concepts, SQL, and data management.",
    link: "https://www.credly.com/badges/993c2c00-f114-4ee9-8725-17b823a3c661/public_url",
  },
  {
    src: htmlcss,
    title: "HTML and CSS",
    desc: "Demonstrates proficiency in structuring and styling modern web pages using HTML5 and CSS3 under the Certiport IT Specialist track.",
    link: "https://www.credly.com/badges/b89ba4c9-adf2-4434-b52c-32eb20876bdd/public_url",
  },
  {
    src: network,
    title: "Network Security",
    desc: "Covers essential cybersecurity concepts including network protection, encryption, and threat mitigation.",
    link: "https://www.credly.com/badges/9e248f68-908b-4e29-9ce5-deb080d2ca46/public_url",
  },
];

const Certificate = () => {
  return (
    <div className=" text-gray-900 py-24 ">
      {/* Header */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-28">
        Certifications
      </h2>

      <div className="space-y-28">
        {certificates.map((item, index) => {
          const isReverse = index % 2 !== 0;
          const isDark = index % 2 !== 0; // alternate background

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-24 px-6 py-16  ${
                isReverse ? "md:flex-row-reverse" : ""
              } ${isDark ? "bg-[#1e2a78]" : "bg-transparent"}`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-[85%] md:w-[75%]"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
                  />
                </a>
              </div>

              {/* Description */}
              <div className="w-full md:w-1/2 max-w-xl text-center md:text-left">
                <h3
                  className={`text-2xl md:text-3xl font-bold mb-4 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`text-lg leading-relaxed ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certificate;
