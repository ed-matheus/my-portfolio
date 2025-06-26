"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Arquivo JSON com dados dos meus projetos
import projects from "@/data/my-projects.json";

// Componentes
import ProjectCard from "@/components/ProjectCard";
import ProjectsFilter from "@/components/ProjectsFilter";

// Ícones
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Button from "@/components/Button";

const Projetos = () => {
	const [selectedCategory, setSelectedCategory] = useState("Todos");

	const filteredProjects =
		selectedCategory === "Todos"
			? projects
			: projects.filter((p) => p.category === selectedCategory);

	const qtdProjetos = filteredProjects.length;
	console.log(filteredProjects.length);

	// variantes
	const fadeUp = {
		hidden: { opacity: 0, y: 20 },
		visible: (i = 0) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.1,
				duration: 0.5,
				ease: "easeOut",
			},
		}),
	};

	const containerStagger = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	return (
		<div className="w-full">
			{/* Cabeçalho */}
			<motion.section
				variants={fadeUp}
				initial="hidden"
				animate="visible"
				className="px-15 pt-15 bg-dark-400 gap-18 text-center"
			>
				<h1 className="text-3xl font-bold text-blue-500 mb-4">Projetos</h1>
				<p className="text-lg text-gray-300">
					Uma seleção dos meus trabalhos com foco em design atrativo e boas
					práticas de desenvolvimento. <br />
					<span className="text-sm text-green-500">
						Observação: Os projetos Tânia Neves, Green Gold e Questy realizados
						com WordPress, eu desenvolvi enquanto estava trabalhando numa
						agência chamada Pixel12Digital.
					</span>
				</p>
			</motion.section>

			{/* Filtro de projetos */}
			<motion.div
				variants={fadeUp}
				initial="hidden"
				animate="visible"
				transition={{ delay: 0.3 }}
				className="flex flex-col items-center justify-center pt-10 mt-10 mb-[-1.5rem]"
			>
				<span className="text-xl mb-3">Filtro</span>

				<ProjectsFilter
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
				/>
			</motion.div>

			<motion.h3
				variants={fadeUp}
				initial="hidden"
				animate="visible"
				transition={{ delay: 0.4 }}
				className="text-center text-md md:text-lg mt-4 text-green-500"
			>
				{qtdProjetos} projetos
			</motion.h3>

			{/* Grid de Projetos */}
			<div className="w-full px-4 pb-10">
				<motion.section
					variants={containerStagger}
					initial="hidden"
					animate="visible"
					className="w-full grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-15 py-12 px-5 lg:gap-x-0 xl:gap-x-0 xl:px-18"
				>
					{filteredProjects.map((project) => (
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
				</motion.section>

				<hr className="w-full text-green-500 border-2 rounded mt-10" />

				{/* Call to Action */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="flex flex-col items-center justify-center py-10"
				>
					<h2 className="text-xl mb-3">Gostou do que viu?</h2>
					<Link href="/contato">
						<Button text={"Entre em contato"} />
					</Link>
				</motion.div>
			</div>
		</div>
	);
};

export default Projetos;
