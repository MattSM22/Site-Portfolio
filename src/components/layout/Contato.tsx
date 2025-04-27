'use client';
import { useState } from "react";
import Input from "../ui/input/Input";
import InputButton from "../ui/inputButton/InputButton";
import Textarea from "../ui/textarea/Textarea";

interface ContatoProps {
  id?: string;
}

export default function Contato({ id }: ContatoProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  function limpaCampos(){
    setName("");
    setEmail("");
    setMessage("");
  }

  const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMensagemChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/sendMail', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if(res.ok) {
        setResponseMessage("Enviado com sucesso!");
        limpaCampos();
      } else {
        setResponseMessage("Falha ao enviar o email");
      }
    } catch (error) {
      console.error("Erro ao enviar: ", error);
      setResponseMessage("Erro na conexão");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section
      id={id}
      className="min-h-fit w-full px-4 py-6 bg-background-2 flex flex-col items-center justify-start gap-4 sm:px-6 md:px-30 lg:px-20"
    >
      <h1 className="text-4xl text-titulos font-bold text-center">Contato</h1>
      <span className="text-xl text-textos font-light text-center">
        Vamos falar sobre algo?
      </span>

      <form onSubmit={handleSubmit} className="w-full max-sm:w-md flex flex-col justify-center items-center gap-4">
        <Input 
          label="Nome" 
          type="text"
          value={name}
          required
          onChange={handleNomeChange}
        />
        <Input 
          label="E-mail" 
          type="email"
          value={email} 
          required
          onChange={handleEmailChange}
        />
        <Textarea 
          label="Mensagem" 
          maxLength={255} 
          cols={30}
          value={message}
          required
          onChange={handleMensagemChange}
        />

        <div className="w-full flex flex-row items-center justify-between gap-4 mt-2">
          <InputButton type="submit" value={isLoading ? 'Enviando...' : 'Enviar'} />
          <InputButton type="button" value="Limpar" />
        </div>

        {responseMessage && <p className="text-center mt-2">{responseMessage}</p>}
      </form>
    </section>
  );
}