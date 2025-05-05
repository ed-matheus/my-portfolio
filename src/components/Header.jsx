import Link from "next/link";
import React from "react";

const Header = () => {
  // Lista com path e nome de cada item do menu (navegação)
  const menuItems = [
    { id: 0, path: "/", name: "Home" },
    { id: 1, path: "/sobre", name: "Sobre" },
    { id: 2, path: "/projetos", name: "Projetos" },
    { id: 3, path: "/contato", name: "Contato" },
  ];

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
    </header>
  );
};

export default Header;
