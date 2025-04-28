import type { StaticImageData } from "next/image";
import MinhaFoto from "@/assets/minha foto.png";
import Hobbies from "@/assets/Hobbies.svg";

interface Contents {
  id: number;
  titulo: string;
  conteudo: string;
  imagem: StaticImageData;
  alt: string;
}

export const Contents: Contents[] = [
  {
    id: 1,
    titulo: "Quem é o Matheus...",
    conteudo: "Estudo tecnologia desde os 16 e sempre curti criar coisas que tivessem a minha cara. Vejo a programação como uma forma de dar vida a ideias — transformando negócios em experiências que realmente chamam atenção. Hoje estou focado em me especializar como desenvolvedor Front-end, usando ferramentas como React, Next e Tailwind. Também sou apaixonado por design e quero me aprofundar cada vez mais em UX/UI. Gosto de pensar que estou só no começo... e curioso pra ver até onde isso vai me levar.",
    imagem: MinhaFoto,
    alt: "Minha foto de perfil"
  },
  {
    id: 2,
    titulo: "Café, código e curiosidades",
    conteudo: "Sou alguém que acredita que a melhor forma de entender algo é vivendo a experiência. Isso me torna uma pessoa naturalmente eclética, sempre aberta a novas descobertas — tanto na vida quanto no trabalho. Tenho meus favoritos, claro. Futebol é uma paixão antiga e uma das formas mais eficazes de desligar do mundo. No geral, esportes competitivos me encantam pelo desafio e pela energia. Também sou apaixonado por música — mesmo sem tocar nenhum instrumento, me conecto com melodias e letras que combinam com o momento. No fim, gosto do que me faz sentir de verdade. Se vier com aprendizado ou diversão, melhor ainda. :)",
    imagem: Hobbies,
    alt: "Foto com uma bola de futebol, uma raquete e uma nota musical."
  },
]