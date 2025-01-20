import ListPizzas from "@/components/ListPizza";
import { getPizzas } from "@/lib/api";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { nextAuthOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const page: React.FC = async () => {
  const session = await getServerSession(nextAuthOptions);
  if (!session) {
    redirect("/");
  }
  const pizzas: IPizza[] = await getPizzas(session?.access_token);
  const category = {} as ICategory;

  return <ListPizzas pizza={pizzas} category={category} token={session.access_token} />;
};

export default page;
