import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importando FontAwesome

// Ícones do FontAwesome
import { faCode, faPenRuler, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
	return (
		<div className="items-center justify-items-center">
			<section className="flex justify-center items-center w-full px-5 py-12 bg-black-400">
				<div className="w-[60%]">
					<h2 className="text-blue-500 mb-5 text-2xl">
						Olá, me chamo Matheus <br /> Designer de Interfaces e Desenvolvedor
						Front-end
					</h2>

					<p className="text-xl">
						Transformo ideias em experiências digitais modernas, funcionais e
						intuitivas. <br />
						Este é o meu portfólio, onde compartilho meus projetos, habilidades
						e visão criativa.
					</p>

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

						<a
							href="https://github.com/ed-matheus"
							target="__blank"
						>
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
		</div>
	);
}
