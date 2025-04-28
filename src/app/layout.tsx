import { Poppins } from "@next/font/google";
import "@/styles/globals.css";
import "@/styles/_typograph.css";
import Head from "next/head";

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Head>
        <title>Matheus DEV</title>
        <link rel="icon" type="image/svg+xml" href="/minhalogo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={poppins.variable}>
        {children}
      </body>
    </html>
  );
}
