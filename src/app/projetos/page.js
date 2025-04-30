import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Arquivo JSON com dados dos meus projetos
import projects from "@/data/my-projects.json";

// Componentes
import ProjectCard from "@/components/ProjectCard";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Projetos = () => {
	return (
		<div className="w-full">
			{/* Cabeçalho */}
			<section className="px-50 py-15 bg-dark-400 gap-18 text-center">
				<h1 className="text-3xl font-bold text-blue-500 mb-4">Projetos</h1>
				<p className="text-lg text-gray-300">
					Uma seleção dos meus trabalhos com foco em design funcional e boas
					práticas de desenvolvimento.
				</p>
			</section>

			{/* Grid de Projetos */}
			<div className="max-w-[75%] mx-auto px-4 py-10">
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

				{/* Call to Action */}
				<div className="flex flex-col items-center justify-center mt-10">
					<h2 className="text-xl mb-3">Gostou do que viu?</h2>
					<button
						type="button"
						className="bg-green-600 px-4 py-2 rounded"
					>
						<a
							href="/#"
							className="text-white flex items-center gap-2"
						>
							<span className="font-bold">Entre em contato</span>
							<FontAwesomeIcon icon={faWhatsapp} className="w-[1.2rem]" />
						</a>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Projetos;
