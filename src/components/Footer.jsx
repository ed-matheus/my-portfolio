import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importando FontAwesome

// Ícones do FontAwesome
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full py-5 px-30 bg-blue-300 flex justify-between items-center">
      <h2 className="text-sm">Site desenvolvido por Edson Matheus</h2>

      {/* Redes Sociais */}
      <div className="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/edson-matheus-b5a0171ba/"
          target="__blank"
        >
          <button
            type="button"
            className="bg-dark-400 p-2 rounded-full hover:cursor-pointer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="w-[1rem]" />
          </button>
        </a>

        <a href="https://github.com/ed-matheus" target="__blank">
          <button
            type="button"
            className="bg-dark-400 p-2 rounded-full hover:cursor-pointer"
          >
            <FontAwesomeIcon icon={faGithub} className="w-[1rem]" />
          </button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
