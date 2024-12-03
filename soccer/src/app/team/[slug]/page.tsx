import { getTeam } from "@/lib/api";
import Link from "next/link";

export default async function Team({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const team = await getTeam(parseInt((await params).slug));
  return(
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={team.crest}
            alt={`${team.name} crest`}
            className="w-20 h-20 rounded-lg"
          />
          <div>
            <h1 className="text-3xl font-bold">{team.name}</h1>
            <p className="text-gray-600">{team.shortName}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <p>
            <span className="font-semibold">Fundado:</span> {team.founded}
          </p>
          <p>
            <span className="font-semibold">Cores do Clube:</span> {team.clubColors}
          </p>
          <p>
            <span className="font-semibold">Estádio:</span> {team.venue}
          </p>
          <p>
            <span className="font-semibold">Endereço:</span> {team.address}
          </p>
          <p>
            <span className="font-semibold">Website:</span>{" "}
            <a
              href={team.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {team.website}
            </a>
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Area</h2>
          <p>
            <span className="font-semibold">Nome:</span> {team.area.name}
          </p>
          <p>
            <span className="font-semibold">Codigo da area:</span> {team.area.code}
          </p>
          <img
            src={team.area.flag}
            alt="Flag"
            className="w-16 h-10 mt-2 border"
          />
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Tecnico</h2>
          <p>
            <span className="font-semibold">Nome:</span> {team.coach.name}
          </p>
          <p>
            <span className="font-semibold">Nacionalidade:</span>{" "}
            {team.coach.nationality}
          </p>
          <p>
            <span className="font-semibold">Contrato:</span> de{" "}
            {team.coach.contract.start} até {team.coach.contract.until}
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Competições</h2>
          <ul className="list-disc pl-5">
            {team.runningCompetitions.map((competition) => (
              <li key={competition.id}>
                <p>
                  <span className="font-semibold">Nome:</span>{" "}
                  {competition.name}
                </p>
                <p>
                  <span className="font-semibold">Tipo:</span>{" "}
                  {competition.type}
                </p>
                <img
                  src={competition.emblem}
                  alt={`${competition.name}-emblem`}
                  className="w-10 h-10 mt-2"
                />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Time</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.squad.map((player) => (
              <Link 
                href={`/player/${player.id}`}
                key={player.id}
                className="border p-4 rounded-lg shadow-sm bg-gray-100"
              >
                <p>
                  <span className="font-semibold">Nome:</span> {player.name}
                </p>
                <p>
                  <span className="font-semibold">Posição:</span>{" "}
                  {player.position}
                </p>
                <p>
                  <span className="font-semibold">Data do nascimento:</span>{" "}
                  {player.dateOfBirth}
                </p>
                <p>
                  <span className="font-semibold">Nacionalidade:</span>{" "}
                  {player.nationality}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <p className="text-gray-500 mt-6 text-sm text-center">
          Ultima Atualização: {team.lastUpdated}
        </p>
      </div>
    </div>
  );
}
