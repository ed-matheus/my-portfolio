"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Componentes
import Button from "./Button";

// Ícones
import { faDownload, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/sobre", name: "Sobre" },
    { id: 3, path: "/projetos", name: "Projetos" },
    { id: 4, path: "/contato", name: "Contato" },
  ];

  const iconDownload = (
    <FontAwesomeIcon icon={faDownload} className="w-[1rem]" />
  );
  const iconBars = <FontAwesomeIcon icon={faBars} className="w-5 h-5" />;
  const iconClose = <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />;

  return (
    <header className="flex justify-between items-center px-5 md:px-18 py-5 text-light bg-dark border-b-2 border-green-500 relative z-50">
      {/* Logo */}
      <Link href="/" className="text-green-500 text-xl font-black">
        Matheus Costa
      </Link>

      {/* Menu Desktop */}
      <nav className="hidden md:flex">
        <ul className="flex gap-10 font-black">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link href={item.path} className="hover:text-green-500">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Botão de Download Desktop */}
      <a
        href="/files/Currículo - Edson Matheus.pdf"
        download
        className="hidden md:flex"
      >
        <Button type="button" text={"Baixar CV"} icon={iconDownload} />
      </a>

      {/* Botão Hamburger Mobile */}
      <button
        type="button"
        className="md:hidden text-green-500"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        {menuOpen ? iconClose : iconBars}
      </button>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-dark border-t-2 border-green-500 px-5 py-6 flex flex-col gap-6 md:hidden font-bold">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className="hover:text-green-500"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/files/Currículo - Edson Matheus.pdf"
            download
            className="w-fit"
          >
            <Button type="button" text="Baixar CV" icon={iconDownload} />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
