"use client";

import { useState } from "react";

export default function Card(props) {
  const [product, setProduct] = useState(props.product);
  return (
    <div className="hover:bg-gray-100 transition duration-200 border border-gray-300 rounded-lg shadow-lg p-4 max-w-sm bg-white">
      <img
        src={product.imagem}
        alt={product.nome}
        className="w-full h-48 rounded-t-lg mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        {product.nome}
      </h2>
      <p className="text-gray-600 text-sm">{product.descricao}</p>
      <div className="mt-4">
        <span className="text-gray-800 font-bold">
          R$ {product.valor.toFixed(2)}
        </span>
        <span className="text-gray-500 text-sm ml-2">
          Estoque: {product.quantidade}
        </span>
      </div>
      <div className="mt-4 flex space-x-2">
        <button
          disabled={product.quantidade <= 0}
          onClick={() => {
            product.quantidade--;
            props.handleAddToCart(product);
          }}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
        >
          Adicionar
        </button>
        <button
          disabled={props.cart.find((item) => item.id === product.id) === undefined}
          onClick={() => {
            product.quantidade++;
            props.handleRemoveFromCart(product);
          }}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
        >
          Retirar
        </button>
      </div>
    </div>
  );
}
