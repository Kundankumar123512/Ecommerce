import React from "react";
import {
  FaLaptopCode,
  FaPencilRuler,
  FaBullhorn,
  FaPaintBrush,

  FaBriefcase
} from "react-icons/fa";

import { MdCalendarMonth } from "react-icons/md";
import HeroSection from "./HeroSection";
import Skills from "./Skills";



const experiences = [
{
    icon: <FaBriefcase className="text-yellow-400 text-4xl sm:text-5xl" />,
    title: "Internship",
    company: "CODSOFT",
    duration: "(May 1, 2024 - May 31, 2024)",
    description:
     "Completed a one-month Frontend Web Development Internship at CODSOFT, where I developed interactive web applications including a personal portfolio, landing pages, and a calculator. Gained hands-on experience in HTML, CSS, JavaScript, and responsive design, enhancing my skills in creating visually appealing and user-friendly interfaces.",
  },
 {
  icon: <FaBriefcase className="text-yellow-400 text-4xl sm:text-5xl" />,
  title: "ServiceNow",
  company: "ServiceNow Platform",
  duration: "(January 20, 2025 - March 28, 2025)",
  description:
    "Experience working with the ServiceNow platform, building and customizing workflows to streamline business processes. Skilled in creating forms, automating tasks, and configuring modules to improve efficiency and service delivery. Familiar with incident, problem, and change management modules, enabling seamless IT service management solutions."
}

];
const educationHistory = [
  {
    degree: "Bachelor of Technology in CSE",
    university: "Maharishi Markandeshwar Deemed To Be University, Mullana, Ambala",
    years: "2022 – 2026",
    description:
      "I am currently pursuing my B.Tech in Computer Science and Engineering, developing a strong foundation in software development and improving my technical skills.",
  },
  {
    degree: "12th Grade (CBSE Board)",
    School: "Sun Shine Residential Public School,Maner,Patna,Bihar",
    years: "2019 – 2021",
    description:
      "I completed my 12th in the Science stream, where I gained practical knowledge in Physics, Chemistry  along with enhancing my creativity and artistic skills in Painting."
  },
  {
    degree: "10th Grade (ICSE Board)",
    School: "St.Joseph's School, Jhajha,Jamui,Bihar",
    years: "2018 – 2019",
    description:
      "I completed my 10th grade, where I developed a strong foundation in subjects like mathematics, science, and languages.",
  },
];

