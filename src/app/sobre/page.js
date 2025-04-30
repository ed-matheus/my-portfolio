import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenRuler, faUsers, faCode } from "@fortawesome/free-solid-svg-icons";

const Sobre = () => {
	return (
		<div className="w-full text-white">
			{/* SEÇÃO: Quem sou eu */}
			<section className="flex flex-col justify-center items-start w-full px-50 py-18">
				<h2 className="text-blue-500 mb-4 text-2xl font-bold">Quem sou eu</h2>
				<p className="text-lg leading-relaxed">
					Desde pequeno, sempre fui curioso com tudo que envolvia tecnologia.
					Essa curiosidade me levou ao curso de{" "}
					<strong>Design de Mídias Digitais</strong> na Fatec Barueri, onde me
					formei e dei meus primeiros passos em projetos reais.
				</p>
			</section>

			{/* SEÇÃO: O que eu faço */}
			<section className="flex flex-col justify-center items-start w-full px-50 py-18 bg-dark-400">
				<h2 className="text-blue-500 mb-4 text-2xl font-bold">O que eu faço</h2>
				<p className="text-lg leading-relaxed">
					Atuo criando <strong>sites institucionais</strong>,{" "}
					<strong>landing pages</strong> e <strong>e-commerces</strong>, com
					foco em unir funcionalidade a um design moderno e acessível. Gosto de
					entregar soluções bem pensadas, que funcionem tanto para o cliente
					quanto para quem navega.
				</p>
			</section>

			{/* SEÇÃO: Ferramentas que utilizo */}
			<section className="flex flex-col justify-center items-start w-full px-50 py-18">
				<h2 className="text-blue-500 mb-4 text-2xl font-bold">
					Ferramentas que utilizo
				</h2>
				<p className="text-lg mb-4">
					Essas são as principais ferramentas que utilizo no meu dia a dia:
				</p>
				<ul className="grid grid-cols-2 gap-2 text-lg list-disc list-inside mb-6">
					<li>WordPress</li>
					<li>React / Next.js</li>
					<li>Figma</li>
					<li>Photoshop</li>
					<li>Illustrator</li>
					<li>Git</li>
				</ul>
				<p className="text-lg leading-relaxed">
					Também tenho familiaridade com <strong>versionamento via Git</strong>,
					<strong> noções de redes</strong> e <strong>suporte técnico</strong>,
					o que me permite lidar melhor com integrações e estrutura técnica de
					projetos.
				</p>
			</section>

			{/* SEÇÃO: Como eu trabalho */}
			<section className="flex flex-col justify-center items-start w-full px-50 py-18 bg-dark-400">
				<h2 className="text-blue-500 mb-4 text-2xl font-bold">
					Como eu trabalho
				</h2>
				<p className="text-lg leading-relaxed">
					Antes de colocar qualquer ideia em código, busco entender bem o
					problema. Organizo as informações, estruturo as ideias e só depois
					transformo tudo isso em uma interface funcional, leve e intuitiva.
					Valorizo a clareza e o equilíbrio entre estética e experiência.
				</p>
			</section>

			{/* SEÇÃO: Meu jeito de ser */}
			<section className="flex flex-col justify-center items-start w-full px-50 py-18">
				<h2 className="text-blue-500 mb-4 text-2xl font-bold">
					Meu jeito de ser
				</h2>
				<p className="text-lg leading-relaxed">
					Me considero <strong>comunicativo</strong>, <strong>proativo</strong>{" "}
					e comprometido com a entrega de um trabalho bem feito. Gosto de
					aprender, testar novas ideias e crescer com cada projeto. Acredito que
					desenvolvimento é mais do que técnica — é colaboração e visão.
				</p>
			</section>
		</div>
	);
};

export default Sobre;
