"use client";

import { createCategory } from "@/lib/api";
import { redirect } from "next/navigation";
import React, { useState } from "react";

interface propsCreateCategory {
  token: string;
}

const CadastroCategoria = (token: propsCreateCategory) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createCategory({ name, description }, token.token);
    redirect("/categories");
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 text-start">
        Cadastro de Categoria
      </h1>
      <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
        <label htmlFor="name" className="text-gray-800 font-semibold">
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="border border-gray-300 rounded-lg p-2"
        />
        <label htmlFor="description" className="text-gray-800 font-semibold">
          Descrição
        </label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="border border-gray-300 rounded-lg p-2"
        />
        <button
          type="submit"
          className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          Salvar
        </button>
      </form>
    </div>
  );
};

export default CadastroCategoria;
