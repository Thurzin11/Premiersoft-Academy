"use client";
import Pill from "@/components/Pill";
import {
  createPizza,
  getCategories,
  getCategoriesByName,
  updatePizza,
} from "@/lib/api";
import React, { use, useEffect, useState } from "react";

interface propsCreate {
  token: string;
  pizza?: IPizza;
}

const CadastroPizza = (props: propsCreate) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [isAvailable, setIsAvailable] = useState(false);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [searchCategory, setSearchCategory] = useState("");
  const [suggestionsCategory, setSuggestionsCategory] = useState<ICategory[]>(
    []
  );
  const [isUpdate, setIsUpdate] = useState(false);
  const [categoriesSelect, setCategoriesSelect] = useState<ICategory[]>([]);

  useEffect(() => {
    const checkPizza = async () => {
      if (props.pizza) {
        console.log(props.pizza);
        setName(props.pizza.name);
        setDescription(props.pizza.description);
        setPrice(props.pizza.price);
        setIsAvailable(props.pizza.isAvailable);
        setCategoriesSelect(props.pizza.categories);
        setIsUpdate(true);
      }
    };
    checkPizza();
  }, [props.pizza]);

  const handleSelectCategory = (category: ICategory) => {
    setSearchCategory("");
    setSuggestionsCategory(
      suggestionsCategory.filter((c) => c.id !== category.id)
    );
    setCategoriesSelect([...categoriesSelect, category]);
  };

  useEffect(() => {
    updateSuggestionsCategories(searchCategory);
  }, [searchCategory, categoriesSelect]);

  const correctCategory = (wrongCategory: ICategory[]) => {
    const rightCategory: ICategory[] = wrongCategory.filter(
      (categories) =>
        !categoriesSelect.some((category) => category.id === categories.id)
    );
    setSuggestionsCategory(rightCategory);
  };

  const updateSuggestionsCategories = async (nameCategory: string) => {
    if (nameCategory) {
      const response = await getCategoriesByName(nameCategory, props.token);
      correctCategory(response);
    } else {
      const response = await getCategories(props.token);
      correctCategory(response);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isUpdate && props.pizza) {
      const pizzaUpdate = {
        name,
        description,
        price,
        isAvailable,
        categories: categoriesSelect,
      }
      await updatePizza(props.pizza.id,pizzaUpdate, props.token);
      return;
    }
    const pizza = {
      name,
      description,
      price,
      isAvailable,
      categories: categoriesSelect,
    };
    await createPizza(pizza, props.token);
  };

  const removeSelectCategory = (category: ICategory) => {
    setCategoriesSelect(categoriesSelect.filter((c) => c.id !== category.id));
    updateSuggestionsCategories(searchCategory);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 text-start">
        {isUpdate ? "Atualizacao" : "Cadastro"} de Pizza
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
        {categoriesSelect.map((category) => {
          return (
            <Pill
              key={category.id}
              category={category}
              handleDelete={removeSelectCategory}
            />
          );
        })}
        <div>
          <input
            type="text"
            value={searchCategory}
            onChange={(e) => {
              setSearchCategory(e.target.value);
            }}
            placeholder="Pesquise uma categoria para pesquisar"
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
          <ul className="max-h-40 overflow-y-auto border border-gray-300 rounded-lg p-2">
            {suggestionsCategory.map((category) => (
              <li
                key={category.id}
                onClick={() => handleSelectCategory(category)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
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

export default CadastroPizza;
