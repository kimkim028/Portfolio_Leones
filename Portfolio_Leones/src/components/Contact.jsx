import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-900">
      <form className="p-8 w-full max-w-xl bg-gray-800 rounded-lg">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full md:w-1/2 border text-white bg-transparent rounded-md px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-white name-container"
          />
          <input
            type="tel"
            placeholder="Contact Number"
            className="w-full md:w-1/2 border text-white bg-transparent rounded-md px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-white number-container"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border text-white bg-transparent rounded-md px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-white email-container"
          />
        </div>

        <div className="mb-6">
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full border text-white bg-transparent rounded-md px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-white textarea-container"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-white text-indigo-900 font-semibold px-6 py-2 rounded-md w-full transition duration-300 hover:bg-gray-200 cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
