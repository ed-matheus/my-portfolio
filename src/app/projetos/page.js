import ProjectCard from "@/components/ProjectCard";

// Arquivo JSON com dados dos meus projetos
import projects from "@/data/my-projects.json";

const Projetos = () => {

	return (
		<div className="w-full">
			{/* Cabeçalho */}
			<section className="px-50 py-10 bg-dark-400 gap-18">
				<h1 className="text-3xl font-bold text-blue-500 mb-4">Projetos</h1>
				<p className="text-lg text-gray-300">
					Uma seleção dos meus trabalhos com foco em design funcional e boas
					práticas de desenvolvimento.
				</p>
			</section>

			{/* Grid de Projetos */}
			<div className="max-w-[75%] mx-auto px-4">
				<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 py-12">
					{projects.map((project) => (
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
			</div>

			{/* Call to Action */}
			<section className="text-center mt-12">
				<p className="text-xl mb-4">Gostou do que viu?</p>
				<a
					href="/contato"
					className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
				>
					Entre em contato
				</a>
			</section>
		</div>
	);
};

export default Projetos;
