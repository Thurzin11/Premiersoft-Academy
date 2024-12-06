"use client"
import { createNew } from "@/utils/api";
import { useState } from "react";

export default function NovaNoticiaPage() {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [autorId, setAutorId] = useState("");
  const [categoriaId, setCategoriaId] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const noticia = {
      titulo,
      conteudo,
      autorId: Number(autorId),
      categoriaId: Number(categoriaId),
    };

    try {
      const responseJson = await createNew(noticia);

      if (responseJson) {
        setMensagem("Notícia criada com sucesso!");
        setTitulo("");
        setConteudo("");
        setAutorId("");
        setCategoriaId("");
      }else{
        throw new Error('Erro ao criar a notícia.');
      }
    } catch (error) {
      setMensagem("Erro ao criar a notícia.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-700 mb-4">
          Nova Notícia
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Título */}
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
              onChange={(e) => setTitulo(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Digite o título"
              required
            />
          </div>

          {/* Conteúdo */}
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
              onChange={(e) => setConteudo(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Digite o conteúdo"
              rows={4}
              required
            />
          </div>

          {/* ID do Autor */}
          <div>
            <label
              htmlFor="autorId"
              className="block text-sm font-medium text-gray-700"
            >
              ID do Autor:
            </label>
            <input
              id="autorId"
              type="number"
              value={autorId}
              onChange={(e) => setAutorId(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Digite o ID do autor"
              required
            />
          </div>

          {/* ID da Categoria */}
          <div>
            <label
              htmlFor="categoriaId"
              className="block text-sm font-medium text-gray-700"
            >
              ID da Categoria:
            </label>
            <input
              id="categoriaId"
              type="number"
              value={categoriaId}
              onChange={(e) => setCategoriaId(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Digite o ID da categoria"
              required
            />
          </div>

          {/* Botão de Submissão */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Criar Notícia
            </button>
          </div>
        </form>

        {/* Mensagem de Sucesso ou Erro */}
        {mensagem && (
          <p className="mt-4 text-center text-sm font-medium text-gray-600">
            {mensagem}
          </p>
        )}
      </div>
    </div>
  );
}
