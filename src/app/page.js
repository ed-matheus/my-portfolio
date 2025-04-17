import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importando FontAwesome

// Ícones do FontAwesome
import { faCode, faPenRuler, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faCss3, faGithub, faHtml5, faJs, faLinkedinIn, faReact, faWordpress } from "@fortawesome/free-brands-svg-icons";

// Componentes
import Skill from "@/components/Skill";

export default function Home() {
	return (
		<main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
			<section className="flex justify-center items-center w-full px-50 py-18 bg-black-400 gap-18">
				<div>
					<h2 className="text-blue-500 mb-5 text-2xl font-bold">
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
							href="https://www.linkedin.com/in/edson-matheus-b5a0171ba/"
							target="__blank"
						>
							<button
								type="button"
								className="bg-blue-500 p-2 rounded-full hover:cursor-pointer hover:bg-blue-300"
							>
								<FontAwesomeIcon icon={faLinkedinIn} className="w-[1.3rem]" />
							</button>
						</a>

						<a href="https://github.com/ed-matheus" target="__blank">
							<button
								type="button"
								className="bg-blue-500 p-2 rounded-full hover:cursor-pointer hover:bg-blue-300"
							>
								<FontAwesomeIcon icon={faGithub} className="w-[1.3rem]" />
							</button>
						</a>
					</div>
				</div>

				<img src="/me.png" alt="" className="w-[25rem] h-[25rem]" />
			</section>

			{/* Seção Sobre mim */}
			<section className="flex justify-center items-center w-full px-50 py-18">
				<div className="">
					<h2 className="text-blue-500 mb-5 text-2xl font-bold">Sobre mim</h2>

					{/* Competências */}
					<ul className="flex gap-18 my-6">
						<li className="flex items-center text-[1.2rem]">
							<FontAwesomeIcon
								icon={faPenRuler}
								className="me-2 w-[1.3rem] text-blue-500"
							/>
							Web Design
						</li>
						<li className="flex items-center text-[1.2rem]">
							<FontAwesomeIcon
								icon={faUsers}
								className="me-2 w-[1.3rem] text-blue-500"
							/>
							UX/UI Design
						</li>
						<li className="flex items-center text-[1.2rem]">
							<FontAwesomeIcon
								icon={faCode}
								className="me-2 w-[1.3rem] text-blue-500"
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

					<a href="/sobre">
						<button
							type="button"
							className="bg-blue-500 hover:bg-blue-300 hover:cursor-pointer px-5 py-2 rounded"
						>
							Ver mais
						</button>
					</a>
				</div>
			</section>

			{/* Seção Habilidades */}
			<section className="flex justify-center items-center w-full px-50 py-20 gap-20 bg-black-400">
				<img src="/dev-vector.png" alt="" className="w-[23rem] h-[18rem]" />

				<div className="w-96">
					<h2 className="text-blue-500 mb-5 text-2xl font-bold">Habilidades</h2>
					<Skill name={"HTML5"} iconName={faHtml5} level={'85'} bgColor={"bg-red-800"} />
					<Skill name={"CSS3"} iconName={faCss3} level={'80'} bgColor={"bg-blue-400"} />
					<Skill name={"JavaScript"} iconName={faJs} level={'60'} bgColor={"bg-yellow-400"} />
					<Skill name={"React"} iconName={faReact} level={'60'} bgColor={"bg-blue-500"} />
					<Skill name={"WordPress"} iconName={faWordpress} level={'85'} bgColor={"bg-purple-800"} />
				</div>
			</section>
		</main>
	);
}
