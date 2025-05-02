import Image, { type StaticImageData } from "next/image";

interface ContentProps {
  titulo: string;
  conteudo: string;
  imagem: StaticImageData;
  alt: string;
}

export default function Content({ titulo, conteudo, imagem, alt }: ContentProps) {
  return (
    <article className="flex flex-row items-center justify-center gap-8 max-w-[800px] px-4 py-10 max-md:flex-col-reverse">
      <div className="flex flex-col gap-4 text-center">
        <h3 className="text-xl text-titulos font-bold leading-tight sm:text-lg md:text-xl lg:text-2xl">{titulo}</h3>
        <p className="text-base text-textos leading-snug text-justify">
          {conteudo}
        </p>
      </div>

      <Image
        className="z-10 w-full max-w-[300px] md:max-w-[200px] md:max-h-[200px]"
        src={imagem}
        alt={alt}
      />
    </article>
  );
}