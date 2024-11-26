"use client";
import React, { useState } from "react";
import ModalFruta from "./ModalFruta";

export default function ListaFrutas() {
  const frutas = [
    {
      id: 1,
      nomeFruta: "Maçã",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",
      cor: "Vermelha",
      sabor: "Doce e levemente ácido",
      origem: "Ásia Central",
    },
    {
      id: 2,
      nomeFruta: "Banana",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
      cor: "Amarela",
      sabor: "Doce",
      origem: "Sudeste Asiático",
    },
    {
      id: 3,
      nomeFruta: "Laranja",
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg",
      cor: "Laranja",
      sabor: "Doce e cítrico",
      origem: "Sul da China",
    },
    {
      id: 7,
      nomeFruta: "Abacaxi",
      img: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Pineapple_and_cross_section.jpg",
      cor: "Amarelo com casca marrom",
      sabor: "Doce e ácido",
      origem: "América do Sul",
    },
    {
      id: 8,
      nomeFruta: "Morango",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg",
      cor: "Vermelha",
      sabor: "Doce e suculento",
      origem: "Europa e América do Norte",
    },
    {
      id: 10,
      nomeFruta: "Cereja",
      img: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Cherry_Stella444.jpg",
      cor: "Vermelha escura",
      sabor: "Doce e levemente ácido",
      origem: "Região do Mediterrâneo e Ásia Ocidental",
    },
  ];
  const [frutaSelecionada, setFrutaSelecionada] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const abrirModal = (fruta) => {
    setFrutaSelecionada(fruta);
    setIsModalOpen(true);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {frutas.map((fruta) => (
        <div
          key={fruta.id}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={fruta.img}
            alt={fruta.nomeFruta}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex justify-around text-black">
            <h2 className="text-lg font-bold text-gray-800">
              {fruta.nomeFruta}
            </h2>
            <button
              className="rounded-full border border-black p-1"
              onClick={() => abrirModal(fruta)}
            >
              Ver detalhes
            </button>
          </div>
        </div>
      ))}
      {isModalOpen && frutaSelecionada && (
        <ModalFruta
          fruta={frutaSelecionada}
          fecharModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
