"use client";
import { getPizzasByName } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface ListPizzaProps {
  pizza: IPizza[];
  category: ICategory;
  token: string;
}

const ListPizzas: React.FC<ListPizzaProps> = ({ pizza, category, token }) => {
  const [nomeSearch, setNomeSearch] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [pizzas, setPizzas] = useState<IPizza[]>(pizza);

  const handleSearch = () => {
    setShowSearch(!showSearch);
    if (showSearch) {
      setNomeSearch("");
    }
  };

  useEffect(() => {
    const fetchPizza = async () => {
      if (nomeSearch === "") {
        setPizzas(pizza);
        return;
      }
      setPizzas(await getPizzasByName(nomeSearch, token));
    };
    fetchPizza();
  }, [nomeSearch]);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl w-[100%] font-bold text-gray-800 text-start">
          Lista de Pizzas {category.name ? "da Categoria " + category.name : ""}
        </h1>
        <div className="w-[30%] flex justify-between">
          <Link
            href={"pizzas/new"}
            className={`bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 h-[50%] w-[70%] text-center ${showSearch ? "hidden" : ""}`}
          >
            Criar nova Pizza
          </Link>
          <input
            onChange={(e) => {
              setNomeSearch(e.target.value);
            }}
            value={nomeSearch}
            type="text"
            placeholder="Informe o nome da pizza"
            className={`p-1 w-[80%] border rounded-md ${showSearch ? "" : "hidden"}`}
          />
          <span onClick={handleSearch}>
            <Image
              className="cursor-pointer"
              src={"/assets/lupa.png"}
              alt="lupa-search"
              width={40}
              height={40}
            />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pizzas.length > 0 ? (
          pizzas.map((pizza) => (
            <Link
              href={`/pizzas/${pizza.id}`}
              key={pizza.id}
              className="p-4 bg-gray-50 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <h2 className="text-xl font-bold text-gray-700 mb-2">
                {pizza.name}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{pizza.description}</p>
              <p className="text-gray-800 font-bold mb-2">R$ {pizza.price}</p>
              <p
                className={`mb-2 font-medium ${
                  pizza.isAvailable ? "text-green-600" : "text-red-600"
                }`}
              >
                {pizza.isAvailable ? "Disponível" : "Indisponível"}
              </p>
            </Link>
          ))
        ) : (
          <p>Nenhuma pizza com esta categoria</p>
        )}
      </div>
    </div>
  );
};

export default ListPizzas;
