import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import CadastroPizza from "@/components/CadastroPizza";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await getServerSession(nextAuthOptions);
  if (!session) {
    redirect("/");
  }
  return <CadastroPizza token={session?.access_token} />;
};

export default page;
