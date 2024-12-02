import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Main from "@/components/layout/Main";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </div>
  );
}
