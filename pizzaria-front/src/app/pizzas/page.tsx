import ListPizzas from "@/components/ListPizza";
import { getPizzas } from "@/lib/api";
import Link from "next/link";
import React from "react";

const page: React.FC = async () => {
  const pizzas: IPizza[] = await getPizzas();

  return <ListPizzas pizzas={pizzas} />;
};

export default page;
