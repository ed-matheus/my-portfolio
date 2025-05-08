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
	return (
		<main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
			{/* Hero Section (Seção inicial da Homepage / Apresentação) */}
			<section className="flex justify-center items-center w-full px-50 py-18 bg-dark gap-45">
				<div>
					<h2 className="mb-5 text-2xl font-bold">
						Olá, me chamo Matheus <br /> Designer de Interfaces e Desenvolvedor
						Front-end
					</h2>

					<p className="text-xl mb-5">
						Transformo ideias em experiências digitais modernas, funcionais e
						intuitivas. <br />
						Este é o meu portfólio, onde compartilho meus projetos, habilidades
						e visão criativa.
					</p>

					{/* Redes Sociais */}
					<div className="flex items-center gap-4">
						<a
							href="https://www.facebook.com/edson.matheus.372/"
							target="__blank"
						>
							<button
								type="button"
								className="border-2 border-green-500 text-green-500 p-2 rounded-full hover:cursor-pointer hover:bg-green-500 hover:text-light"
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
								className="border-2 border-green-500 text-green-500 p-2 rounded-full hover:cursor-pointer hover:bg-green-500 hover:text-light"
							>
								<FontAwesomeIcon icon={faLinkedinIn} className="w-[1.1rem]" />
							</button>
						</a>

						<a href="https://github.com/ed-matheus" target="__blank">
							<button
								type="button"
								className="border-2 border-green-500 text-green-500 p-2 rounded-full hover:cursor-pointer hover:bg-green-500 hover:text-light"
							>
								<FontAwesomeIcon icon={faGithub} className="w-[1.2rem]" />
							</button>
						</a>
					</div>
				</div>

				<img src="/me.png" alt="" className="w-[25rem] h-[25rem]" />
			</section>

			{/* Seção Sobre mim */}
			<section className="flex justify-center items-center w-full px-50 py-18 bg-linear-to-r from-green-600 via-green-500 to-green-400 gap-15">
				{/* <div className="relative w-fit overflow-hidden"> */}
				<Image
					src={"/images/matheus.png"}
					width={320}
					height={320}
					className="rounded-lg w-[40rem]"
					alt="foto do Matheus em desenho"
					style={{ borderBottom: "4px solid #ffffff" }}
				/>
				{/* </div> */}

				<div className="">
					<h2
						className="mb-5 text-2xl text-light font-bold"
						style={{ color: "#fff" }}
					>
						Sobre mim
					</h2>

					{/* Competências */}
					<ul className="flex gap-18 my-6">
						<li className="flex items-center text-[1.2rem]">
							<FontAwesomeIcon
								icon={faPenRuler}
								className="me-2 w-[1.3rem] text-dark"
							/>
							Web Design
						</li>
						<li className="flex items-center text-[1.2rem]">
							<FontAwesomeIcon
								icon={faUsers}
								className="me-2 w-[1.3rem] text-dark"
							/>
							UX/UI Design
						</li>
						<li className="flex items-center text-[1.2rem]">
							<FontAwesomeIcon
								icon={faCode}
								className="me-2 w-[1.3rem] text-dark"
							/>
							Desenvolvimento Front-end
						</li>
					</ul>

					<p className="text-lg">
						Sou tecnólogo em Design de Mídias Digitais formado pela Fatec
						Barueri, com experiência em criação de sites institucionais, landing
						pages e e-commerces. Tenho conhecimentos em WordPress, React e
						ferramentas de design como Figma, Photoshop e Illustrator.
					</p>

					<br />

					<p className="text-lg mb-5">
						Gosto de unir criatividade e organização para entregar soluções
						visuais modernas, funcionais e com foco em resultados. Também tenho
						boa familiaridade com tecnologias web, versionamento com Git e
						noções de redes e suporte técnico. Sou comunicativo, proativo e
						comprometido com a entrega de um trabalho bem feito.
					</p>

					<a href="/sobre" className="me-5">
						<Button text={"Ver mais"} />
					</a>
				</div>
			</section>

			{/* Seção Habilidades */}
			<section className="flex flex-col justify-center items-center w-full px-50 py-20 gap-15 bg-dark">
				<h2 className="text-2xl font-bold">Habilidades</h2>

				<div className="flex items-center justify-center gap-25">
					<img
						src="/images/programming-vector.png"
						alt="dev vector"
						className="w-[25rem] h-[25rem]"
					/>

					<div className="w-96">
						<Skill
							name={"HTML5"}
							iconName={faHtml5}
							level={"85"}
							bgColor={"bg-red-800"}
						/>
						<Skill
							name={"CSS3"}
							iconName={faCss3}
							level={"80"}
							bgColor={"bg-blue-400"}
						/>
						<Skill
							name={"JavaScript"}
							iconName={faJs}
							level={"60"}
							bgColor={"bg-yellow-400"}
						/>
						<Skill
							name={"React"}
							iconName={faReact}
							level={"60"}
							bgColor={"bg-blue-500"}
						/>
						<Skill
							name={"WordPress"}
							iconName={faWordpress}
							level={"85"}
							bgColor={"bg-purple-800"}
						/>
					</div>
				</div>
			</section>

			{/* Seção de Projetos */}
			<section className="flex flex-col justify-center items-center w-full px-50 py-20 gap-15">
				<h2 className="text-2xl font-bold">Projetos</h2>
				<div className="grid grid-cols-3 grid-rows-0 gap-20">
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

				<Link href={"/projetos"}>
					<Button text={"Veja mais"} />
				</Link>
			</section>
		</main>
	);
}
