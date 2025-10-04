// SkillCard.js
import React from "react";

const SkillCard = ({ title, skills }) => {
  return (
    <div className="rounded-xl p-6 shadow-2xl w-full max-w-sm bg-[#111]">
      <h3 className="text-2xl font-semibold mb-6 text-left">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div className="flex items-center gap-4" key={index}>
            {/* Icon + Skill Name */}
            <div className="flex items-center gap-2 w-36">
              {skill.icon && <span className="text-xl text-yellow-400">{skill.icon}</span>}
              <span className="text-sm font-medium text-left">{skill.name}</span>
            </div>

            {/* Progress Bar */}
            <div className="flex-grow bg-gray-700 rounded-full h-2.5 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${skill.level}%`,
                  backgroundImage: "linear-gradient(to right, #a259ff, #6236d9)"
                }}
              ></div>
            </div>

            {/* Skill Level */}
            <span className="text-sm font-semibold">{skill.level}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
