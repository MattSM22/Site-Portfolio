import Image from "next/image";
import Minhalogo from "@/assets/minhalogo.svg";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full h-20 px-3 flex flex-row items-center">
      <div className="flex flex-row basis-1/3 items-center">
        <Image src={Minhalogo} alt="Minha logo" />
        <h3 className="text-xl text-center">Matheus Dev</h3>
      </div>
      <ul className="flex flex-row basis-2/3 gap-20">
        <li className="text-xs text-textos font-sans hover:text-blue-400 hover:border-b-2 hover:border-blue-400 transition-all duration-300 ease-in-out">
          <Link href="#home">Home</Link>
        </li>
        <li className="text-xs text-textos font-sans hover:text-blue-400 hover:border-b-2 hover:border-blue-400 transition-all duration-300 ease-in-out">
          <Link href="#about-me">Sobre mim</Link>
        </li>
        <li className="text-xs text-textos font-sans hover:text-blue-400 hover:border-b-2 hover:border-blue-400 transition-all duration-300 ease-in-out">
          <Link href="#technologies">Tecnologias</Link>
        </li>
        <li className="text-xs text-textos font-sans hover:text-blue-400 hover:border-b-2 hover:border-blue-400 transition-all duration-300 ease-in-out">
          <Link href="#experiences">Carreira</Link>
        </li>
        <li className="text-xs text-textos font-sans hover:text-blue-400 hover:border-b-2 hover:border-blue-400 transition-all duration-300 ease-in-out">
          <Link href="#contato">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}
