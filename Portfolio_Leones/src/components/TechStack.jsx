import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaLaravel,
  FaDatabase,
  FaPhp,
  FaPython,
  FaNodeJs,
  FaWordpress,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";

const TechStack = () => {
  const techItems = [
    { Icon: FaHtml5, name: "HTML5", color: "#E34C26" },
    { Icon: FaCss3Alt, name: "CSS3", color: "#264DE4" },
    { Icon: IoLogoJavascript, name: "JavaScript", color: "#F7DF1E" },
    { Icon: FaReact, name: "React", color: "#61DAFB" },
    { Icon: SiExpress, name: "Express", color: "#000000" },
    { Icon: FaLaravel, name: "Laravel", color: "#FF2D20" },
    { Icon: FaDatabase, name: "MySQL", color: "#4479A1" },
    { Icon: FaPhp, name: "PHP", color: "#777BB4" },
    { Icon: FaPython, name: "Python", color: "#FFD700" },
    { Icon: FaNodeJs, name: "Node.js", color: "#339933" },
    { Icon: RiTailwindCssFill, name: "Tailwind", color: "#06B6D4" },
    { Icon: FaWordpress, name: "WordPress", color: "#21759B" },
    { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  ];

  const renderItems = (prefix = "") =>
    techItems.map((item, index) => (
      <div
        key={`${prefix}-${index}`}
        className="flex-shrink-0 flex flex-col items-center justify-center mx-6 md:mx-10 group"
      >
        {/* Icon Box */}
        <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center relative">
          {/* Glass background */}
          <div className="absolute inset-0 rounded-2xl bg-black/2 backdrop-blur-md border border-white/10" />

          {/* Hover glow */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-white/10 blur-xl transition-all duration-300" />

          {/* Icon */}
          <div className="relative z-10 flex items-center justify-center">
            <item.Icon
              size={80}
              className="transition-all duration-300 group-hover:scale-125 drop-shadow-2xl"
              style={{ color: item.color }}
            />
          </div>
        </div>

        {/* Label */}
        <span className="mt-3 text-gray-700 text-base md:text-lg font-semibold text-center">
          {item.name}
        </span>
      </div>
    ));

  return (
    <div className="w-full overflow-hidden  py-16 md:py-20">
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f5f5f5] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f5f5f5] to-transparent z-10 pointer-events-none" />

        {/* Marquee */}
        <div className="flex animate-marquee whitespace-nowrap px-4">
          {renderItems("original")}
          {renderItems("duplicate")}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
