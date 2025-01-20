import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { getCategoryById, getPizzasByCategory } from "@/lib/api";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const session = await getServerSession(nextAuthOptions);
  if (!session) {
    redirect("/");
  }
  const id = (await params).id;
  const categoryFound: ICategory = await getCategoryById(
    id,
    session.access_token
  );
  const pizzas: IPizza[] = await getPizzasByCategory(id, session.access_token);
  return (
    <div className="container mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-2">
        {categoryFound.name}
      </h1>
      <div className="mb-6">
        <p className="text-lg text-gray-600 mb-2">
          <strong className="text-gray-800">Descricao:</strong>{" "}
          {categoryFound.description}
        </p>
        <p className="text-lg text-gray-600 mb-2">
          <strong className="text-gray-800">Criado em:</strong>{" "}
          {new Date(categoryFound.createdAt).toLocaleDateString()}
        </p>
        <p className="text-lg text-gray-600">
          <strong className="text-gray-800">Atualizado em:</strong>{" "}
          {new Date(categoryFound.updatedAt).toLocaleDateString()}
        </p>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
        Pizzas
      </h2>
      {pizzas.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pizzas.map((pizza) => (
            <Link href={`/pizzas/${pizza.id}`}
              key={pizza.id}
              className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {pizza.name}
              </h3>
              <p className="text-gray-600 mb-2">
                <strong className="text-gray-800">Price:</strong> $
                {pizza.price}
              </p>
            </Link>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">Sem pizzas disponiveis para essa categoria</p>
      )}
    </div>
  );
};

export default page;
