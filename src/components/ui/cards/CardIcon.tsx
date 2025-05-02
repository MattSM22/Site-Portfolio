import Image from "next/image";

interface CardIconProps {
  icon: HTMLImageElement;
  title: string;
}

export default function CardIcon({ title, icon: Icon }:  CardIconProps) {
  return (
    <div className="flex flex-row justify-start items-center h-[50px] gap-4">
      <Image
        className="w-[30px] h-[30px]"
        src={Icon}
        alt="Icone do Next.js"
        width={50}
        height={50}
      />
      <label className="text-lg text-titulos font-extrabold sm:text-sm md:text-md lg:text-lg">{title}</label>
    </div>
  );
}
