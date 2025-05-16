"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Arquivo JSON com dados dos meus projetos
import projects from "@/data/my-projects.json";

// Componentes
import ProjectCard from "@/components/ProjectCard";
import ProjectsFilter from "@/components/ProjectsFilter";

// Ícones
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Projetos = () => {
	const [selectedCategory, setSelectedCategory] = useState("Todos");

	const filteredProjects =
		selectedCategory === "Todos"
			? projects
			: projects.filter((p) => p.category === selectedCategory);

	const qtdProjetos = filteredProjects.length;
	console.log(filteredProjects.length);

	return (
		<div className="w-full">
			{/* Cabeçalho */}
			<section className="px-15 pt-15 bg-dark-400 gap-18 text-center">
				<h1 className="text-3xl font-bold text-blue-500 mb-4">Projetos</h1>
				<p className="text-lg text-gray-300">
					Uma seleção dos meus trabalhos com foco em design funcional e boas
					práticas de desenvolvimento. <br />
					<span className="text-sm text-green-500">
						Observação: Os projetos realizados com WordPress eu desenvolvi
						enquanto estava trabalhando em uma agência de marketing digital,
						chamada Pixel12Digital.
					</span>
				</p>
			</section>

			{/* Filtro de projetos */}
			<div className="flex flex-col items-center justify-center pt-10 mt-10 mb-[-1.5rem]">
				<span className="text-xl mb-3">Filtro</span>

				<ProjectsFilter
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
				/>
			</div>

			<h3 className="text-center text-md md:text-lg mt-4 text-green-500">
				{qtdProjetos} projetos
			</h3>

			{/* Grid de Projetos */}
			<div className="w-full px-4 pb-10">
				<section className="w-full grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-15 py-12 px-5 lg:gap-x-0 xl:gap-x-0 xl:px-18">
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
				</section>

				<hr className="w-full text-green-500 border-2 rounded mt-10" />

				{/* Call to Action */}
				<div className="flex flex-col items-center justify-center py-10">
					<h2 className="text-xl mb-3">Gostou do que viu?</h2>
					<button type="button" className="bg-green-600 px-4 py-2 rounded">
						<Link
							href="/contato"
							className="text-white flex items-center gap-2"
						>
							<span className="font-medium">Entre em contato</span>
							{/* <FontAwesomeIcon icon={faWhatsapp} className="w-[1.2rem]" /> */}
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Projetos;
