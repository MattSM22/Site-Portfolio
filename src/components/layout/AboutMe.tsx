"use client";

import Image, { type StaticImageData } from "next/image";
import Bubbles from "@/assets/Bubbles.svg";
import Content from "@/components/ui/aboutMeContent/Content";

import { Contents } from "@/data/Contents";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel/carousel";

type ContentType = {
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
  const [content, setContent] = useState<ContentType[]>([]);

  useEffect(() => {
    setContent(Contents);
  }, []);

  return (
    <section
      id={id}
      className="relative w-full bg-background-2 flex flex-col items-center gap-16 px-6 md:px-12 lg:px-20 py-16"
    >
      {/* Carousel no mobile */}
      <div className="block md:hidden w-full">
        <Carousel className="w-full">
          <CarouselContent>
            {content.map((item) => (
              <CarouselItem key={item.id}>
                <Content  
                  titulo={item.titulo}
                  conteudo={item.conteudo}
                  imagem={item.imagem}
                  alt={item.alt}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Lista no tablet/desktop */}
      <div className="hidden md:flex flex-col gap-12 w-full max-w-6xl justify-center items-center">
        {content.map((item) => (
          <Content
            key={item.id}
            titulo={item.titulo}
            conteudo={item.conteudo}
            imagem={item.imagem}
            alt={item.alt}
          />
        ))}
      </div>

      {/* Bolhas decorativas (desktop) */}
      <Image
        className="absolute -z-0 hidden md:block w-[400px] lg:w-[600px] bottom-0 right-0 opacity-50"
        src={Bubbles}
        alt="Bolhas para o fundo da página"
      />
    </section>
  );
}
