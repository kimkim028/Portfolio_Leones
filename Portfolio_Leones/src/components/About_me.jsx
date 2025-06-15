import React from "react";
import profile from "../assets/profile.png";
import { MdFacebook } from "react-icons/md";
import { GrGithub } from "react-icons/gr";
import { BiLogoGmail } from "react-icons/bi";
const About_me = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row w-full h-auto md:h-[60vh] bg-gray-900">
        {/* Text Section - appears below on mobile, left on desktop */}
        <div className="flex flex-col justify-center text-white w-full md:w-1/2 md:pt-10 p-6 sm:p-8 gap-4">
          <h2 className="text-2xl sm:text-4xl font-bold leading-snug">
            Hello, I’m <br />
            <span className="text-[#6366f1] md:text-6xl font-black">
              Kim Noel Leones
            </span>
          </h2>

          <p className="text-base sm:text-md leading-relaxed max-w-full sm:max-w-[90%]">
            I’m an aspiring web developer and a Computer Science student at the
            University of Mindanao. I’m currently seeking an internship where I
            can apply my skills, expand my knowledge, and gain hands-on
            experience through real-world web development projects.
          </p>

          <div className="contact-icons flex space-x-4 gap-5">
            <a
              href="https://www.facebook.com/knowell28"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdFacebook size={35} />
            </a>

            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrGithub size={35} />
            </a>

            <a
              href="mailto:your.email@example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoGmail size={35} />
            </a>
          </div>
          <div className="resume-button mt-4">
            <button>
              <a href="">Resume</a>
            </button>
          </div>
        </div>

        {/* Image Section - appears top on mobile, right on desktop */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-6 sm:p-8">
          <div
            className="w-[250px] sm:w-[300px] md:w-[380px] h-[250px] sm:h-[300px] md:h-[380px] 
              rounded-full border-4 border-indigo-500 bg-[#a2a2a2] overflow-hidden 
              shadow-[0_0_45px_#6366f1]"
          >
            <img
              src={profile}
              alt="Kim Noel Leones"
              className="w-full h-full object-cover object-top scale-110"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About_me;
