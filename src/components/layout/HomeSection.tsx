"use client";

import Image from "next/image";
import Waves from "@/assets/Waves.svg";
import { Download } from "lucide-react";
import { Botao } from "@/components/ui/botao";

interface HomeSectionProps {
  id?: string;
}

export default function HomeSection({ id }: HomeSectionProps) {
  function handleDownload() {
    const pdfUrl =
      "https://docs.google.com/document/d/1DdWlOZWpb02I_lCO9nTUxIj5CwGwc1gM6UQIV5ZNF4k/export?format=pdf";
    const a = document.createElement("a");
    a.href = pdfUrl;
    a.target = "_blank";
    a.download = "Curriculo Matheus Silva Magalhães - 2025.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  function handleScrollContact() {
    const contactSection = document.getElementById("contato");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id={id}
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 text-center gap-6 bg-background-2"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-titulos max-w-3xl">
        Transformar ideias em visual para o mundo
      </h1>

      <p className="text-lg md:text-xl text-textos font-light">
        Desenvolvedor Front-end e designer UX/UI
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 mt-4">
        <Botao.Root
          typeButton="filled"
          texto="Curriculo"
          onClick={handleDownload}
        >
          <Botao.Icon icon={Download} hasIcon />
        </Botao.Root>
        <Botao.Root
          typeButton="outline"
          texto="Contato"
          onClick={handleScrollContact}
        >
          <Botao.Icon icon={Download} hasIcon={false} />
        </Botao.Root>
      </div>

      <div className="absolute bottom-0 w-full -z-10">
        <Image src={Waves} alt="Waves" className="w-full h-auto" />
      </div>
    </section>
  );
}
