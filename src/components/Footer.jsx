import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importando FontAwesome

// Ícones do FontAwesome
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full py-5 px-8 bg-green-500 flex justify-between items-center">
      <p className="text-sm font-medium text-light">
        Site desenvolvido totalmente em código com Next.js, pelo próprio{" "}
        <span className="text-dark font-bold">Edson Matheus</span>
      </p>

      {/* Redes Sociais */}
      <div className="flex items-center gap-4 ms-5">
        <a
          href="https://www.linkedin.com/in/edson-matheus-b5a0171ba/"
          target="__blank"
        >
          <button
            type="button"
            className="bg-dark-500 p-2 rounded-full hover:cursor-pointer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="w-[1rem]" />
          </button>
        </a>

        <a href="https://github.com/ed-matheus" target="__blank">
          <button
            type="button"
            className="bg-dark-500 p-2 rounded-full hover:cursor-pointer"
          >
            <FontAwesomeIcon icon={faGithub} className="w-[1rem]" />
          </button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
