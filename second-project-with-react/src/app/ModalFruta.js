"use client";
import React, { useState } from "react";

export default function ModalFruta({ fruta , fecharModal}) {
  const [isClosed, setIsClosed] = useState(false);
  return (
    <div className={isClosed ? "hidden fixed self-center w-44 border-black border rounded-md bg-black text-white" : "fixed  start-[50vw] self-center w-44 border-black border rounded-md bg-black text-white"}>
      <span onClick={() => fecharModal()} className="cursor-pointer absolute text-red-600 left-40">X</span>
      <img
        src={fruta.img}
        alt={fruta.nomeFruta}
      />
      <p>Cor: {fruta.nomeFruta}</p>
      <p>Sabor: {fruta.sabor}</p>
      <p>Origem: {fruta.origem}</p>
    </div>
  );
}