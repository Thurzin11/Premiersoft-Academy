import { getServerSession } from "next-auth";
import React, { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Header from "./header";

interface PrivateLayoutProps {
  children: ReactNode;
}

const PrivateLayout = async ({ children }: PrivateLayoutProps) => {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default PrivateLayout;
