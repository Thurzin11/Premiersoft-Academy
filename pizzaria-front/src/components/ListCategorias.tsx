"use client";
import { getCategories, getCategoriesByName } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface props {
  token: string;
}

const ListCategorias = ({ token }: props) => {
  const [nomeSearch, setNomeSearch] = useState<string>("");
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(()=>{
    const fetchCategories = async () => {
      if (nomeSearch === "") {
        setCategories(await getCategories(token));
        return;
      }
      setCategories(await getCategoriesByName(nomeSearch,token));
    }
    fetchCategories();
  },[nomeSearch])


  const handleSearch = () => {
    setShowSearch(!showSearch);
    if (showSearch) {
      setNomeSearch("");
    }
  };
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl w-[100%] font-bold text-gray-800 text-start">
          Lista de Categorias
        </h1>
        <div className="w-[30%] flex justify-between">
          <Link
            href={"categories/new"}
            className={`bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 h-[50%] w-[70%] text-center ${showSearch ? "hidden" : ""}`}
          >
            Criar nova Categoria
          </Link>
          <input
            onChange={(e) => setNomeSearch(e.target.value)}
            value={nomeSearch}
            type="text"
            placeholder="Informe o nome da categoria"
            className={`p-1 w-[80%] border rounded-md ${showSearch ? "" : "hidden"}`}
          />
          <span onClick={handleSearch}>
            <Image
              className="cursor-pointer"
              src={"/assets/lupa.png"}
              alt="lupa-search"
              width={40}
              height={40}
            ></Image>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(categories.length > 0 ? categories.map((category) => (
          <Link
            href={"/categories/" + category.id}
            key={category.id}
            className="p-4 bg-gray-50 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <h2 className="text-xl font-bold text-gray-700 mb-2">
              {category.name}
            </h2>
            <p className="text-gray-600 text-sm mb-4">{category.description}</p>
            <p className="text-xs text-gray-500 mb-2">
              Criado em: {new Date(category.createdAt).toLocaleDateString()}
            </p>
            <p className="text-xs text-gray-500 mb-4">
              Atualizado em: {new Date(category.updatedAt).toLocaleDateString()}
            </p>
            <div>
              {/* <h3 className="text-sm font-semibold text-gray-700 mb-1">
                Pizzas nesta categoria:
              </h3>
              {category.pizzas.length > 0 ? (
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  {category.pizzas.map((pizza) => (
                    <li key={pizza.id}>{pizza.name}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-gray-500">Nenhuma pizza cadastrada.</p>
              )} */}
            </div>
          </Link>
        )): <p>Nenhuma categoria encontrada</p>)}
      </div>
    </div>
  );
};

export default ListCategorias;
