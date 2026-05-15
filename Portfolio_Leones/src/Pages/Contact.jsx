import React from "react";
import { MdFacebook } from "react-icons/md";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";

const HOVER_COLOR = "hover:text-indigo-600";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 gap-12">
      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-14">
        Get in Touch
      </h2>

      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-10">
        {/* ================= CONTACT INFO ================= */}
        <div className="flex flex-col gap-6 text-gray-800">
          <h3 className="text-xl font-semibold">Contact Information</h3>

          {/* Location */}
          <div className="flex items-center gap-3">
            <span>📍</span>
            <p>Prk.8 Lorsing Subdivision, Panabo City</p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <span>📞</span>
            <a href="tel:+639602076143" className={HOVER_COLOR + " transition"}>
              +639602076143
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <span>✉️</span>
            <a
              href="mailto:kimnoelleones28@gmail.com"
              className={HOVER_COLOR + " transition"}
            >
              kimnoelleones28@gmail.com
            </a>
          </div>

          {/* SOCIALS */}
          <div className="mt-6 flex flex-col gap-4">
            <h4 className="font-semibold text-gray-900">Socials</h4>

            {/* Facebook */}
            <div className="flex items-center gap-3">
              <MdFacebook size={20} color="#1877F2" />
              <a
                href="https://www.facebook.com/knowell28"
                target="_blank"
                rel="noopener noreferrer"
                className={HOVER_COLOR + " transition"}
              >
                Kim Leones
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-3">
              <FaLinkedin size={20} color="#0A66C2" />
              <a
                href="https://www.linkedin.com/in/kim-noel-leones-1029b4360"
                target="_blank"
                rel="noopener noreferrer"
                className={HOVER_COLOR + " transition"}
              >
                KIM NOEL LEONES
              </a>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-3">
              <GrGithub size={20} color="#181717" />
              <a
                href="https://github.com/kimkim028"
                target="_blank"
                rel="noopener noreferrer"
                className={HOVER_COLOR + " transition"}
              >
                github.com/kimkim028
              </a>
            </div>
          </div>
        </div>

        {/* ================= FORM ================= */}
        <form
          action="https://formspree.io/f/mnjlepnp"
          method="POST"
          className="w-full p-6 space-y-4"
        >
          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full border border-gray-900 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#1e2a78]"
          />

          {/* PHONE */}
          <input
            type="tel"
            name="phone"
            placeholder="Contact Number"
            className="w-full border border-gray-900 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#1e2a78]"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full border border-gray-900 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#1e2a78]"
          />

          {/* MESSAGE */}
          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            required
            className="w-full border border-gray-900 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#1e2a78]"
          />

          {/* OPTIONAL SUBJECT (recommended) */}
          <input type="hidden" name="_subject" value="New Portfolio Message" />

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-[#1e2a78] text-white py-3 rounded-md cursor-pointer hover:bg-[#3c53af] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
