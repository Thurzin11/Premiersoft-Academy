import { getPizzaById } from "@/lib/api";
import { useParams } from "next/navigation";
import React from "react";

const pizzaId = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const pizzaFound: IPizza = await getPizzaById(id);
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{pizzaFound.name}</h1>
      <p className="text-gray-600 mb-2">{pizzaFound.description}</p>
      <p className="text-lg font-semibold text-green-600 mb-4">
        R$ {pizzaFound.price}
      </p>
      <p
        className={`text-sm font-medium ${
          pizzaFound.isAvailable ? "text-green-500" : "text-red-500"
        } mb-4`}
      >
        {pizzaFound.isAvailable ? "Disponível" : "Indisponível"}
      </p>
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Categorias:</h3>
        <ul className="list-disc list-inside">
          {pizzaFound.categories.map((category) => (
            <li key={category.id} className="text-gray-600">
              <span className="font-medium text-gray-800">{category.name}:</span>{" "}
              {category.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default pizzaId;
