'use client'

import Image from "next/image";
import Waves from "../../../public/Waves.svg";
import { Download } from "lucide-react";
import { Botao } from "../ui/botao";

interface HomeSectionProps {
  id?: string
}


export default function HomeSection({ id }: HomeSectionProps) {

  function handleDownload() {
    const pdfUrl = "https://docs.google.com/document/d/1DdWlOZWpb02I_lCO9nTUxIj5CwGwc1gM6UQIV5ZNF4k/export?format=pdf";
    console.log(pdfUrl);
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.target = "_blank";
    a.download = 'Curriculo Matheus Silva Magalhães - 2025.pdf';

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  function handleScrollContact(){
    const a = document.createElement('a');
    a.href="#contato";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <section id={id} className="h-dvh relative flex flex-col items-center justify-start pt-28 gap-6 z-10 max-sm:w-full max-sm:items-center max-sm:justify-center max-sm:h-screen max-sm:pt-0 max-md:w-full max-md:items-center max-md:justify-center max-md:h-screen max-md:pt-0">
      <h1 className="text-4xl font-bold text-titulos w-[742px] text-center max-sm:text-xl max-sm:w-full">
        Transformar ideias em visual para o mundo
      </h1>
      <p className="text-xl text-textos font-light max-sm:text-xs">
        Desenvolvedor Front-end e designer UX/UI
      </p>
      <div className="flex flex-row w-full items-center justify-center gap-16 max-sm:flex-col max-sm:gap-8">
        <Botao.Root typeButton="filled" texto="Curriculo" onClick={handleDownload}>
          <Botao.Icon icon={Download} hasIcon />
        </Botao.Root>
        <Botao.Root typeButton="outline" texto="Contato" onClick={handleScrollContact}>
          <Botao.Icon icon={Download} hasIcon={false} />
        </Botao.Root>
      </div>
      <div className="absolute w-full bottom-0 left-1/2 -translate-x-1/2 -z-10">
        <Image className="w-full" src={Waves} alt="Waves" />
      </div>
    </section>
  );
}
