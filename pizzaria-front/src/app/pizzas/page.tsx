import ListPizzas from "@/components/ListPizza";
import { getPizzas } from "@/lib/api";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";

const page: React.FC = async () => {
  const session = await getServerSession(nextAuthOptions);
  console.log(session);
  const pizzas: IPizza[] = await getPizzas('12');
  const category = {} as ICategory;

  return <ListPizzas pizzas={pizzas} category={category} />;
};

export default page;
