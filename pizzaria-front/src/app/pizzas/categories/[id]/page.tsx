import ListPizzas from "@/components/ListPizza";
import { getCategoryById, getPizzasByCategory } from "@/lib/api";
import React from "react";

const pizzasByCategory = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const idCategoryForSearch = (await params).id;
  const pizzas = await getPizzasByCategory(idCategoryForSearch);
  const category = await getCategoryById(idCategoryForSearch);

  return <ListPizzas pizzas={pizzas} category={category}/>;
};

export default pizzasByCategory;
