import React from "react";
import aboutme from "../assets/about me.png";
import { MdFacebook } from "react-icons/md";
import { GrGithub } from "react-icons/gr";
import { BiLogoGmail } from "react-icons/bi";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaLaravel,
  FaDatabase,
  FaPhp,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { Link } from "react-router-dom";
const About_me = () => {
  return (
    <div className="aboutme text-gray-900 pb-16">
      {/* HEADER */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14">
        About Me
      </h2>

      <div className="max-w-5xl mx-auto text-lg leading-relaxed text-gray-700">
        {/* PROFILE IMAGE */}
        <img
          src={aboutme}
          alt="Kim Noel Leones"
          className="w-full sm:w-[260px] md:w-[300px] h-[260px] md:h-[300px] object-cover rounded-lg shadow-xl mb-6 sm:float-left sm:mr-8"
        />

        {/* PARAGRAPHS */}
        <p className="mb-5">
          I focus on building scalable and user-centered web applications across
          both frontend and backend development. My work involves designing
          systems that prioritize clean architecture and real-world usability.
        </p>

        <p className="mb-5">
          I’ve developed applications featuring secure authentication (JWT),
          role-based access control, booking logic, and payment workflow
          simulations. These experiences helped strengthen my understanding of
          system design and backend architecture.
        </p>

        <p className="mb-5">
          I continuously work on improving my skills by building projects that
          simulate real-world systems and challenges. I’m currently deepening my
          knowledge in backend architecture, performance optimization, and
          scalable application design to better prepare for production-level
          development.
        </p>

        <p className="mb-8">
          I enjoy working with modern technologies and adapting to different
          architectures depending on project needs, with a strong focus on
          writing clean and maintainable code.
        </p>

        {/* CLEAR FLOAT */}
        <div className="clear-both"></div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap gap-6 mb-12">
          <Link to="/projects">
            <button className=" view-projects-button cursor-pointer bg-[#6366f1] text-md text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition">
              View Projects
            </button>
          </Link>

          <Link to="/contact">
            <button className="resume-button cursor-pointer border border-[#6366f1] text-md px-6 py-3 rounded-lg hover:bg-[#6366f1] hover:text-white transition">
              Contact Me
            </button>
          </Link>

          <Link
            to="https://drive.google.com/file/d/12VvEOYdl5flgL8kLn47S0pA2z_doyHF-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className=" resume-button cursor-pointer border border-[#6366f1] text-md px-6 py-3 rounded-lg hover:bg-[#6366f1] hover:text-white transition">
              Resume
            </button>
          </Link>
        </div>

        {/* WHAT I BRING */}
        <h3 className="text-2xl font-bold mb-4">What I Bring</h3>

        <ul className="list-disc ml-6 space-y-2 mb-10">
          <li>End-to-end full-stack development</li>
          <li>Strong API and database design skills</li>
          <li>Real-world system development experience</li>
          <li>Clean and scalable coding practices</li>
          <li>Adaptability across frameworks and stacks</li>
        </ul>

        {/* CORE TECHNOLOGIES */}
        <h3 className="text-3xl font-bold text-center mb-10">
          Core Technologies
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* LANGUAGES */}
          <div className="tech-card">
            <h4 className="tech-title text-center mb-6">Languages</h4>
            <div className="flex flex-wrap justify-center gap-6 text-5xl">
              <FaHtml5 style={{ color: "#E34C26" }} />
              <FaCss3Alt style={{ color: "#264DE4" }} />
              <IoLogoJavascript style={{ color: "#F7DF1E" }} />
              <FaPhp style={{ color: "#777BB4" }} />
              <FaPython style={{ color: "#FFD700" }} />
            </div>
          </div>

          {/* FRAMEWORKS */}
          <div className="tech-card">
            <h4 className="tech-title text-center mb-6">Frameworks</h4>
            <div className="flex flex-wrap justify-center gap-6 text-5xl">
              <FaReact style={{ color: "#61DAFB" }} />
              <SiExpress style={{ color: "#000000" }} />
              <FaLaravel style={{ color: "#FF2D20" }} />
              <RiTailwindCssFill style={{ color: "#06B6D4" }} />
              <FaNodeJs style={{ color: "#339933" }} />
            </div>
          </div>

          {/* DATABASE */}
          <div className="tech-card">
            <h4 className="tech-title text-center mb-6">Database</h4>
            <div className="flex justify-center gap-6 text-5xl">
              <FaDatabase style={{ color: "#4479A1" }} />
              <SiMongodb style={{ color: "#47A248" }} />
            </div>
          </div>

          {/* TOOLS */}
          <div className="tech-card">
            <h4 className="tech-title text-center mb-6">Tools</h4>

            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-5 py-3 bg-white border border-gray-200 rounded-lg text-sm shadow-sm">
                REST API
              </span>
              <span className="px-5 py-3 bg-white border border-gray-200 rounded-lg text-sm shadow-sm">
                JWT Auth
              </span>
              <span className="px-5 py-3 bg-white border border-gray-200 rounded-lg text-sm shadow-sm">
                Git
              </span>
              <span className="px-5 py-3 bg-white border border-gray-200 rounded-lg text-sm shadow-sm">
                WordPress
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_me;
