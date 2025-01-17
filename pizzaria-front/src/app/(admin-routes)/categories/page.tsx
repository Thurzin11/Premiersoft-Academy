import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import ListCategorias from "@/components/ListCategorias";
import { getCategories, getCategoriesByName } from "@/lib/api";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await getServerSession(nextAuthOptions);
  if (!session) {
    redirect("/");
  }

  return <ListCategorias token={session.access_token}/>;
};

export default page;
