import ListPizzas from "@/components/ListPizza";
import { getPizzasByCategory } from "@/lib/api";
import React from "react";

const pizzasByCategory = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const idCategoryForSearch = (await params).id;
  const pizzas = await getPizzasByCategory(idCategoryForSearch);

  return <ListPizzas pizzas={pizzas} />;
};

export default pizzasByCategory;
