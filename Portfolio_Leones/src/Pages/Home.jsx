import React from "react";
import profile from "../assets/profile.png";

import { MdFacebook } from "react-icons/md";
import { GrGithub } from "react-icons/gr";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

import TechStack from "../components/TechStack";

// SLIDER IMPORTS (for projects)
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Car_1 from "../assets/Car_Mern 1.png";
import Car_2 from "../assets/Car_Mern 2.png";
import Car_3 from "../assets/Car_Mern 3.png";
import Car_4 from "../assets/Car_Mern 4.png";
import Car_5 from "../assets/Car_Mern 5.png";

import Chatbot_1 from "../assets/Chatbot_1.png";
import Chatbot_2 from "../assets/Chatbot_2.png";
import Chatbot_3 from "../assets/Chatbot_3.png";

import { Link } from "react-router-dom";
const PRIMARY = "#1e2a78";

const Home = () => {
  // SAME slider feel as your Projects page
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

  return (
    <>
      {/* ================= HERO (UNCHANGED) ================= */}
      <section className="aboutme mt-8 sm:mt-16 md:mt-24">
        <div className="flex flex-col-reverse md:flex-row w-full h-auto md:h-[60vh]">
          {/* TEXT SECTION */}
          <div className="flex flex-col justify-center text-gray-900 w-full md:w-1/2 md:pt-10 p-6 sm:p-8 gap-4">
            <h2 className="text-2xl sm:text-4xl font-bold leading-snug">
              Hi, I’m <br />
              <span className="md:text-6xl font-black text-[#2e3080]">
                Kim Noel Leones
              </span>
            </h2>

            <h3 className="text-lg sm:text-xl text-gray-600 font-medium">
              Software Engineer
            </h3>

            <p className="text-base leading-relaxed max-w-full sm:max-w-[90%]">
              I’m a software engineer who builds scalable and user-focused
              applications. I’ve developed systems with secure authentication,
              role-based access control, and real-world workflows such as
              booking and payment processing. I enjoy working across several
              modern technologies and adapting to different architectures to
              solve real problems. Currently seeking opportunities where I can
              contribute to impactful projects and grow as a developer.
            </p>

            {/* SOCIAL ICONS */}
            <div className="contact-icons flex space-x-4 gap-5">
              <a
                href="https://www.facebook.com/knowell28"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
              >
                <MdFacebook size={35} color="#1877F2" />
              </a>

              <a
                href="https://github.com/kimkim028"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
              >
                <GrGithub size={35} color="#181717" />
              </a>

              <a
                href="mailto:kimnoelleones28@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
              >
                <BiLogoGmail size={35} color="#EA4335" />
              </a>

              <a
                href="https://www.linkedin.com/in/kim-noel-leones-1029b4360"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
              >
                <FaLinkedin size={35} color="#0A66C2" />
              </a>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-6 mt-4">
              <Link to="/projects">
                <button className="view-projects-button cursor-pointer text-white px-5 py-2 rounded-lg">
                  View Projects
                </button>
              </Link>

              <Link
                to="https://drive.google.com/file/d/13oMFtLdtsFRF_JHXVXb6fOLksGbkSSen/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="resume-button cursor-pointer border px-5 py-2 rounded-lg">
                  Resume
                </button>
              </Link>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="w-full md:w-1/2 flex justify-center items-center p-6 sm:p-8">
            <div
              className="w-[250px] sm:w-[300px] md:w-[380px] h-[250px] sm:h-[300px] md:h-[380px]
              rounded-full border-4 border-[#24328a] overflow-hidden bg-[#f5f5f5]"
              style={{ boxShadow: `0 0 45px ${PRIMARY}` }}
            >
              <img
                src={profile}
                alt="Kim Noel Leones"
                className="w-full h-full object-cover object-top scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= TECH STACK (UNCHANGED) ================= */}
      <section className="techStack mt-10 sm:mt-16 md:mt-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tech Stack
          </h2>
          <p className="text-gray-600">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <TechStack />
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="mt-10 sm:mt-16 md:mt-24 px-6 md:px-16 py-16 bg-[#1e2a78]">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience
          </h2>
          <p className="text-gray-300">
            My professional experience and real-world development work
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-gray-200">
          <h3 className="text-2xl font-bold text-white">
            WordPress Developer Intern
          </h3>
          <p className="text-gray-300 mb-4">RYPACI IT Solutions — 2025</p>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              Developed an Image Enhancer and Upscaler web application using
              WordPress
            </li>
            <li>
              Integrated AI-based image enhancement and upscaling functionality
              using Replicate API
            </li>
            <li>
              Implemented payment gateway integration using PayMongo for feature
              access
            </li>
            <li>
              Customized WordPress themes and plugins to support application
              features
            </li>
            <li>
              Ensured responsive design and optimized user experience across
              devices
            </li>
          </ul>
        </div>
      </section>

      {/* ================= FEATURED PROJECTS ================= */}
      <section id="projects" className="mt-10 sm:mt-16 md:mt-24 px-6 md:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600">
            Selected projects showcasing my development experience
          </p>
        </div>

        <div className="space-y-28">
          {/* PROJECT 1 */}
          <div className="flex flex-col md:flex-row items-center gap-24">
            <div className="w-full md:w-1/2">
              <Slider {...settings}>
                {[Car_1, Car_2, Car_3, Car_4, Car_5].map((img, i) => (
                  <div key={i}>
                    <img
                      src={img}
                      className="w-full h-[40vh] sm:h-[55vh] md:h-[65vh] object-contain rounded-xl"
                    />
                  </div>
                ))}
              </Slider>
            </div>

            <div className="w-full md:w-1/2 max-w-xl text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Car Rental System (MERN Stack)
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed">
                A full-stack car rental platform featuring authentication,
                role-based access control, booking workflows, and payment
                simulation using MongoDB, Express, React, and Node.js.
              </p>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-24">
            <div className="w-full md:w-1/2">
              <Slider {...settings}>
                {[Chatbot_1, Chatbot_2, Chatbot_3].map((img, i) => (
                  <div key={i}>
                    <img
                      src={img}
                      className="w-full h-[40vh] sm:h-[55vh] md:h-[65vh] object-contain rounded-xl"
                    />
                  </div>
                ))}
              </Slider>
            </div>

            <div className="w-full md:w-1/2 max-w-xl text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Customer Support Chatbot Hybrid Model
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed">
                A hybrid NLP model combining GPT-2 and DistilBERT using multiple
                fusion techniques to improve contextual understanding and
                classification performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
