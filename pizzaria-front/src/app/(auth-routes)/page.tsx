"use client";

import React, { SyntheticEvent, useState } from "react";
import { ILoginUser } from "../../../models/ILoginUser";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [authenticated, setAuthenticated] = useState(true);
  const [userLogin, setUserLogin] = useState<ILoginUser>({
    email: "",
    pass: "",
  });

  const router = useRouter();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const result = await signIn("credentials", {
      email: userLogin.email,
      password: userLogin.pass,
      redirect: false,
    });

    if (result?.error) {
      setAuthenticated(false);
      console.log("Erro ao logar", result.error);
      return;
    }

    router.replace("/admin");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
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
              value={userLogin.email}
              onChange={(e) => {
                setUserLogin({ ...userLogin, email: e.target.value });
              }}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              placeholder="Digite seu email"
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
              value={userLogin.pass}
              onChange={(e) => {
                setUserLogin({ ...userLogin, pass: e.target.value });
              }}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              placeholder="Digite sua senha"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Entrar
          </button>
          <p
            className={`${authenticated ? "hidden" : ""} mt-3 text-red-600 rounded-md text-sm text-center`}
          >
            Email ou Senha incorreta
          </p>
        </form>
        <p className="text-sm text-center mt-4 text-gray-600">
          Não tem uma conta?{" "}
          <a href="/cadastro" className="text-blue-500 hover:underline">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
