import { experiencesArray } from "@/data/experiences";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion";

interface ExperiencesProps {
  id?: string;
}

export default function Experiencies({ id }: ExperiencesProps) {
  return (
    <section
      id={id}
      className="min-h-screen w-full bg-background-2 flex flex-col gap-6 items-center justify-start px-6 md:px-12 lg:px-20 py-16"
    >
      <h1 className="text-3xl sm:text-4xl text-titulos font-bold text-center">
        Experiências
      </h1>
      <span className="text-lg sm:text-xl text-textos font-light text-center">
        Minha trajetória...
      </span>

      <div className="bg-background border-2 border-bordas rounded-xl w-full max-w-3xl p-5 flex flex-col gap-4">
        {/* Accordion no mobile */}
        <div className="block md:hidden">
          <Accordion type="single" collapsible>
            {experiencesArray.map((experience) => (
              <AccordionItem
                key={experience.id}
                value={`item-${experience.id}`}
              >
                <AccordionTrigger>
                  <div className="flex flex-col text-left">
                    <h3 className="text-base font-semibold text-titulos">
                      {experience.empresa}
                    </h3>
                    <h4 className="text-sm font-light text-textos">
                      {experience.cargo}
                    </h4>
                    <span className="text-xs text-muted-foreground">
                      {experience.periodo}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-textos text-justify">
                    {experience.descricao}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Carousel no tablet e desktop */}
        <div className="hidden md:block">
          <Carousel>
            <CarouselContent>
              {experiencesArray.map((experience) => (
                <CarouselItem key={experience.id}>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl text-titulos font-bold">
                      {experience.cargo}
                    </h3>
                    <span className="text-md text-legendas font-light">
                      {experience.empresa}
                    </span>
                    <span className="text-sm text-legendas font-light">
                      {experience.periodo}
                    </span>
                    <p className="text-base text-textos font-light text-justify mt-2">
                      {experience.descricao}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
