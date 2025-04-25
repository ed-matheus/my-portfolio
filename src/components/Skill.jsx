import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Skill = ({ name, level, bgColor, iconName }) => {
  return (
    <div className="mb-6 w-full">
      <h2 className="text-white text-md mb-1.5 flex items-center gap-2">
        {name}
      </h2>
      <div className="flex items-center gap-3">
        <div className="h-4 rounded-full overflow-hidden flex-1 bg-gray-800">
          <div className={`h-full ${bgColor}`} style={{ width: `${level}%` }} />
        </div>
        <span>{level}%</span>
      </div>
    </div>
  );
};

export default Skill;
