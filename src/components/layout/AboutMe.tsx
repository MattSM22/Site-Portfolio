"use client";

import Image, { type StaticImageData } from "next/image";
import Bubbles from "../../../public/Bubbles.svg";
import Content from "../ui/aboutMeContent/Content";

import { Contents } from "@/data/Contents";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel/carousel";

type Content = {
  id: number;
  titulo: string;
  conteudo: string;
  imagem: StaticImageData;
  alt: string;
};

interface AboutMeProps {
  id?: string;
}

export default function AboutMe({ id }: AboutMeProps) {
  const isMobile = useIsMobile("md");
  const [content, setContent] = useState<Content[]>([]);

  useEffect(() => {
    setContent(Contents);
  }, [Contents]);

  return (
    <section
      id={id}
      className="relative max-h-fit bg-background-2 flex flex-col items-center gap-20 pb-40 max-sm:px-10 max-sm:py-20 max-sm:min-h-screen"
    >
      {isMobile ? (
        <Carousel className="w-full max-w-md mx-auto">
          <CarouselContent>
            {content.map((contents) => (
              <CarouselItem key={contents.id}>
                <Content  
                  titulo={contents.titulo}
                  conteudo={contents.conteudo}
                  imagem={contents.imagem}
                  alt={contents.alt}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      ) : (
        content.map((contents) => (
          <Content
            key={contents.id}
            titulo={contents.titulo}
            conteudo={contents.conteudo}
            imagem={contents.imagem}
            alt={contents.alt}
          />
        ))
      )}

      <Image
        className="absolute -z-0 max-sm:h-screen"
        src={Bubbles}
        alt="Bolhas para o fundo da página"
      />
    </section>
  );
}
