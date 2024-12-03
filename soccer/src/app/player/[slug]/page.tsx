import { getPlayer } from "@/lib/api";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const player = await getPlayer(parseInt((await params).slug));
  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      {/* Nome e Nacionalidade */}
      <div className="flex items-center">
        <img
          src={player.currentTeam.area.flag}
          alt={`${player.currentTeam.area.name} flag`}
          className="w-16 h-16 mr-4"
        />
        <div>
          <h1 className="text-2xl font-bold">{player.name}</h1>
          <p className="text-gray-500">{player.nationality}</p>
        </div>
      </div>

      {/* Informações principais */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <p className="font-semibold">Data de Nascimento:</p>
          <p>{new Date(player.dateOfBirth).toLocaleDateString()}</p>
        </div>
        <div>
          <p className="font-semibold">Posição:</p>
          <p>{player.position}</p>
        </div>
        <div>
          <p className="font-semibold">Número da Camisa:</p>
          <p>{player.shirtNumber}</p>
        </div>
        <div>
          <p className="font-semibold">Última Atualização:</p>
          <p>{new Date(player.lastUpdated).toLocaleString()}</p>
        </div>
      </div>

      {/* Time atual */}
      <div className="mt-8">
        <h2 className="text-xl font-bold">Time Atual</h2>
        <div className="flex items-center mt-4">
          <img
            src={player.currentTeam.crest}
            alt={`${player.currentTeam.name} crest`}
            className="w-16 h-16 mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold">{player.currentTeam.name}</h3>
            <p className="text-gray-500">{player.currentTeam.clubColors}</p>
          </div>
        </div>
        <p className="mt-4 text-gray-600">
          Fundado em {player.currentTeam.founded}, joga no{" "}
          <span className="font-semibold">{player.currentTeam.venue}</span>.
        </p>
      </div>

      {/* Competições em andamento */}
      <div className="mt-8">
        <h2 className="text-xl font-bold">Competições em Andamento</h2>
        <ul className="mt-4 space-y-2">
          {player.currentTeam.runningCompetitions.map((competition) => (
            <li
              key={competition.id}
              className="p-4 border rounded-lg shadow-sm bg-gray-100"
            >
              <h3 className="font-semibold">{competition.name}</h3>
              <p className="text-gray-500">Código: {competition.code}</p>
              <p className="text-gray-500">Tipo: {competition.type}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Contrato */}
      <div className="mt-8">
        <h2 className="text-xl font-bold">Contrato</h2>
        <p>
          Início:{" "}
          <span className="font-semibold">
            {player.currentTeam.contract.start}
          </span>
        </p>
        <p>
          Fim:{" "}
          <span className="font-semibold">
            {player.currentTeam.contract.until || "Indefinido"}
          </span>
        </p>
      </div>
    </div>
  );
}
