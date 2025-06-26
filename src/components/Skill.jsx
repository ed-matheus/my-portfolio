import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skill = ({ name, iconColor, iconName }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <FontAwesomeIcon
        icon={iconName}
        className={`text-[2.5rem] md:w-[2.5rem] lg:w-[3rem] mb-3 text-${iconColor}`}
      />
      <p className="text-sm sm:text-base font-medium text-light">{name}</p>
      {/* <h2 className="text-white text-md mb-1.5 flex items-center gap-2">
        {name}
      </h2>
      <div className="flex items-center gap-3">
        <div className="h-4 rounded-full overflow-hidden flex-1 bg-gray-800">
          <div className={`h-full ${bgColor}`} style={{ width: `${level}%` }} />
        </div>
        <span>{level}%</span>
      </div> */}
    </div>
  );
};

export default Skill;
