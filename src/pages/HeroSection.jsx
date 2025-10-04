import React from "react";
import { FaEnvelope, FaBirthdayCake, FaMapMarkerAlt, FaLinkedin, FaGithub, } from "react-icons/fa";
import { RxResume } from "react-icons/rx";

export default function HeroSection() {
  return (
    <div className="flex min-h-screen  ml-5 mt-28 mb-5 md:ml-10 md:mt-28 md:mb-5">

      {/* Left Sidebar Card with border */}
      <div className="w-full max-w-sm bg-[#1e1e1e] border-2 border-zinc-400 rounded-3xl shadow-lg p-6 text-center flex flex-col items-center">
        {/* Profile Image */}
        <div className="w-48 h-48 rounded-2xl overflow-hidden bg-gray-700 flex items-center justify-center mt-16 mb-4">
          <img
            src=
            'kundan professional photo.jpeg'
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-4xl font-bold mb-2">Kundan Kumar</h1>

        {/* Role */}
        <p className="bg-gray-800 px-3 py-1 rounded-lg text-sm inline-block mt-2 transform transition-transform duration-300 hover:scale-125">
          Software Developer & Designer
        </p>

        <hr className="border-gray-700 my-6 w-full" />

        {/* Info Section */}
        <div className="flex flex-col gap-4 w-full">
          {/* Email Info */}
          <div className="flex items-center bg-[#1e1e1e] rounded-xl p-4 shadow-lg hover:shadow-yellow-500 transition-shadow duration-300">
            <FaEnvelope className="text-yellow-400 text-3xl mr-4 transform transition-transform duration-300 hover:scale-150" />
            <div className="text-left">
              <p className="text-sm text-gray-400">EMAIL</p>
              <p className="text-xl font-medium truncate">kumarkundan123512@gmail.com</p>
            </div>
          </div>

          {/* Birthday Info */}
          <div className="flex items-center bg-[#1e1e1e] rounded-xl p-4 shadow-lg hover:shadow-yellow-500 transition-shadow duration-300">
            <FaBirthdayCake className="text-yellow-400 text-3xl mr-4 transform transition-transform duration-300 hover:scale-150" />
            <div className="text-left">
              <p className="text-sm text-gray-400">BIRTHDAY</p>
              <p className="text-xl font-medium">january 21, 2002</p>
            </div>
          </div>

          {/* Location Info */}
          <div className="flex items-center bg-[#1e1e1e] rounded-xl p-4 shadow-lg hover:shadow-yellow-500 transition-shadow duration-300">
            <FaMapMarkerAlt className="text-yellow-400 text-3xl mr-4 transform transition-transform duration-300 hover:scale-150" />
            <div className="text-left">
              <p className="text-sm text-gray-400">LOCATION</p>
              <p className="text-xl font-medium">
               Sohjana jhajha, Distt.jamui,
                <br /> Bihar, India 811308
              </p>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://www.linkedin.com/in/kundan-kumar-44721328a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2  text-xl transform transition-transform duration-300 hover:scale-125 text-white"
          >
            <FaLinkedin className="text-2xl text-yellow-400" />

            LinkedIn
          </a>
          <a
            href="https://github.com/Kundankumar123512"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xl transform transition-transform duration-300 hover:scale-125 text-white"
          >
            <FaGithub className="text-2xl text-yellow-400" />
            GitHub
          </a>
          <a
            href="Kundan Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2  text-xl transform transition-transform duration-300 hover:scale-125 text-white"
          >
            <RxResume className="text-2xl text-yellow-400" />
            Resume
          </a>
        </div>

      </div>

      {/* Right Side Content Area (optional) */}
      <div className="flex-1 p-6">{/* Main page content here */}</div>
    </div>
  );
}
