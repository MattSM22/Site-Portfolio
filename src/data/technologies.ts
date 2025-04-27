import Next from "../../public/devIcons/next.svg"
import React from "../../public/devIcons/react.svg"
import Typescript from "../../public/devIcons/typescript.svg"
import HTML5 from "../../public/devIcons/html.svg"
import CSS3 from "../../public/devIcons/css.svg"
import Tailwind from "../../public/devIcons/tailwind.svg"
import Figma from "../../public/devIcons/figma.svg"

interface TechnologiesTypes {
  id: number;
  title: string;
  icon: HTMLImageElement;
  description: string;
}

export const technologiesArray: TechnologiesTypes[] = [
  {
    id: 1,
    title: "Next.js",
    icon: Next,
    description: "Um framework capaz de criar aplicações web interativas e com alto desempenho."
  },
  {
    id: 2,
    title: "React.js",
    icon: React,
    description: "Um dos frameworks mais conhecidos para desenvolvimento web, foi criado pelo Facebook (atual Meta) em 2013."
  },
  {
    id: 3,
    title: "Typescript",
    icon: Typescript,
    description: "Feito para se usar com o Javascript para tornar mais eficiente o desenvolvimento."
  },
  {
    id: 4,
    title: "HTML 5",
    icon: HTML5,
    description: "Uma linguagem de marcação e estruturação de conteúdos web."
  },
  {
    id: 5,
    title: "CSS 3",
    icon: CSS3,
    description: "É uma linguagem de estilo para páginas web, melhora a acessibilidade e aparência das aplicações web."
  },
  {
    id: 6,
    title: "Tailwind",
    icon: Tailwind,
    description: "Um framework potente para estilização utilizando classes predefinidas. Atualmente torna mais rápido e eficiente."
  },
  {
    id: 7,
    title: "Figma",
    icon: Figma,
    description: "É uma plataforma de criação de protótipos e interfaces permitindo a colaboração entre designers."
  },
];