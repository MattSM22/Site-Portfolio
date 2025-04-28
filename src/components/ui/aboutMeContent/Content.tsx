import Image, { type StaticImageData } from "next/image";

interface ContentProps {
  titulo: string;
  conteudo: string;
  imagem: StaticImageData;
  alt: string;
}

export default function Content({ titulo, conteudo, imagem, alt }: ContentProps) {
  return (
    <article className="flex flex-col-reverse max-md:flex-row items-center justify-center gap-10 max-w-[1170px] px-4 py-10">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <h3 className="heading-1 sm:text-lg md:text-xl lg:text-2xl">{titulo}</h3>
        <p className="body-text text-justify md:text-left">
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