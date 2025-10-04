import React from "react";
import SkillCard from "./SkillCard";

// React Icons imports
import { 
  FaPython, FaGitAlt, FaReact, FaHtml5, FaCss3Alt, FaJs, 
  FaBootstrap, FaJava 
} from "react-icons/fa";
import { 
  SiCplusplus, SiBlueprint, SiTypescript, SiTailwindcss, 
  SiExpress, SiMongodb, SiMysql, SiFirebase, 
  SiKotlin, SiTensorflow, SiFlutter, SiIntellijidea 
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";

const Skills = () => {
  return (
    <section
      id="education"
      className="text-white sm:px-12 md:px-16 mt-12 sm:mt-16 md:mt-20"
    >
      <div className="w-full max-w-6xl mx-auto bg-[#1e1e1e] p-6 sm:p-10 rounded-2xl shadow-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills</h2>
        <hr className="border-t-4 border-yellow-500 mb-10 w-16 rounded" />
        <div className="flex flex-wrap justify-center gap-20">

          {/* Programming Languages & CS Concepts */}
          <SkillCard
            title="Programming Languages & CS Concepts"
            skills={[
              { name: "Java", level: 90, icon: <FaJava /> },
              { name: "Python", level: 60, icon: <FaPython /> },
              { name: "Data Structures & Algorithms", level: 60, icon: <FaJava /> },
              { name: "Design Patterns", level: 60, icon: <SiBlueprint /> },
            ]}
          />

          {/* Frontend */}
          <SkillCard
            title="Frontend"
            skills={[
              { name: "HTML5", level: 95, icon: <FaHtml5 /> },
              { name: "CSS3", level: 90, icon: <FaCss3Alt /> },
              { name: "JavaScript", level: 90, icon: <FaJs /> },
              { name: "TypeScript", level: 85, icon: <SiTypescript /> },
              { name: "React.js", level: 85, icon: <FaReact /> },
              { name: "BootStrap", level: 70, icon: <FaBootstrap /> },
              { name: "Tailwind CSS", level: 70, icon: <SiTailwindcss /> },
            ]}
          />

          {/* Backend & Databases */}
          <SkillCard
            title="Backend & Databases"
            skills={[
              { name: "Node.js", level: 85, icon: <FaJs /> },
              { name: "Express.js", level: 80, icon: <SiExpress /> },
              { name: "MongoDB", level: 70, icon: <SiMongodb /> },
              { name: "MySQL", level: 80, icon: <SiMysql /> },
              { name: "RESTful APIs", level: 85, icon: <SiFirebase /> },
            ]}
          />

          {/* Platforms & Tools */}
          <SkillCard
            title="Platforms & Tools"
            skills={[
              { name: "Git & GitHub", level: 85, icon: <FaGitAlt /> },
              { name: "Firebase", level: 70, icon: <SiFirebase /> },
              { name: "IntelliJ IDEA", level: 70, icon: <SiIntellijidea /> },
              { name: "VS Code", level: 90, icon: <VscVscodeInsiders /> },
            ]}
          />

        </div>
      </div>
    </section>
  );
};

export default Skills;
