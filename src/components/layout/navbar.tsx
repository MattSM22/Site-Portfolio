"use client";

import { useState } from "react";
import Image from "next/image";
import Minhalogo from "@/assets/minhalogo.svg";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Sobre mim", href: "#about-me" },
    { label: "Tecnologias", href: "#technologies" },
    { label: "Carreira", href: "#experiences" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav className="w-full h-20 px-4 flex items-center justify-between bg-background-2 shadow-sm relative z-50">
      {/* Logo + Nome */}
      <div className="flex items-center gap-2">
        <Image src={Minhalogo} alt="Minha logo" className="h-10 w-auto" />
        <h3 className="heading-2 text-center text-titulos text-lg font-bold">
          Matheus Dev
        </h3>
      </div>

      {/* Menu Desktop */}
      <ul className="hidden md:flex flex-row gap-10">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="text-sm text-textos hover:text-blue-400 hover:border-b-2 hover:border-blue-400 transition-all duration-300 ease-in-out"
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {/* Botão Mobile */}
      <button
        className="md:hidden text-titulos z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu Mobile Fullscreen */}
      {isOpen && (
        <div className="fixed inset-0 bg-background-2 flex flex-col items-center justify-center gap-8 z-40 transition-all duration-300">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-2xl text-titulos hover:text-blue-400 transition duration-200 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
