"use client";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

// import Image from "next/image";
export default function SavedCounter() {
  const [count, setCount] = useState<number>(0); // Seta o estado como zero

  useEffect(() => {
    // Carrega o LocalStorage somente depois que o componente for carregado
    const savedCount = localStorage.getItem("savedCount");
    if (savedCount) {
      setCount(parseInt(savedCount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedCount", count.toString());
  }, [count]);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);
  const handleReset = () => setCount(0);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Contador com Persistência
        </h1>

        <div className="text-center">
          <p className="text-lg mb-2">Contagem Atual:</p>
          <p
            className={`text-4xl font-bold text-blue-600 ${count == 0 ? "text-gray-700" : count < 0 ? "text-red-700" : ""}`}
          >
            {count}
          </p>
          <Progress
            value={(count + 10) * 5}
          />
        </div>

        <div className="flex gap-2 justify-center">
          <button
            disabled={count < -9}
            onClick={handleDecrement}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            -1
          </button>

          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            Reset
          </button>

          <button
            disabled={count >= 10}
            onClick={handleIncrement}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            +1
          </button>
        </div>
      </div>
    </div>
  );
}
