import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import ListPizzas from "@/components/ListPizza";
import { getCategoryById, getPizzasByCategory } from "@/lib/api";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const pizzasByCategory = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const session = await getServerSession(nextAuthOptions);
  if (!session) {
    redirect("/");
  }

  const idCategoryForSearch = (await params).id;
  const pizzas = await getPizzasByCategory(
    idCategoryForSearch,
    session?.access_token
  );
  const category = await getCategoryById(
    idCategoryForSearch,
    session?.access_token
  );

  return <ListPizzas pizzas={pizzas} category={category} />;
};

export default pizzasByCategory;
