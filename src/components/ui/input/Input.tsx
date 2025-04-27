interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className,
  ...rest
}: InputProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-lg text-textos font-extralight">{label}</label>
      <input
        className={`h-14 w-full text-lg text-textos py-2 px-4 border border-bordas bg-background rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition${
          error ? "border-red-500" : "border-gray-300"
        } ${className ?? ""}`}
        {...rest}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
