import type { ReactNode } from "react";

interface CardRootProps {
  children: ReactNode;
}

export default function CardRoot({ children }: CardRootProps) {
  return (
    <div className="p-4 gap-4 flex flex-col items-start justify-center bg-background border-2 border-bordas rounded-xl md:w-[250px] md:h-[212px] lg:w-[350] lg:h-[212] ">
      { children }
    </div>
  );
}
