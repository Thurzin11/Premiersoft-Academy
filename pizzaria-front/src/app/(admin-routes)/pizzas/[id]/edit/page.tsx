import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import CadastroPizza from "@/components/CadastroPizza";
import { getPizzaById } from "@/lib/api";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const session = await getServerSession(nextAuthOptions);

  const id = (await params).id;
  if (!session) {
    redirect("/");
  }
  const pizzaFound: IPizza = await getPizzaById(id, session.access_token);
  return (
    <div>
      <CadastroPizza token={session.access_token} pizza={pizzaFound}/>
    </div>
  );
};

export default page;
