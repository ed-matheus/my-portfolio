import Image from "next/image";

// Componentes
import Button from "./Button";

const ProjectCard = ({ img, name, desc, skills, link, codeLink }) => {
  const skillList = skills;

  return (
    <div className="w-[400px] p-5 rounded-[10px] bg-dark-400 shadow-xl/30 shadow-blue-300">
      <Image
        src={`/project-images/${img}`}
        alt="print do projeto"
        className="w-full h-[220px] mb-5 rounded-[10px]"
        width={400}
        height={220}
      />

      {/* Conteúdo do card */}
      <div className="flex flex-col gap-4 mb-8">
        <h2 className="font-bold text-[1.2rem]">{name}</h2>
        <span>{desc}</span>
        <ul className="flex gap-4">
          {skillList.map((skill) => (
            <li key={skill.id}>{skill.name}</li>
          ))}
        </ul>
      </div>

      {skillList[0].name === "WordPress" ? (
        <div className="flex justify-between w-full">
          <a href={`${link}`} target="_blank" rel="noreferrer">
            <Button text={"Ver projeto"} />
          </a>
        </div>
      ) : (
        <div className="flex justify-between w-full">
          <a href={`${link}`} target="_blank" rel="noreferrer">
            <Button text={"Ver projeto"} />
          </a>

          <a href={`${codeLink}`} target="_blank" rel="noreferrer">
            <Button text={"Ver repositório"} />
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