export default function About() {
  return (
    <section className="text-white py-12 px-6 sm:px-16 min-h-screen flex flex-col md:flex-row gap-8 mt-20">
      {/* Left Side - Hero Section (fixed on md+) */}
      <div className="hidden md:block -mt-28 ">
        <div className="sticky top-24">
          <HeroSection />
        </div>
      </div>

      {/* Right Side - About Content */}
      <div className="w-full  bg-[#1e1e1e] p-8 rounded-2xl shadow-lg overflow-y-auto">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <hr className="border-t-4 border-yellow-500 mb-2 w-16 rounded" />

        <p className="text-gray-300 leading-relaxed sm:text-xl text-xl">
          I'm Kundan Kumar, a 4th-year B.Tech Computer Science student from Bihar with
          a strong interest in software development and IoT-based projects. I have
          participated in hackathons and technical events, winning awards and
          gaining hands-on experience in building innovative solutions.
        </p>

        <p className="text-gray-300 leading-relaxed mt-4 sm:text-xl text-sm">
          I enjoy working on projects that combine creativity and technology, such as
          IoT-enabled healthcare gloves and water measurement systems. My skills
          include problem-solving, leadership, and teamwork, along with technical
          knowledge in web development and IoT. I aim to deliver solutions that are
          practical, user-friendly, and impactful, while continuously learning and
          growing as a developer.
        </p>

        {/* What I'm Doing */}
        <h3 className="text-2xl font-bold mt-12 mb-6">What I'm Doing</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-[#111] p-6 rounded-2xl shadow-lg flex items-start gap-4 hover:scale-105 transition">
            <FaPencilRuler className="text-yellow-400 sm:text-4xl text-6xl" />
            <div>
              <h4 className="text-lg font-semibold">Web Development</h4>
              <p className="text-gray-400 sm:text-xl text-sm">
                I specialize in building responsive, user-friendly, and efficient web
                applications using modern technologies like React, Node.js, and TailwindCSS.
                My focus is on creating clean code, smooth user experiences, and scalable
                solutions.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#111] p-6 rounded-2xl shadow-lg flex items-start gap-4 hover:scale-105 transition">
            <FaLaptopCode className="text-yellow-400 sm:text-4xl text-6xl" />
            <div>
              <h4 className="text-lg font-semibold">Web Design</h4>
              <p className="text-gray-400 sm:text-xl text-sm">
                I design clean, modern, and visually appealing interfaces with a focus on
                simplicity, usability, and responsive layouts. My designs aim to deliver smooth
                user experiences using tools like TailwindCSS.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#111] p-6 rounded-2xl shadow-lg flex items-start gap-4 hover:scale-105 transition">
            <FaPaintBrush className="text-yellow-400 sm:text-4xl text-6xl" />
            <div>
              <h4 className="text-lg font-semibold">Problem Solving & IoT </h4>
              <p className="text-gray-400 sm:text-xl text-sm">
                I enjoy solving real-world problems through technology, building IoT-based
                projects like smart healthcare gloves and water monitoring systems that
                deliver practical and impactful solutions.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#111] p-6 rounded-2xl shadow-lg flex items-start gap-4 hover:scale-105 transition">
            <FaBullhorn className="text-yellow-400 sm:text-4xl text-6xl" />
            <div>
              <h4 className="text-lg font-semibold">Teamwork & Leadership</h4>
              <p className="text-gray-400 sm:text-xl text-sm">
                Experienced in leading teams during hackathons and projects, managing tasks
                efficiently, and collaborating to deliver innovative solutions under tight
                deadlines.
              </p>
            </div>
          </div>
        </div>

        <section id="education" className="text-white  sm:px-12 md:px-16 mt-12 sm:mt-16 md:mt-20">
          <div className="w-full max-w-6xl mx-auto bg-[#1e1e1e] p-6 sm:p-10 rounded-2xl shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education 🎓</h2>
            <hr className="border-t-4 border-yellow-500 mb-10 w-16 rounded" />

            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-4 sm:left-6 top-2 h-full border-l-2 border-gray-600"
                aria-hidden="true"
              ></div>

              {educationHistory.map((item, index) => (
                <div key={index} className="mb-10 pl-12 sm:pl-16 relative">
                  {/* Dot */}
                  <div
                    className="absolute left-4 sm:left-6 top-2 w-4 h-4 bg-yellow-500 rounded-full -translate-x-1/2"
                    aria-hidden="true"
                  ></div>

                  <h3 className="text-lg sm:text-xl font-bold mt-1">{item.degree}</h3>
                  <h4 className="text-base sm:text-lg font-medium text-yellow-400 mt-1">
                    {item.university}
                  </h4>

                  <p className="text-sm sm:text-base font-semibold text-gray-400 flex items-center gap-2 mt-2">
                    <MdCalendarMonth /> {item.years}
                  </p>

                  <p className="text-sm sm:text-base mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="text-white  sm:px-12 md:px-16 mt-12 sm:mt-16 md:mt-20">
          <div className="w-full max-w-6xl mx-auto bg-[#1e1e1e] p-6 sm:p-10 rounded-2xl shadow-2xl">

            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience 💼</h2>
            <hr className="border-t-4 border-yellow-500 mb-10 w-16 rounded" />

            <div className="grid gap-8 sm:grid-cols-2">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-[#2a2a2a] rounded-xl p-6 shadow-md hover:shadow-lg transition"
                >
                  <div className="flex items-center gap-4 mb-4">
                    {exp.icon}
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-gray-400">{exp.company}</p>
                      <p className="text-sm text-gray-500">{exp.duration}</p>
                    </div>
                  </div>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Skills />
      </div>

    </section>
  );
}
