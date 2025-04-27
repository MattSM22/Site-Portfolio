import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  console.log(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: 'Meu Portfolio <onboarding@resend.dev>',
      to: 'matheusmagdevelop@gmail.com',
      subject: `Novo contato de ${name}`,
      text: `Email: ${email}\nMensagem: ${message}`
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email enviado com sucesso!' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

