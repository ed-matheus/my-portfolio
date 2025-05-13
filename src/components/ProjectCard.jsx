import Image from "next/image";
import Button from "./Button";

const ProjectCard = ({ img, name, desc, skills, link, codeLink }) => {
  return (
    <div className="w-[20rem] p-5 md:w-[21rem] lg:w-[22rem] xl:w-[23rem] rounded-[10px] bg-dark-400 shadow-xl/15 shadow-light border-y-3 border-b-light">
      <Image
        src={`/project-images/${img}`}
        alt={`Print do projeto ${name}`}
        className="w-full h-[220px] mb-5 rounded-[10px] object-cover"
        width={400}
        height={400}
        priority
      />

      <div className="flex flex-col gap-4 mb-8">
        <h2 className="font-bold text-[1.2rem]">{name}</h2>
        <span>{desc}</span>

        {/* Skills */}
        <ul className="flex flex-wrap gap-2 text-sm text-white">
          {skills.map((skill) => (
            <li
              key={skill.id}
              className="bg-green-400 text-dark font-semibold px-2 py-1 rounded-full text-xs"
            >
              {skill.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Botões */}
      {skills[0]?.name === "WordPress" ? (
        <div className="flex justify-start w-full">
          <a href={link} target="_blank" rel="noreferrer">
            <Button text="Ver projeto" />
          </a>
        </div>
      ) : (
        <div className="flex justify-between w-full">
          <a href={link} target="_blank" rel="noreferrer">
            <Button text="Ver projeto" />
          </a>

          <a href={codeLink} target="_blank" rel="noreferrer">
            <Button text="Ver repositório" />
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
