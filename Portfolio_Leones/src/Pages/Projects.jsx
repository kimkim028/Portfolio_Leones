import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Zoo_1 from "../assets/Zoo_1.png";
import Zoo_2 from "../assets/Zoo_2.png";
import Zoo_3 from "../assets/Zoo_3.png";
import Zoo_4 from "../assets/Zoo_4.png";
import Zoo_5 from "../assets/Zoo_5.png";

import Chatbot_1 from "../assets/Chatbot_1.png";
import Chatbot_2 from "../assets/Chatbot_2.png";
import Chatbot_3 from "../assets/Chatbot_3.png";

import Car_1 from "../assets/Car_Mern 1.png";
import Car_2 from "../assets/Car_Mern 2.png";
import Car_3 from "../assets/Car_Mern 3.png";
import Car_4 from "../assets/Car_Mern 4.png";
import Car_5 from "../assets/Car_Mern 5.png";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  // Project data
  const projects = [
    {
      title: "Car Rental System (MERN Stack)",
      images: [Car_1, Car_2, Car_3, Car_4, Car_5],
      description:
        "A full-stack car rental platform built using MongoDB, Express.js, React.js, and Node.js. Features secure JWT authentication, role-based access control (RBAC) for admin and customer management, RESTful APIs for bookings and rental history, Stripe payment simulation, vehicle image upload, and availability validation to prevent booking conflicts.",
      liveLink: "https://leones-car-mern.vercel.app/",
      githubLink: "https://github.com/kimkim028/Leones_CarMern",
    },
    {
      title: "HTML CSS Landing Page",
      images: [Zoo_1, Zoo_2, Zoo_3, Zoo_4, Zoo_5],
      description:
        "A responsive zoo-themed landing page created during the Free CodeMNL bootcamp using HTML and CSS. Focused on modern UI design, clean layouts, responsive sections, and interactive styling to improve front-end development skills.",
      liveLink: "https://kimoy28.github.io/",
      githubLink: "https://github.com/kimoy28/Kimoy28.github.io",
    },
    {
      title: "Customer Support Chatbot Hybrid Model",
      images: [Chatbot_1, Chatbot_2, Chatbot_3],
      description:
        "A hybrid NLP customer support chatbot combining GPT-2 and DistilBERT to improve contextual response accuracy. Implemented multiple fusion techniques including concatenation, cross-attention, and dense fusion to enhance semantic understanding. Optimized for multi-intent classification and entity recognition, with a scalable architecture suitable for real-world customer service deployment.",
      // liveLink: "https://your-live-site.com",
      githubLink: "https://github.com/reagan13/thesis-prototype",
    },
  ];
  return (
    <div className="text-gray-900 pt-8 pb-24 projects">
      {/* Header */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-28">
        Projects
      </h2>

      <div className="space-y-0">
        {projects.map((project, index) => {
          const isReverse = index % 2 !== 0;
          const isDark = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`w-full flex flex-col md:flex-row px-6 md:px-16 items-center gap-24 ${
                isReverse ? "md:flex-row-reverse" : ""
              } ${isDark ? "bg-[#1e2a78]" : "bg-transparent"} py-24 px-6 md:px-16`}
            >
              {/* Slider */}
              <div className="w-full md:w-1/2">
                <Slider {...settings}>
                  {project.images.map((img, i) => (
                    <div key={i}>
                      <img
                        src={img}
                        alt={`${project.title} ${i + 1}`}
                        className="w-full h-[40vh] sm:h-[55vh] md:h-[65vh] object-contain"
                      />
                    </div>
                  ))}
                </Slider>
              </div>

              {/* Description */}
              <div className="w-full md:w-1/2 max-w-xl text-center md:text-left">
                <h2
                  className={`text-2xl md:text-3xl font-bold mb-4 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h2>

                <p
                  className={`text-lg leading-relaxed mb-6 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  {/* Live Site */}
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition duration-300 ${
                      isDark
                        ? "bg-white text-[#1e2a78] hover:bg-gray-200"
                        : "bg-[#1e2a78] text-white hover:bg-[#3b5bdb]"
                    }`}
                  >
                    <FiExternalLink size={20} />
                    Live
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold border-2 transition duration-300 ${
                      isDark
                        ? "border-white text-white hover:bg-white hover:text-[#1e2a78]"
                        : "border-[#1e2a78] text-[#1e2a78] hover:bg-[#1e2a78] hover:text-white"
                    }`}
                  >
                    <FaGithub size={20} />
                    Github Repository
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
