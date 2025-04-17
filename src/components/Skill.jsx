import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Skill = ({ name, level, bgColor, iconName }) => {
  return (
    <div className="mb-6 w-full">
      <h2 className="text-white text-md mb-1.5 flex items-center gap-2">
        {name}
      </h2>
      <div className="w-full rounded-full h-4 flex items-center gap-2">
        <FontAwesomeIcon icon={iconName} className="w-[1rem]" />
        <div
          className={`${bgColor} h-4 rounded-full animate-fill w-[${level}%]`}
        />
        <span>{level}%</span>
      </div>
    </div>
  );
};

export default Skill;
