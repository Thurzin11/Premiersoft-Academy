"use client";
import { createPizza, getCategories, getCategoriesByName } from "@/lib/api";
import React, { use, useEffect, useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [isAvailable, setIsAvailable] = useState(false);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [searchCategory, setSearchCategory] = useState("");
  const [suggestionsCategory, setSuggestionsCategory] = useState<ICategory[]>(
    []
  );

  useEffect(() => {
    updateSuggestionsCategories(searchCategory);
  }, [searchCategory]);

  const updateSuggestionsCategories = async (nameCategory: string) => {
    if (nameCategory) {
      const response = await getCategoriesByName(nameCategory);
      setSuggestionsCategory(response);
      console.log(response);
    } else {
      const response = await getCategories();
      setSuggestionsCategory(response);
      console.log(response);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const pizza: IPizza = {
      id: "",
      name,
      description,
      price,
      isAvailable,
      createdAt: new Date(),
      updatedAt: new Date(),
      categories: [],
    };
    createPizza(pizza);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 text-start">
        Cadastro de Pizza
      </h1>
      <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
        <label htmlFor="name" className="text-gray-800 font-semibold">
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="border border-gray-300 rounded-lg p-2"
        />
        <label htmlFor="description" className="text-gray-800 font-semibold">
          Descrição
        </label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="border border-gray-300 rounded-lg p-2"
        />
        <label htmlFor="price" className="text-gray-800 font-semibold">
          Preço
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={(event) => setPrice(Number(event.target.value))}
          className="border border-gray-300 rounded-lg p-2"
        ></input>
        <label htmlFor="isAvailable" className="text-gray-800 font-semibold">
          Disponível
        </label>
        <input
          type="checkbox"
          id="isAvailable"
          name="isAvailable"
          checked={isAvailable}
          onChange={(event) => setIsAvailable(event.target.checked)}
          className="border border-gray-300 rounded-lg p-2"
        ></input>
        <label htmlFor="categories" className="text-gray-800 font-semibold">
          Categorias
        </label>
        <input
          type="text"
          value={searchCategory}
          onChange={(e) => {
            setSearchCategory(e.target.value);
          }}
          placeholder="Pesquise uma categoria para pesquisar"
          className="border border-gray-300 rounded-lg p-2"
        />
        <button
          type="submit"
          className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          Salvar
        </button>
      </form>
    </div>
  );
};

export default page;
