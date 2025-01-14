"use client";
import { createUser } from "@/lib/api";
import React, { useState } from "react";
import { UserRole } from "../../../models/UserRole";
import { IUserCreate } from "../../../models/IUserCreate";
import { useRouter } from "next/router";

const Page = () => {
    const navegar = useRouter();
  const [newUser, setNewUser] = useState<IUserCreate>({
    name: "",
    email: "",
    password: "",
    role: UserRole.User,
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(newUser);
    await createUser(newUser);
    navegar.replace("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Cadastro</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className=" block text-sm font-medium text-gray-700"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              value={newUser.name}
              onChange={(e) => {
                setNewUser({ ...newUser, name: e.target.value });
              }}
              className="p-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={newUser.email}
              onChange={(e) => {
                setNewUser({ ...newUser, email: e.target.value });
              }}
              className="p-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={newUser.password}
              onChange={(e) => {
                setNewUser({ ...newUser, password: e.target.value });
              }}
              className="p-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
