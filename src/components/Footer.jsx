import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importando FontAwesome

// Ícones do FontAwesome
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full p-5 bg-light flex flex-col justify-around items-center text-dark">
      <p className="w-100 text-sm text-center md:text-md font-medium">
        © 2026 Matheus Costa. <br /> Todos os direitos reservados.
      </p>

      {/* Redes Sociais */}
      <div className="w-100 flex items-center justify-center gap-4 mt-4 text-light">
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
              className="w-[1rem] p-0.8 text-md"
            />
          </button>
        </a>

        <a href="https://github.com/ed-matheus" target="__blank">
          <button
            type="button"
            className="bg-dark p-2 rounded-full cursor-pointer"
          >
            <FontAwesomeIcon 
              icon={faGithub} 
              className="w-[1rem] p-0.8 text-md" 
            />
          </button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
