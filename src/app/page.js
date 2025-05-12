import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importando FontAwesome

// Ícones do FontAwesome
import { faCode, faPenRuler, faUsers } from "@fortawesome/free-solid-svg-icons";

import {
	faCss3,
	faFacebook,
	faGithub,
	faHtml5,
	faJs,
	faLinkedinIn,
	faReact,
	faWordpress,
} from "@fortawesome/free-brands-svg-icons";

// Componentes
import Skill from "@/components/Skill";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";

// Arquivo JSON com dados dos meus projetos
import projects from "@/data/my-projects.json";

export default function Home() {
	const skills = [
		{ name: "HTML", color: "red", icon: faHtml5 },
		{ name: "CSS", color: "blue", icon: faCss3 },
		{ name: "JavaScript", color: "yellow", icon: faJs },
		{ name: "React", color: "cyan", icon: faReact },
		{ name: "WordPress", color: "gray", icon: faWordpress },
	];

	return (
		<main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
			{/* Hero Section (Seção inicial da Homepage / Apresentação) */}
			<section className="flex flex-col-reverse lg:flex-row justify-center items-center w-full px-6 lg:px-20 py-12 lg:py-18 bg-dark gap-10 lg:gap-20">
				<div className="text-center lg:text-left max-w-xl">
					<h2 className="mb-5 text-xl sm:text-2xl md:text-3xl font-bold text-light">
						Olá, me chamo Matheus <br /> Designer de Interfaces e Desenvolvedor
						Front-end
					</h2>

					<p className="text-base sm:text-lg md:text-xl mb-5 text-gray-300">
						Transformo ideias em experiências digitais modernas, funcionais e
						intuitivas. <br />
						Este é o meu portfólio, onde compartilho meus projetos, habilidades
						e visão criativa.
					</p>

					{/* Redes Sociais */}
					<div className="flex justify-center lg:justify-start items-center gap-4">
						<a
							href="https://www.facebook.com/edson.matheus.372/"
							target="__blank"
						>
							<button
								type="button"
								className="border-2 border-green-500 text-green-500 p-2 rounded-full hover:bg-green-500 hover:text-light transition"
							>
								<FontAwesomeIcon icon={faFacebook} className="w-[1.2rem]" />
							</button>
						</a>

						<a
							href="https://www.linkedin.com/in/edson-matheus-b5a0171ba/"
							target="__blank"
						>
							<button
								type="button"
								className="border-2 border-green-500 text-green-500 p-2 rounded-full hover:bg-green-500 hover:text-light transition"
							>
								<FontAwesomeIcon icon={faLinkedinIn} className="w-[1.1rem]" />
							</button>
						</a>

						<a href="https://github.com/ed-matheus" target="__blank">
							<button
								type="button"
								className="border-2 border-green-500 text-green-500 p-2 rounded-full hover:bg-green-500 hover:text-light transition"
							>
								<FontAwesomeIcon icon={faGithub} className="w-[1.2rem]" />
							</button>
						</a>
					</div>
				</div>

				<img
					src="/me.png"
					alt="Foto de Matheus"
					className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-[25rem] lg:h-[25rem] object-cover"
				/>
			</section>

			{/* Seção Sobre mim */}
			<section
				id="sobre"
				className="w-full px-6 lg:px-20 py-12 lg:py-20 bg-linear-to-b lg:bg-linear-to-r from-green-500 to-light"
			>
				<div className="flex flex-col lg:flex-row items-center gap-12">
					{/* Imagem */}
					<div className="w-full lg:w-1/2 flex justify-center">
						<Image
							src="/images/matheus.png"
							alt="Matheus trabalhando"
							className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-cover rounded-xl shadow-lg"
							width={320}
							height={320}
						/>
					</div>

					{/* Texto */}
					<div className="w-full lg:w-1/2 text-center lg:text-left mb-[-1rem]">
						<h3 className="text-[1.4rem] sm:text-3xl font-bold text-green-600 mb-4">
							Sobre mim
						</h3>

						<ul className="flex items-center justify-between text-[0.9rem] my-5 text-dark">
							<li>
								<FontAwesomeIcon
									icon={faCode}
									className="me-1 text-green-600"
								/>
								Web Design
							</li>
							<li>
								<FontAwesomeIcon
									icon={faPenRuler}
									className="me-1 text-green-600"
								/>
								Front-end
							</li>
							<li>
								<FontAwesomeIcon
									icon={faUsers}
									className="me-1 text-green-600"
								/>
								Design UX/UI
							</li>
						</ul>

						<p className="text-base sm:text-lg text-gray-800 mb-4">
							Sou um profissional apaixonado por criar experiências digitais que
							unem design e tecnologia. <br className="hidden sm:inline" />
							Formado em Design de Mídias Digitais pela FATEC Barueri e cursando
							desenvolvimento web front-end, aplico meus conhecimentos em
							projetos que exigem atenção aos detalhes, responsividade e foco na
							experiência do usuário.
						</p>
						<p className="text-base sm:text-lg text-gray-800">
							Busco oportunidades onde possa crescer, aprender e colaborar com
							pessoas que valorizam o impacto do design na vida das pessoas.
						</p>
					</div>

					<Link href={"/sobre"}>
						<Button text={"Ver mais"} />
					</Link>
				</div>
			</section>

			{/* Seção Habilidades */}
			<section id="skills" className="w-full px-6 lg:px-20 py-12 lg:py-20">
				<div className="max-w-6xl mx-auto text-center">
					<h3 className="text-[1.4rem] sm:text-3xl font-bold text-center text-green-500 mb-10">
						Minhas habilidades
					</h3>

					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 content-center">
						{/* Habilidades individuais */}
						{skills.map((skill) => (
							<Skill
								key={skill.name}
								name={skill.name}
								iconColor={skill.color}
								iconName={skill.icon}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Seção de Projetos */}
			<section className="flex flex-col justify-center items-center w-full px-10 md:px-10 lg:px-20 py-20 gap-10 sm:gap-12 md:gap-15">
				<h2 className="text-2xl md:text-3xl font-bold text-center">Projetos</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14 md:gap-20 w-full max-w-[1280px]">
					{projects.slice(0, 3).map((project) => (
						<ProjectCard
							key={project.name}
							name={project.name}
							desc={project.desc}
							skills={project.skills}
							img={project.img}
							link={project.link}
							codeLink={project.codeLink}
						/>
					))}
				</div>

				<Link href="/projetos">
					<Button text="Veja mais" />
				</Link>
			</section>
		</main>
	);
}
