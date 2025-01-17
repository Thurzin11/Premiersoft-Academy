"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const ButtonLogout = () => {
  const router = useRouter();
  function handleLogout() {
    signOut({
      redirect: false,
    });
    router.replace("/");
  }
  return (
    <button
      onClick={handleLogout}
      className="p-2 w-40 border border-gray-300 rounded-md"
    >
      Sair
    </button>
  );
};

export default ButtonLogout;
