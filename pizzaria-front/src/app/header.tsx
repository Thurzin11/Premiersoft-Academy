import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="border-none bg-red-500 h-[10vh] flex items-center justify-around border">
      <Link href={'/'} className="w-[60%]">La Bella Pizza</Link>
      <nav className="w-[30%]">
        <ul>
          <li className="flex justify-around">
            <Link href={"/pizzas"}>Pizzas</Link>
            <Link href={"/categories"}>Categorias</Link>
            <Link href={"/cart"}>Carrinho</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
