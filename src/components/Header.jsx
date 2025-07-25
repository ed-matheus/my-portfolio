"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";

// Componentes
import Button from "./Button";

// Ícones
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const pathname = usePathname(); // CORRIGIDO
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/sobre", name: "Sobre" },
    { id: 3, path: "/projetos", name: "Projetos" },
    { id: 4, path: "/contato", name: "Contato" },
  ];

  const iconBars = <FontAwesomeIcon icon={faBars} className="w-5 h-5" />;
  const iconClose = <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />;

  return (
    <header className="flex justify-between items-center px-6 md:px-5 lg:px-10 xl:px-20 py-5 text-light bg-dark border-b-2 border-cyan relative z-50">
      {/* Logo */}
      <Link
        href="/"
        className="text-cyan text-xl md:text-[1.2rem] font-black"
      >
        Matheus Costa
      </Link>

      {/* Menu Desktop */}
      <nav className="hidden md:flex">
        <ul className="flex gap-10 font-black">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className={`relative transition-colors ${
                    isActive ? "text-cyan" : "hover:text-cyan-h"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 w-full h-[2px] bg-cyan"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Botão de Download Desktop */}
      <a
        href="/files/Currículo - Edson Matheus.pdf"
        download
        className="hidden md:flex"
      >
        <Button type="button" text={"Baixar CV"} />
      </a>

      {/* Botão Hamburger Mobile */}
      <button
        type="button"
        className="md:hidden text-cyan cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        {menuOpen ? iconClose : iconBars}
      </button>

      {/* Menu Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-full left-0 w-full bg-dark px-5 py-6 flex flex-col gap-6 md:hidden font-bold"
          >
            {menuItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.id}
                  href={item.path}
                  className={`${
                    isActive ? "text-cyan" : "hover:text-cyan"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="/files/Currículo - Edson Matheus.pdf"
              download
              className="w-fit"
            >
              <Button type="button" text="Baixar CV" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
