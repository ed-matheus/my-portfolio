import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skill = ({ name, iconColor, iconName }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <FontAwesomeIcon
        icon={iconName}
        className={`text-[2.5rem] md:w-[2.5rem] lg:w-[3rem] mb-3 text-${iconColor}`}
      />
      <p className="text-[0.8rem] sm:text-base font-medium text-light">{name}</p>
    </div>
  );
};

export default Skill;
