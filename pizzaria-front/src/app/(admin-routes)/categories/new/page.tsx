import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import CadastroCategoria from "@/components/CadastroCategoria";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await getServerSession(nextAuthOptions);
  if (!session) {
    redirect("/");
  }
  return <CadastroCategoria token={session?.access_token} />;
};

export default page;
