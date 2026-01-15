"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Ícones
import {
	faCode,
	faEdit,
	faPencil,
	faPencilSquare,
} from "@fortawesome/free-solid-svg-icons";

import {
	faFigma,
	faGitAlt,
	faReact,
	faWordpress,
} from "@fortawesome/free-brands-svg-icons";

const Sobre = () => {
	const fadeUp = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<div className="flex flex-col justify-center items-center text-center w-full lg:text-start">
			{/* SEÇÃO: Quem sou eu */}
			<motion.section
				className="flex flex-col lg:flex-row justify-center items-center w-full px-10 md:px-15 lg:px-20 xl:px-35 py-18 xl:py-20 gap-10"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ staggerChildren: 0.2 }}
				variants={fadeUp}
			>
				<div className="w-full flex justify-center">
					<Image
						src="/images/matheus.png"
						alt="Matheus trabalhando"
						className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-cover rounded-xl shadow-lg shadow-cyan-h"
						width={320}
						height={320}
						priority
					/>
				</div>

				<div>
					<h2 className="mb-4 text-2xl font-bold">Quem sou eu</h2>
					<p className="text-md lg:text-lg leading-relaxed">
						Meu nome completo é Edson Matheus de Jesus da Costa, tenho 23 anos
						atualmente. Nascido em 11/06/2002, sempre fui curioso com tudo que
						envolvia tecnologia desde pequeno. Essa curiosidade me levou ao
						curso de <strong>Design de Mídias Digitais</strong> na Fatec
						Barueri, onde me formei e dei meus primeiros passos em Design
						Digital, Comunicação Visual e Desenvolvimento.
						<br />
						<br />
						Me considero <strong>comunicativo</strong>,{" "}
						<strong>proativo</strong> e comprometido com a entrega de um
						trabalho bem feito. Gosto de aprender, testar novas ideias e crescer
						com cada projeto. Acredito que desenvolvimento é mais do que
						técnica, é colaboração e visão.
					</p>
				</div>
			</motion.section>

			<hr className="w-75 md:w-[85%] mx-auto" />

			{/* SEÇÃO: O que eu faço */}
			<motion.section
				className="w-full px-10 md:px-15 lg:px-20 xl:px-35 py-18 xl:py-20 bg-dark-400"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ staggerChildren: 0.2 }}
				variants={fadeUp}
			>
				<h2 className="mb-4 text-2xl font-bold ">O que eu faço</h2>
				<p className="text-md leading-relaxed">
					Atuo criando <strong>sites institucionais</strong>,{" "}
					<strong>landing pages</strong> e <strong>e-commerces</strong>, mas
					também trabalho com criação de artes digitais para Social Media,
					identidade visual e comunicação visual em geral. Meu foco é unir
					funcionalidade a um design bonito, agradável e acessível. Gosto de
					entregar soluções bem pensadas, que funcionem tanto para o cliente
					quanto para quem navega.
				</p>
			</motion.section>

			<hr className="w-75 md:w-[85%] mx-auto" />

			{/* SEÇÃO: Ferramentas que utilizo */}
			<motion.section
				className="w-full px-10 md:px-15 lg:px-20 xl:px-35 py-18 xl:py-20"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ staggerChildren: 0.2 }}
				variants={fadeUp}
			>
				<h2 className="mb-4 text-2xl font-bold">Ferramentas que utilizo</h2>
				<p className="text-md">
					Essas são as principais ferramentas que tenho conhecimento. Algumas eu
					utilizo diariamente durante meus estudos:
				</p>
				<ul className="grid grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 lg:gap-8 text-sm md:text-lg list-inside my-8 w-62 md:w-75 lg:w-full mx-auto">
					<li className="flex items-center gap-2">
						<FontAwesomeIcon icon={faReact} className="text-2xl text-cyan" />
						React / Next.js
					</li>
					<li className="flex items-center gap-2">
						<FontAwesomeIcon icon={faGitAlt} className="text-2xl text-orange-600" />
						Git
					</li>
					<li className="flex items-center gap-2">
						<FontAwesomeIcon icon={faWordpress} className="text-2xl text-gray-300" />
						WordPress
					</li>
					<li className="flex items-center gap-2">
						<FontAwesomeIcon icon={faFigma} className="text-2xl text-red-700" />
						Figma
					</li>
					<li className="flex items-center gap-2">
						<FontAwesomeIcon icon={faPencil} className="text-2xl text-purple-700" />
						Photoshop
					</li>
					<li className="flex items-center gap-2">
						<FontAwesomeIcon icon={faPencilSquare} className="text-2xl text-orange-400" />
						Illustrator
					</li>
				</ul>

				<p className="text-md leading-relaxed">
					Também tenho familiaridade com <strong>versionamento via Git</strong>,
					<strong> noções de redes</strong> e <strong>suporte técnico</strong>,
					o que me permite lidar melhor com integrações e estrutura técnica de
					projetos.
				</p>
			</motion.section>

			<hr className="w-75 md:w-[85%] mx-auto" />

			{/* SEÇÃO: Como eu trabalho */}
			<motion.section
				className="w-full px-10 md:px-15 lg:px-20 xl:px-35 py-18 xl:py-20 bg-dark-400"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ staggerChildren: 0.2 }}
				variants={fadeUp}
			>
				<h2 className="mb-4 text-2xl font-bold">Como eu trabalho</h2>
				<p className="text-md leading-relaxed">
					Antes de colocar qualquer ideia em código, busco entender bem o
					problema. Organizo as informações, estruturo as ideias e só depois
					transformo tudo isso em uma interface funcional, leve e intuitiva.
					Valorizo a clareza e o equilíbrio entre estética e experiência.
				</p>
			</motion.section>
		</div>
	);
};

export default Sobre;
