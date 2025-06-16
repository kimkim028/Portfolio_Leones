import React from "react";

const Contact = () => {
  return (
    <div className="h-[25rem] flex flex-col items-center justify-center px-4 gap-10 rounded-2xl">
      <h2 className="text-3xl font-bold text-white text-center">
        Get in Touch
      </h2>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        autoComplete="off"
        className="p-8 w-full max-w-xl rounded-lg gap-4"
      >
        {/* Web3Forms Access Key */}
        <input
          type="hidden"
          name="access_key"
          value="133663c3-534e-479c-954f-2450a65c3860"
        />

        {/* Spam protection honeypot field */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
        />

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full md:w-1/2 border text-white bg-transparent rounded-md px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400 name-container"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Contact Number"
            className="w-full md:w-1/2 border text-white bg-transparent rounded-md px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400 number-container"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full border text-white bg-transparent rounded-md px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400 email-container"
          />
        </div>

        <div className="mb-6">
          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            required
            className="w-full border text-white bg-transparent rounded-md px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400 textarea-container"
          ></textarea>
        </div>

        <button
          type="submit"
          className="button-contact bg-indigo-800 h-[6vh] text-white font-semibold px-6 py-2 rounded-md w-full transition duration-300 hover:text-white hover:bg-indigo-400 cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
