import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaLaravel,
  FaDatabase,
  FaPhp,
  FaPython,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";

const icons = [
  { Icon: FaHtml5, Text: "HTML" },
  { Icon: FaCss3Alt, Text: "CSS" },
  { Icon: FaReact, Text: "React JS" },
  { Icon: SiExpress, Text: "Express JS" },
  { Icon: FaLaravel, Text: "Laravel" },
  { Icon: FaDatabase, Text: "MySQL" },
  { Icon: IoLogoJavascript, Text: "JavaScript" },
  { Icon: RiTailwindCssFill, Text: "Tailwind CSS" },
  { Icon: FaPhp, Text: "PHP" },
  { Icon: FaPython, Text: "Python" },
];

const TechStack = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center mt-6">
      {icons.map(({ Icon, Text }, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 justify-center items-center w-34 h-34 bg-[#6366f1] text-white rounded-md shadow-md hover:scale-110 transition-transform duration-200"
        >
          <Icon size={60} />
          <p className="mt-2 text-center text-sm">{Text}</p>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
