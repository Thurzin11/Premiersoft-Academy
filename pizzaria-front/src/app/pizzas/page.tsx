import { getPizzas } from "@/lib/api";
import React from "react";

const ListPizzas: React.FC = async () => {
  const pizzas: IPizza[] = await getPizzas();
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Pizzas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pizzas.map((pizza) => (
          <div
            key={pizza.id}
            className="border rounded-lg shadow-lg p-4 bg-white flex flex-col"
          >
            <h2 className="text-xl font-semibold mb-2">{pizza.name}</h2>
            <p className="text-gray-700 mb-2">{pizza.description}</p>
            <p className="text-gray-800 font-bold mb-2">R$ {pizza.price}</p>
            <p
              className={`mb-2 font-medium ${
                pizza.isAvailable ? "text-green-600" : "text-red-600"
              }`}
            >
              {pizza.isAvailable ? "Disponível" : "Indisponível"}
            </p>
            <div className="mt-4">
              <h3 className="text-sm font-bold mb-2">Categorias:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {pizza.categories.map((category) => (
                  <li key={category.id}>
                    <span className="font-semibold">{category.name}:</span>{" "}
                    {category.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListPizzas;
