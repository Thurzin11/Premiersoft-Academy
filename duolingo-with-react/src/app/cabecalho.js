"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import logo from "./assets/logo.svg";
import mundo from "./assets/mundo.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function cabecalho() {
  const languages = [
    "Spanish",
    "French",
    "German",
    "Italian",
    "Portuguese",
    "Dutch",
    "Japanese",
    "Russian",
    "Korean",
  ];

  return (
    <header className="bg-backgroundSecondary">
      <header className="flex justify-around h-[10vh] items-center">
        <Image className="" src={logo} alt="Logo" width={100} height={100} />
        <select className="text-white bg-backgroundSecondary">
          <option value="English" key="English">
            English
          </option>
          <option value="Portuguese" key="Portuguese">
            Portuguese
          </option>
        </select>
      </header>
      <main
        id="fundo-header"
        className="h-[80vh] flex items-center justify-around text-white "
      >
        <div className="">
          <Image src={mundo} alt="Mundo Header" width={360} height={360} />
        </div>
        <div className="flex flex-col justify-around items-center h-[50%] ">
          <p className="text-xl font-bold w-[70%] text-center">
            The free, fun, and effective way to learn a language!
          </p>
          <div className="flex flex-col gap-4">
            <button className="border border-black font-bold bg-green-600 rounded-md p-1">
              Get Started
            </button>
            <button className="border border-black font-bold rounded-md p-1 bg-backgroundSecondary">
              I already have an account
            </button>
          </div>
        </div>
      </main>
      <footer className=" text-white flex justify-center items-center h-[10vh]">
        <CarouselSpacing className="w-[100%]" languages={languages} />
      </footer>
    </header>
  );
}

export function CarouselSpacing({ languages }) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true 
    })
  );
  return (
    <Carousel
      className=" w-[90%]"
      plugins={[plugin.current]}
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
      opts={{ loop: true }}
    >
      <CarouselContent className="">
        {languages.map((language, index) => (
          <CarouselItem key={index} className="basis-1/3">
            <div key={language} className="p-1 flex justify-center">
              <span className="text-2xl font-semibold ">{language}</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-transparent" />
      <CarouselNext className="bg-transparent" />
    </Carousel>
  );
}
