import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./header";

export default function RootLayout({
  children,
}:{
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
