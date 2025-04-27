interface InputButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  icon?: HTMLImageElement;
}

export default function InputButton({
  value,
  icon: Icon,
  ...rest
}: InputButtonProps) {
  return (
    <>
      <input
        className="h-16 py-5 px-10 text-center font-bold bg-botoes border 
                  border-background rounded-xl hover:bg-blue-500 
                  transition-colors duration-300 ease-in-out cursor-pointer
                  focus:ring-2 focus:ring-blue-600 focus:outline-none"
        value={value}
        {...rest}
      />
    </>
  );
}
