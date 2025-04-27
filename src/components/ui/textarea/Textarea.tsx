"use client";
import { useState } from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export default function Textarea({ label, ...rest }: TextareaProps) {
  const [caractersCounter, setCaractersCounter] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  function onChangeHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const newMessage = event.target.value;
    setMessage(newMessage);
    setCaractersCounter(newMessage.length);
  }

  return (
    <>
      <div className="relative flex flex-col gap-2 w-full">
        <label className="text-lg text-textos font-extralight">{label}</label>
        <textarea
          className="h-30 w-full text-lg text-textos py-2 px-4 border border-bordas bg-background rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
          value={message}
          onChange={onChangeHandler}
          {...rest}
        />
        <span className="absolute bottom-0 right-0 px-2">
          {caractersCounter} / 255
        </span>
      </div>
    </>
  );
}
