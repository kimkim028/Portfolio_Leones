import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdFacebook } from "react-icons/md";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const closeMenu = () => setMenuOpen(false);
  return (
    <>
      {" "}
      {/* Navbar */}
      <header className="flex justify-between items-center z-50 sticky top-0 backdrop-blur-md px-6 py-4 md:py-6 lg:py-8 h-[15vh]">
        <NavLink to="/">
          <h1 className="text-[#1e2a78] text-3xl font-semibold">Portfolio</h1>
        </NavLink>

        {/* Hamburger Button - Mobile Only */}
        <button
          className="text-gray-900 text-3xl md:hidden focus:outline-none"
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 gap-4">
          <NavLink
            to="/aboutme"
            className={({ isActive }) =>
              `transition-colors duration-200 ${
                isActive
                  ? "text-[#1e2a78] font-semibold"
                  : "text-gray-700 hover:text-[#6366f1]"
              }`
            }
          >
            About Me
          </NavLink>

          <NavLink
            to="/certificate"
            className={({ isActive }) =>
              `transition-colors duration-200 ${
                isActive
                  ? "text-[#1e2a78] font-semibold"
                  : "text-gray-700 hover:text-[#6366f1]"
              }`
            }
          >
            Certificates
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `transition-colors duration-200 ${
                isActive
                  ? "text-[#1e2a78] font-semibold"
                  : "text-gray-700 hover:text-[#6366f1]"
              }`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition-colors duration-200 ${
                isActive
                  ? "text-[#1e2a78] font-semibold"
                  : "text-gray-700 hover:text-[#6366f1]"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>
      </header>
      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden sticky top-[15vh] z-40 backdrop-blur-md px-6 py-4 space-y-3 border-t border-white/10">
          <NavLink
            to="/aboutme"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block text-lg font-medium transition-colors ${
                isActive
                  ? "text-[#1e2a78] font-semibold"
                  : "text-gray-700 hover:text-[#6366f1]"
              }`
            }
          >
            About Me
          </NavLink>

          <NavLink
            to="/projects"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block text-lg font-medium transition-colors ${
                isActive
                  ? "text-[#1e2a78] font-semibold"
                  : "text-gray-700 hover:text-[#6366f1]"
              }`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/certificate"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block text-lg font-medium transition-colors ${
                isActive
                  ? "text-[#1e2a78] font-semibold"
                  : "text-gray-700 hover:text-[#6366f1]"
              }`
            }
          >
            Certificates
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block text-lg font-medium transition-colors ${
                isActive
                  ? "text-[#1e2a78] font-semibold"
                  : "text-gray-700 hover:text-[#6366f1]"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>
      )}
      {/* Main content */}
      <main className="mb-10">
        <Outlet />
      </main>
      {/* Footer */}
      <footer className="bg-[#1e1b4b] text-white mt-16">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* TOP SECTION */}
          <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
            {/* BRAND */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Kim Leones
              </h2>
              <p className="text-sm text-indigo-200 mt-3 max-w-sm">
                Full-Stack Web Developer focused on building scalable and
                real-world applications.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
              <ul className="space-y-2 text-sm text-indigo-200">
                <li>
                  <a href="/" className="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/projects" className="hover:text-white transition">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/techStack" className="hover:text-white transition">
                    Tech Stack
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* SOCIALS */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Connect</h3>

              <div className="flex justify-center md:justify-start gap-6">
                <a
                  href="https://www.facebook.com/knowell28"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdFacebook size={34} color="#1877F2" />
                </a>

                <a
                  href="https://github.com/kimkim028"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GrGithub size={34} color="#ffffff" />
                </a>

                <a
                  href="https://www.linkedin.com/in/kim-noel-leones-1029b4360"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={34} color="#0A66C2" />
                </a>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="border-t border-indigo-900 mt-10 pt-5 text-center text-sm text-indigo-200">
            <p>
              &copy; {new Date().getFullYear()} Kim Leones. All rights reserved.
            </p>
            <p className="mt-1">Built with React & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
