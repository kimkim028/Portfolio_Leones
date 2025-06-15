import { useState } from "react";
import "./App.css";
import About_me from "./components/About_me";
import TechStack from "./components/TechStack";
import Certificate from "./components/Certificate";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Navbar */}
      <header className="flex justify-between items-center z-50 sticky top-0 backdrop-blur-md px-6 py-4 md:py-6 lg:py-8 h-[15vh]">
        <h1 className="text-white text-3xl font-semibold">Portfolio</h1>

        {/* Hamburger Button - Mobile Only */}
        <button
          className="text-white text-3xl md:hidden focus:outline-none"
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 gap-4">
          <a
            href="#"
            className="text-white hover:text-[#6366f1] transition-colors duration-200"
          >
            About Me
          </a>
          <a
            href="#techStack"
            className="text-white hover:text-[#6366f1] transition-colors duration-200"
          >
            Tech Stack
          </a>
          <a
            href="#certificate"
            className="text-white hover:text-[#6366f1] transition-colors duration-200"
          >
            Certificates
          </a>
          <a
            href="#projects"
            className="text-white hover:text-[#6366f1] transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white hover:text-[#6366f1] transition-colors duration-200"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[#6366f1] px-6 py-4 space-y-4">
          <a
            href="#"
            className="block text-white hover:text-[#6366f1] transition-colors duration-200"
            onClick={closeMenu}
          >
            About Me
          </a>
          <a
            href="#techStack"
            className="block text-white hover:text-[#6366f1] transition-colors duration-200"
            onClick={closeMenu}
          >
            Tech Stack
          </a>
          <a
            href="#projects"
            className="block text-white hover:text-[#6366f1] transition-colors duration-200"
            onClick={closeMenu}
          >
            Projects
          </a>
          <a
            href="#certificate"
            className="block text-white hover:text-[#6366f1] transition-colors duration-200"
            onClick={closeMenu}
          >
            Certificates
          </a>
          <a
            href="#contact"
            className="block text-white hover:text-[#6366f1] transition-colors duration-200"
            onClick={closeMenu}
          >
            Contact
          </a>
        </nav>
      )}
      <main>
        {/* About Me Section */}
        <section className="aboutme mt-8 sm:mt-16 md:mt-24" id="aboutme">
          <About_me />
        </section>

        <section className="techStack mt-8 sm:mt-16 md:mt-24" id="techStack">
          <h2 className="text-4xl font-semibold text-center mb-10 text-white">
            Tech Stack
          </h2>
          <TechStack />
        </section>

        <section
          className="certificate mt-8 sm:mt-16 md:mt-24"
          id="certificate"
        >
          <h2 className="text-4xl font-semibold text-center mb-10 text-white">
            Certificates
          </h2>
          <Certificate />
        </section>

        <section className="projects mt-8 sm:mt-16 md:mt-24" id="projects">
          <h2 className="text-4xl font-semibold text-center mb-10 text-white">
            Projects
          </h2>
          <Projects />
        </section>

        <section className="contact mt-8 sm:mt-16 md:mt-24" id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
