"use client";

import { useState } from "react";
import { X, Menu } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import Logo from "../../../../public/minhalogo.svg"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-row items-center justify-between px-2 w-[500px]">
      {/* Botão de abrir menu */}
      <div className="flex flex-row items-center justify-center">
        <Image src={Logo} alt="Minha logo" />
        <h3 className="text-sm font-extrabold text-center">Matheus Dev</h3>
      </div>
      <button onClick={toggleMenu} className="max-md:hidden p-2">
        <Menu className="w-6 h-6 text-gray-900" />
      </button>

      {/* Overlay do menu */}
      <div
        className={clsx(
          "fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#dee6ff] transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Botão de fechar */}
        <button onClick={toggleMenu} className="absolute top-0 left-0">
          <X className="w-6 h-6 text-gray-900" />
        </button>

        <nav className="flex flex-col items-center justify-center text-lg font-medium text-gray-900 gap-3">
          <Link href="#sobre" onClick={toggleMenu}>Sobre Mim</Link>
          <Link href="#home" onClick={toggleMenu}>Home</Link>
          <Link href="#tecnologias" onClick={toggleMenu}>Tecnologias</Link>
          <Link href="#carreira" onClick={toggleMenu}>Carreira</Link>
          <Link href="#contato" onClick={toggleMenu}>Contato</Link>
        </nav>
      </div>
    </div>
  );
}