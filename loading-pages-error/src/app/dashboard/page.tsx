"use client";
import { useState, useEffect } from "react";

// Função de fetch simulando API real
async function getData() {
  // Simula delay e erro aleatório
  await new Promise((resolve) => setTimeout(resolve, 2000));
  if (Math.random() > 0.5) {
    throw new Error("Falha ao carregar dados");
  }
  return { message: "Dados carregados com sucesso!" };
}

export default function DashboardPage() {
  const [data, setData] = useState<{ message?: string } | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);
      } catch (err) {
        setError(err as Error);
      }
    };
    fetchData();
  }, []);

  if (error) throw error; // Isso ativará o error.tsx

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-6 bg-green-100 rounded-lg">
        <h1 className="text-2xl font-bold text-green-800">
          {data?.message || "Carregando..."}
        </h1>
      </div>
    </div>
  );
}
