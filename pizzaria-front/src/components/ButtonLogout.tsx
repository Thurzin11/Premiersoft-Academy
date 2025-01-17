"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const ButtonLogout = () => {
  const router = useRouter();
  async function handleLogout() {
    await signOut({
      redirect: false,
    });
    router.replace('/');
  }
  return (
    <button
      className="border rounded-md p-2 px-5 bg-red-600 text-white"
      onClick={handleLogout}
    >
      Sair
    </button>
  );
};

export default ButtonLogout;
