import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Formulário de Cadastro",
  description: "Exemplo de formulário com Next.js e TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
