import { getCategories } from "@/lib/api";
import Link from "next/link";
import React from "react";

const  ListCategories = async () => {
    
  const categories: ICategory[] = await getCategories();
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Lista de Categorias
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link href={'/pizzas/categorias/' + category.id}
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
