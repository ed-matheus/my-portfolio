"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Ícones
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contato = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = { name, email, message };

		try {
			const res = await fetch("https://formspree.io/f/mwpoybdo", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (res.ok) {
				setStatus("Mensagem enviada com sucesso!");
				setName("");
				setEmail("");
				setMessage("");
			} else {
				setStatus("Erro ao enviar mensagem.");
			}
		} catch (error) {
			setStatus("Erro ao enviar mensagem.");
		}
	};

	return (
		<div className="w-full">
			<section className="px-15 py-15 bg-dark-400 gap-18 text-center">
				<h1 className="text-3xl font-bold text-blue-500 mb-4">Fale Comigo</h1>
				<p className="text-lg text-gray-300">
					Estou disponível para novos projetos, parcerias ou até mesmo para
					trocar uma ideia! <br /> Preencha o formulário ou use minhas redes
					abaixo.
				</p>
			</section>

			<section className="w-full py-8 px-15">
				<form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
					<div>
						<label htmlFor="name" className="block text-sm font-medium">
							Nome
						</label>
						<input
							type="text"
							name="name"
							id="name"
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="mt-1 w-full px-4 py-2 border rounded-md bg-zinc-800 text-light focus:outline-none focus:ring-2 focus:ring-green-500 transition"
						/>
					</div>

					<div>
						<label htmlFor="email" className="block text-sm font-medium">
							Email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="mt-1 w-full px-4 py-2 border rounded-md bg-zinc-800 text-light focus:outline-none focus:ring-2 focus:ring-green-500 transition"
						/>
					</div>

					<div>
						<label htmlFor="message" className="block text-sm font-medium">
							Mensagem
						</label>
						<textarea
							name="message"
							id="message"
							rows={4}
							required
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className="mt-1 w-full px-4 py-2 border rounded-md bg-zinc-800 text-light focus:outline-none focus:ring-2 focus:ring-green-500 transition"
						/>
					</div>

					<button
						type="submit"
						className="w-full bg-green-500 hover:bg-green-600 hover:cursor-pointer text-light font-semibold py-2 px-4 rounded-md transition duration-300"
					>
						Enviar Mensagem
					</button>

					{status && <p className="mt-2 text-center">{status}</p>}
				</form>

				<div className="my-20 text-center">
					<p className="text-gray-400 mb-5">Ou entre em contato pelas redes:</p>
					<div className="flex flex-col md:flex-row items-center justify-center gap-10">
						<a
							href="https://www.linkedin.com/in/edson-matheus-b5a0171ba/"
							target="_blank"
							rel="noreferrer"
							className="hover:text-green-500 flex items-center gap-2"
						>
							<FontAwesomeIcon icon={faLinkedin} className="w-[1.2rem]" />
							LinkedIn
						</a>
						<a
							href="https://github.com/ed-matheus"
							target="_blank"
							rel="noreferrer"
							className="hover:text-green-500 flex items-center gap-2"
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
