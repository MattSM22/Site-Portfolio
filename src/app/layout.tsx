import "@/styles/globals.css";

/*
import { Poppins } from "next/font/google";
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
}) as { variable: string };
*/

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
