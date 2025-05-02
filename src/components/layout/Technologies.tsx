"use client";
import Image from "next/image";
import BlopRightBottom from "@/assets/BlopRightBottom.svg";
import BlopLeftTop from "@/assets/BlopLeftTop.svg";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/cards";
import { technologiesArray } from "@/data/technologies";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel/carousel";

type Technologies = {
  id: number;
  title: string;
  icon: HTMLImageElement;
  description: string;
};

interface TechnologiesProps {
  id?: string;
}

export default function Technologies({ id: IdSection }: TechnologiesProps) {
  const [technologies, setTechnologies] = useState<Technologies[]>([]);

  useEffect(() => {
    setTechnologies(technologiesArray);
  }, []);

  return (
    <section
      id={IdSection}
      className="relative w-full min-h-screen bg-background-2 flex flex-col gap-6 items-center justify-center px-6 md:px-12 lg:px-20 py-12"
    >
      {/* Blop top-left */}
      <Image
        className="absolute top-0 left-0 w-[200px] md:w-[300px] opacity-60 z-0 hidden sm:block"
        src={BlopLeftTop}
        alt="Um blop"
      />

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl text-titulos font-bold text-center">
        Habilidade e Tecnologias
      </h1>
      <span className="text-lg sm:text-xl text-textos font-light text-center">
        Buscando aprimoramento nas tecnologias...
      </span>

      {/* Technologies grid / carousel */}
      <div className="w-full">
        {/* Carousel no mobile */}
        <div className="block sm:hidden">
          <Carousel orientation="horizontal">
            <CarouselContent>
              {technologies.map((tecnologie) => (
                <CarouselItem key={tecnologie.id}>
                  <Card.Root>
                    <Card.Icon
                      icon={tecnologie.icon}
                      title={tecnologie.title}
                    />
                    <Card.Content description={tecnologie.description} />
                  </Card.Root>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Grid no tablet e desktop */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tecnologie) => (
            <Card.Root key={tecnologie.id}>
              <Card.Icon
                icon={tecnologie.icon}
                title={tecnologie.title}
              />
              <Card.Content description={tecnologie.description} />
            </Card.Root>
          ))}
        </div>
      </div>

      {/* Blop bottom-right */}
      <Image
        className="absolute bottom-0 right-0 w-[200px] md:w-[400px] opacity-60 z-0 hidden sm:block"
        src={BlopRightBottom}
        alt="Um blop"
      />
    </section>
  );
}
