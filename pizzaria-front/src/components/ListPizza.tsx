import { getPizzas } from "@/lib/api";
import Link from "next/link";
import React from "react";

interface ListPizzaProps {
    pizzas: IPizza[],
    category: ICategory
  }

const ListPizzas: React.FC<ListPizzaProps> = async ({ pizzas, category }) => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Lista de Pizzas {category.name ? "da categoria " + category.name.toLowerCase() : ""}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pizzas.map((pizza) => (
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
        ))}
      </div>
    </div>
  );
};

export default ListPizzas;