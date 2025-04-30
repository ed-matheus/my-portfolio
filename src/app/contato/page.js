import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Ícones
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contato = () => {
	return (
		<div className="w-full">
			<section className="px-50 py-15 bg-dark-400 gap-18 text-center">
				<h1 className="text-3xl font-bold text-blue-500 mb-4">Fale Comigo</h1>
				<p className="text-lg text-gray-300">
					Estou disponível para novos projetos, parcerias ou até mesmo para
					trocar uma ideia! <br /> Preencha o formulário ou use minhas redes
					abaixo.
				</p>
			</section>

			<section className="w-full py-25 px-50">
				<form className="max-w-xl mx-auto grid gap-4">
					<input
						type="text"
						placeholder="Seu nome"
						className="p-3 rounded bg-zinc-800 text-white"
						required
					/>
					<input
						type="email"
						placeholder="Seu e-mail"
						className="p-3 rounded bg-zinc-800 text-white"
						required
					/>
					<textarea
						placeholder="Sua mensagem"
						rows="5"
						className="p-3 rounded bg-zinc-800 text-white"
						required
					/>
					<button
						type="submit"
						className="bg-blue-300 hover:bg-primary/80 text-white py-2 px-6 rounded w-fit mx-auto"
					>
						Enviar mensagem
					</button>
				</form>

				<div className="mt-20 text-center">
					<p className="text-gray-400 mb-4">Ou entre em contato pelas redes:</p>
					<div className="flex justify-center gap-10">
						<a
							href="https://www.linkedin.com/in/edson-matheus-b5a0171ba/"
							target="_blank"
							rel="noreferrer"
							className="hover:text-blue-500 flex items-center gap-2"
						>
							<FontAwesomeIcon icon={faLinkedin} className="w-[1.2rem]" />
							LinkedIn
						</a>
						<a
							href="mailto:edsonmatheus02@hotmail.com"
							className="hover:text-blue-500 flex items-center gap-2"
						>
							<FontAwesomeIcon icon={faEnvelope} className="w-[1.2rem]" />
							E-mail
						</a>
						<a
							href="https://github.com/ed-matheus"
							target="_blank"
							rel="noreferrer"
							className="hover:text-blue-500 flex items-center gap-2"
						>
							<FontAwesomeIcon icon={faGithub} className="w-[1.2rem]" />
							GitHub
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contato;
