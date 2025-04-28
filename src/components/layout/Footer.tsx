import Image from "next/image";
import LinkedIn from "@/assets/socialMedia/linkedin.svg";
import Instagram from "@/assets/socialMedia/instagram.svg";
import Github from "@/assets/socialMedia/github.svg";
import Gmail from "@/assets/socialMedia/gmail.svg";

const socialIcons = [
  { src: LinkedIn, alt: "LinkedIn", link: "https://www.linkedin.com/in/mattsm-dev/" },
  { src: Instagram, alt: "Instagram", link: "https://www.instagram.com/mathh.mag/" },
  { src: Github, alt: "Github", link: "https://github.com/MattSM22" },
];

const contactIcons = [
  { src: Gmail, alt: "Gmail", link: "https://mail.google.com/mail/?view=cm&fs=1&to=matheusmagalhaes816@gmail.com&su=Contato" },
];

export default function Footer() {
  return (
    <footer className="bg-modais text-background p-6 rounded-t-2xl flex flex-col max-md:flex-row items-start gap-6 text-sm">
      
      {/* Coluna Social */}
      <div className="flex flex-col gap-3 border-b max-md:border-b-0 max-md:border-r-2 border-bordas pr-0 max-md:pr-6">
        <h3 className="text-lg font-bold">Social</h3>
        <div className="flex gap-4">
          {socialIcons.map((icon, index) => (
            <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
              <Image src={icon.src} alt={icon.alt} />
            </a>
          ))}
        </div>
      </div>

      {/* Coluna Contato */}
      <div className="flex flex-col gap-3 border-b max-md:border-b-0 max-md:border-r-2 border-bordas px-0 max-md:px-6">
        <h3 className="text-lg font-bold">Contato</h3>
        <div className="flex gap-4">
          {contactIcons.map((icon, index) => (
            <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
              <Image src={icon.src} alt={icon.alt} />
            </a>
          ))}
        </div>
      </div>

      {/* Coluna Políticas */}
      <div className="flex flex-col gap-2 pl-0 max-md:pl-6">
        <h3 className="text-lg font-bold">Políticas</h3>
        <p className="text-sm text-background">
          Todos os direitos reservados para Matheus S. Magalhães
        </p>
      </div>
      
    </footer>
  );
}