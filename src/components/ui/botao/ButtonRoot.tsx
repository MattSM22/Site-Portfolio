import type { ReactNode } from "react";

interface ButtonRootProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  texto: string;
  typeButton: string;
  children: ReactNode;
}

export default function ButtonRoot({
  children,
  texto,
  typeButton,
  ...rest
}: ButtonRootProps) {
  return (
    <>
      {typeButton == "filled" ? (
        <button
          className="flex flex-row justify-center items-center w-36 h-[50px] p-5 gap-3 
                     rounded-3xl bg-textos text-background text-xs font-black cursor-pointer 
                   hover:bg-blue-500 transition-colors duration-500 ease-in-out"
          {...rest}
        >
          {texto}
          {children}
        </button>
      ) : (
        <button
          className="flex flex-row justify-center items-center w-36 h-[50px] p-5 gap-3
             rounded-3xl border-2 border-textos text-textos text-xs font-black cursor-pointer 
             hover:border-blue-500 hover:text-blue-500 transition-colors duration-500 ease-in-out"
          {...rest}
        >
          {texto}
          {children}
        </button>
      )}
    </>
  );
}

/* 
  BUTTON = max-sm:rounded-xl

*/
