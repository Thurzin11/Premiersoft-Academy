"use client";

import { useEffect, useState } from "react";
import { Categoria } from "@/types";

export default function NewsForm() {
  const [conteudo, setConteudo] = useState("");
  const [titulo, setTitulo] = useState("");
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [mensagem, setMensagem] = useState("");

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/admin/categorias", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Erro ao buscar categorias: ${response.statusText}`);
      }
      const data = await response.json();
      setCategorias(data);
    } catch (error) {
      setMensagem("Erro ao carregar categorias. Tente novamente mais tarde.");
      console.error("Erro ao buscar categorias:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/admin/noticias", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titulo,
          conteudo,
          categoriaId: Number(event.currentTarget.categoriaId.value),
        }),
      });
    } catch (error) {
      console.error("Erro ao criar notícia:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-700 mb-4">
          Nova Notícia
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="titulo"
              className="block text-sm font-medium text-gray-700"
            >
              Título:
            </label>
            <input
              id="titulo"
              type="text"
              value={titulo}
              onChange={(event) => setTitulo(event.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Digite o título"
              required
            />
          </div>
          <div>
            <label
              htmlFor="conteudo"
              className="block text-sm font-medium text-gray-700"
            >
              Conteúdo:
            </label>
            <textarea
              id="conteudo"
              value={conteudo}
              onChange={(event) => setConteudo(event.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Digite o conteúdo"
              rows={4}
              required
            />
          </div>
          <div>
            <label
              htmlFor="categoriaId"
              className="block text-sm font-medium text-gray-700"
            >
              Categoria:
            </label>
            <select
              id="categoriaId"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            >
              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.nome}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Criar Notícia
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
