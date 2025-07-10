"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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
	faWhatsapp,
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
		{ name: "HTML", color: "red-400", icon: faHtml5 },
		{ name: "CSS", color: "blue-400", icon: faCss3 },
		{ name: "JavaScript", color: "yellow-400", icon: faJs },
		{ name: "React", color: "cyan-400", icon: faReact },
		{ name: "WordPress", color: "gray-300", icon: faWordpress },
	];

	const fadeUp = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<main className="">
			{/* Hero Section (Seção inicial da Homepage / Apresentação) */}
			<motion.section
				initial="hidden"
				animate="visible"
				transition={{ staggerChildren: 0.2 }}
				className="flex flex-col-reverse lg:flex-row justify-center items-center w-full px-6 lg:px-20 py-20 lg:py-18 bg-dark gap-10 lg:gap-20"
			>
				<motion.div
					variants={fadeUp}
					className="text-center lg:text-left xl:max-w-[42rem]"
				>
					<h2 className="mb-5 text-xl sm:text-2xl md:text-3xl font-bold text-light">
						Olá, me chamo Matheus <br /> Designer de Interfaces e Desenvolvedor
						Front-end
					</h2>

					<p className="text-base sm:text-lg md:text-xl mb-5 text-gray-300">
						Transformo ideias em experiências digitais modernas que fortalecem a
						presença online de marcas <br />
						Aqui você encontra meus projetos, habilidades e visão criativa.
					</p>

					{/* Redes Sociais */}
					<div className="flex justify-center lg:justify-start items-center gap-4">
						{[
							{
								id: 1,
								icon: faFacebook,
								url: "https://www.facebook.com/edson.matheus.372/",
							},
							{
								id: 2,
								icon: faLinkedinIn,
								url: "https://www.linkedin.com/in/edson-matheus-b5a0171ba/",
							},
							{ id: 3, icon: faGithub, url: "https://github.com/ed-matheus" },
						].map((social) => (
							<a
								key={social.id}
								href={social.url}
								target="__blank"
								rel="noopener noreferrer"
							>
								<motion.button
									variants={fadeUp}
									whileHover={{ scale: 1.1 }}
									type="button"
									className="border-2 border-cyan text-cyan p-2 rounded-full hover:bg-cyan hover:text-light hover:cursor-pointer transition"
								>
									<FontAwesomeIcon icon={social.icon} className="w-[1.2rem]" />
								</motion.button>
							</a>
						))}
					</div>
				</motion.div>

				<motion.img
					src="/me.png"
					alt="Foto de Matheus"
					className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-[25rem] lg:h-[25rem] object-cover"
					width={192}
					height={192}
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6 }}
				/>
			</motion.section>

			{/* Seção Sobre mim */}
			<motion.section
				id="sobre"
				className="w-full px-6 py-12 lg:px-20 lg:py-20 bg-[url('/images/textura-papel.jpg')] bg-center bg-cover bg-no-repeat"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ staggerChildren: 0.2 }}
			>
				<div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-0">
					{/* Imagem */}
					<motion.div
						className="w-full lg:w-1/2 flex justify-center"
						variants={fadeUp}
					>
						<Image
							src="/images/matheus.png"
							alt="Matheus trabalhando"
							className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-cover rounded-xl shadow-xl"
							width={320}
							height={320}
							priority
						/>
					</motion.div>

					{/* Conteúdo */}
					<motion.div
						className="flex flex-col items-center w-full lg:w-1/2 xl:w-[35rem] lg:items-start text-center lg:text-left mb-[-1rem]"
						variants={fadeUp}
					>
						<h3 className="text-[1.4rem] sm:text-3xl font-bold text-dark mb-4">
							Sobre mim
						</h3>
						<ul className="flex flex-wrap items-center justify-center lg:justify-start w-full text-[1rem] lg:text-[1rem] my-5 text-dark gap-5 md:gap-18 lg:gap-5">
							<li>
								<FontAwesomeIcon
									icon={faPenRuler}
									className="me-1 text-cyan"
								/>
								Web Design
							</li>
							<li>
								<FontAwesomeIcon
									icon={faCode}
									className="me-1 text-cyan"
								/>
								Front-end
							</li>
							<li>
								<FontAwesomeIcon
									icon={faUsers}
									className="me-1 text-cyan"
								/>
								Design UX/UI
							</li>
						</ul>
						<p className="text-base sm:text-lg text-dark mb-4">
							Sou um profissional focado em criar experiências digitais que unem
							design e tecnologia. <br className="hidden sm:inline" />
							Formado em Design de Mídias Digitais pela FATEC Barueri e
							aprimorando meus conhecimentos de desenvolvimento web, crio
							projetos que exigem atenção aos detalhes, responsividade e foco na
							experiência do usuário.
						</p>
						<p className="text-base sm:text-lg text-dark">
							Busco oportunidades onde possa crescer, aprender e colaborar com
							pessoas que valorizam o impacto do design na vida das pessoas.
						</p>

						<Link href={"/sobre"} className="mt-6">
							<Button text={"Ver mais"} />
						</Link>
					</motion.div>
				</div>
			</motion.section>

			{/* Seção Habilidades */}
			<motion.section
				id="skills"
				className="w-full px-6 lg:px-20 py-12 lg:py-20 xl:py-30"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ staggerChildren: 0.15 }}
			>
				<motion.div className="max-w-6xl mx-auto text-center" variants={fadeUp}>
					<h3 className="text-[1.4rem] sm:text-3xl font-bold text-center text-cyan mb-10">
						Minhas habilidades
					</h3>

					<motion.div
						className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 content-center"
						variants={fadeUp}
					>
						{skills.map((skill, index) => (
							<motion.div
								key={skill.name}
								variants={fadeUp}
								transition={{ delay: index * 0.1 }}
							>
								<Skill
									name={skill.name}
									iconColor={skill.color}
									iconName={skill.icon}
								/>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</motion.section>

			{/* Seção de Projetos */}
			<motion.section
				className="flex flex-col justify-center items-center w-full md:px-10 lg:px-20 xl:px-25 py-20 gap-10 sm:gap-12 md:gap-15"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ staggerChildren: 0.2 }}
			>
				<motion.h2
					className="text-2xl md:text-3xl font-bold text-center"
					variants={fadeUp}
				>
					Projetos
				</motion.h2>

				<motion.div
					className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 sm:gap-14 md:gap-20 lg:gap-15 w-full"
					variants={fadeUp}
				>
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
				</motion.div>

				<Link href="/projetos">
					<Button text="Veja mais" />
				</Link>
			</motion.section>

			{/* Seção Contato */}
			<motion.section
				id="contato"
				className="flex flex-col justify-center items-center w-full px-6 py-20 lg:px-20 bg-dark text-light text-center"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ staggerChildren: 0.2 }}
			>
				<motion.h3
					className="text-[1.4rem] sm:text-3xl font-bold text-cyan mb-6"
					variants={fadeUp}
				>
					Vamos trabalhar juntos?
				</motion.h3>

				<motion.p
					className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
					variants={fadeUp}
				>
					Estou sempre em busca de novos desafios e projetos interessantes.{" "}
					<br />
					Entre em contato comigo para fazermos uma parceria ou discutirmos como
					posso ajudar no seu projeto!
				</motion.p>

				<Link href="/contato">
					<Button text="Ir para página de contato" />
				</Link>

				{/* Informações de contato */}
				<motion.div
					className="mt-10 flex flex-col items-center gap-3"
					variants={fadeUp}
				>
					<p className="text-sm sm:text-base text-gray-400">
						E-mail:{" "}
						<a
							href="mailto:edsonmatheus02@hotmail.com"
							className="underline hover:text-cyan"
						>
							edsonmatheus02@hotmail.com
						</a>
					</p>

					{/* Redes Sociais */}
					<div className="flex justify-center items-center gap-4 mt-4">
						{[
							{
								id: 1,
								icon: faLinkedinIn,
								url: "https://www.linkedin.com/in/edson-matheus-b5a0171ba/",
							},
							{
								id: 2,
								icon: faWhatsapp,
								url: "https://wa.me/5511943834648",
							},
							{
								id: 3,
								icon: faGithub,
								url: "https://github.com/ed-matheus",
							},
						].map((social) => (
							<a
								key={social.id}
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								<motion.button
									variants={fadeUp}
									whileHover={{ scale: 1.1 }}
									type="button"
									className="border-2 border-cyan text-cyan p-2 rounded-full hover:bg-cyan hover:text-light hover:cursor-pointer transition"
								>
									<FontAwesomeIcon icon={social.icon} className="w-[1.2rem]" />
								</motion.button>
							</a>
						))}
					</div>
				</motion.div>
			</motion.section>
		</main>
	);
}
