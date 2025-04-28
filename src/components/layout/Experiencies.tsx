import { experiencesArray } from "@/data/experiences";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel/carousel";
import { useIsMobile } from "@/hooks/useIsMobile";
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
  const isMobile = useIsMobile("sm");
  return (
    <section
      id={id}
      className="min-h-fit bg-background-2 flex flex-col gap-4 items-center justify-start md:px-30"
    >
      <h1 className="text-4xl text-titulos font-bold">Experiências</h1>
      <span className="text-xl text-textos font-light">
        Minha trajetória...
      </span>
      <div className="bg-background border-2 border-bordas rounded-xl max-h-[1080px] max-w-[750px] p-5 flex flex-col gap-2">
        {isMobile ? (
          <Accordion type="single" collapsible>
            {experiencesArray.map((experiences) => (
              <AccordionItem key={experiences.id} value={`item-${experiences.id}`}>
                <AccordionTrigger>
                  <div>
                    <h3 className="text-lg font-semibold">
                      {experiences.empresa}
                    </h3>
                    <h4 className="text-md font-light">
                      {experiences.cargo}
                    </h4>
                    <span className="text-xs text-muted-foreground">
                      {experiences.periodo}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>{experiences.descricao}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <Carousel>
            <CarouselContent>
              {experiencesArray.map((experiences) => (
                <CarouselItem key={experiences.id}>
                  <h3 className="text-2xl text-titulos font-bold">
                    {experiences.cargo}
                  </h3>
                  <span className="text-sm text-legendas font-light">
                    {experiences.empresa}
                  </span>
                  <span className="text-sm text-legendas font-light">
                    {experiences.periodo}
                  </span>
                  <p className="text-xl text-textos font-light text-justify">
                    {experiences.descricao}
                  </p>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </div>
    </section>
  );
}
