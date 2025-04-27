"use client";
import Image from "next/image";
import BlopRightBottom from "../../../public/BlopRightBottom.svg";
import BlopLeftTop from "../../../public/BlopLeftTop.svg";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/cards";
import { technologiesArray } from "@/data/technologies";
import { useIsMobile } from "@/hooks/useIsMobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel/carousel";

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
  const isMobile = useIsMobile("sm");
  const [technologies, setTechnologies] = useState<Technologies[]>([]);

  useEffect(() => {
    setTechnologies(technologiesArray);
  }, [technologiesArray]);

  return (
    <section
      id={IdSection}
      className="relative h-full pb-60 bg-background-2 flex flex-col gap-3 items-center justify-center"
    >
      <Image
        className="absolute top-0 left-0 w-[300px] sm:w-[400px] opacity-60 z-0 max-sm:hidden md:hidden"
        src={BlopLeftTop}
        alt="Um blop"
      />
      <h1 className="text-4xl text-titulos font-bold max-sm:text-center">
        Habilidade e Tecnologias
      </h1>
      <span className="text-xl text-textos font-light my-2">
        Buscando aprimoramento nas tecnologias...
      </span>
      <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1 max-sm:ml-3 md:grid-cols-2 lg:grid-cols-3 lg:px-6">
        {isMobile ? (
          <Carousel orientation="horizontal">
            <CarouselContent>
              {technologies.map((tecnologie) => (
                <CarouselItem key={tecnologie.id}>
                  <Card.Root key={tecnologie.id}>
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
        ) : (
          technologies.map((technologies) => (
            <Card.Root key={technologies.id}>
              <Card.Icon icon={technologies.icon} title={technologies.title} />
              <Card.Content description={technologies.description} />
            </Card.Root>
          ))
        )}
      </div>
      <Image
        className="absolute bottom-0 right-0 w-[300px] sm:w-[400px] opacity-60 z-0 max-sm:hidden md:hidden"
        src={BlopRightBottom}
        alt="Um blop"
      />
    </section>
  );
}
