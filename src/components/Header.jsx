import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Componentes
import Button from "./Button";

// Ícones
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  // Lista com path e nome de cada item do menu (navegação)
  const menuItems = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/sobre", name: "Sobre" },
    { id: 3, path: "/projetos", name: "Projetos" },
    { id: 4, path: "/contato", name: "Contato" },
  ];

  // Ícone a ser passado para o componente 'Button'
  const iconName = <FontAwesomeIcon icon={faDownload} className="w-[1rem]"/>

  return (
    <header className="flex justify-between items-center px-18 py-7 text-light bg-dark border-b-2 border-green-500">
      <Link href={"/"} className="text-green-500 text-xl font-black">
        Matheus Costa
      </Link>

      <nav>
        <ul className="flex gap-15 font-black">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link href={`${item.path}`} className="hover:text-green-500">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <a href="/files/Currículo - Edson Matheus.pdf" download className="flex">
        <Button type="button" text={"Baixar CV"} icon={iconName} />
      </a>
    </header>
  );
};

export default Header;
