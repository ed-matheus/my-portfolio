import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importando FontAwesome

// Ícones do FontAwesome
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full p-8 bg-light flex justify-around items-center text-dark">
      <p className="text-sm md:text-lg font-medium">
        © 2025 Edson Matheus. Todos os direitos reservados.
      </p>

      {/* Redes Sociais */}
      <div className="flex items-center gap-4 ms-5 text-light">
        <a
          href="https://www.linkedin.com/in/edson-matheus-b5a0171ba/"
          target="__blank"
        >
          <button
            type="button"
            className="bg-dark p-2 rounded-full cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="w-[1rem] p-1 text-md"
            />
          </button>
        </a>

        <a href="https://github.com/ed-matheus" target="__blank">
          <button
            type="button"
            className="bg-dark p-2 rounded-full cursor-pointer"
          >
            <FontAwesomeIcon icon={faGithub} className="w-[1rem] p-1" />
          </button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
