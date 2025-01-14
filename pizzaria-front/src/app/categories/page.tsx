import { getCategories } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ListCategories = async () => {
  const showSearch = false;
  const categories: ICategory[] = await getCategories();
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8 p-3">
        <div className="w-[40%]">
          <h1 className="text-3xl w-[100%]  font-bold text-gray-800 text-center">
            Lista de Categorias
          </h1>
        </div>
        <div className="border w-[50%] flex justify-end">
          <Link
            href={"categories/new"}
            className={`bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 h-[50%] ${showSearch ? "hidden" : ""}`}
          >
            Criar nova categoria
          </Link>
        </div>
        <div className={`flex items-center`}>
          <input
            type="text"
            className={`p-1 border rounded-md ${showSearch ? "" : "hidden"}`}
          />
          <span>
            <Image
              className="cursor-pointer border"
              src={"/assets/lupa.png"}
              alt="lupa-search"
              width={40}
              height={40}
            ></Image>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            href={"/pizzas/categories/" + category.id}
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
        ))}
      </div>
    </div>
  );
};

export default ListCategories;
