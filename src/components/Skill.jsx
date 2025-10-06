import React from "react";
import Image from "next/image";

const Skill = ({ name, icon }) => {
  return (
    <div
      className="group flex flex-col gap-4 items-center justify-center text-center 
      bg-light p-10 rounded-[10px] shadow-xl 
      hover:shadow-cyan transition-all duration-300 ease-out"
    >
      <Image
        src={icon}
        alt={`Ícone da tecnologia ${name}`}
        width={60}
        height={60}
        className="transition-transform duration-300 ease-out group-hover:scale-110"
      />
      <p className="text-md font-bold sm:text-lg text-dark">{name}</p>
    </div>
  );
};

export default Skill;
