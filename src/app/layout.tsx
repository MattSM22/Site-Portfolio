import "@/styles/globals.css";

export const metadata = {
  title: "Matheus DEV",
  description: "Portfólio",
  icons: {
    icon: "/minhalogo.svg",
  },
};

// Permitir propriedades adicionais de forma flexível
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans`}>
        {children}
      </body>
    </html>
  );
}
