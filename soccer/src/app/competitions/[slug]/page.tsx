import { getAllTeams, getTeamsByCompetition } from "@/lib/api";
import Link from "next/link";

export default async function Teams({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  let teams;
  ((await params).slug=="teams") ? teams = await getAllTeams() : teams = await getTeamsByCompetition(parseInt((await params).slug));
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Teams</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.isArray(teams) ? (
          teams.map((team) => (
            <Link
              href={`/team/${team.id}`}
              key={team.id}
              className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center p-2">
                <img
                  src={team.crest || "https://via.placeholder.com/150"}
                  alt={team.name}
                  className="w-[30%] object-cover"
                />
              </div>

              <div className="p-4 flex flex-col items-center justify-center">
                <h2 className="text-lg font-semibold">{team.name}</h2>
                <p className="text-sm text-gray-600">
                  Nome: {team.shortName}
                </p>
                <p className="text-sm text-gray-600">Founded: {team.founded}</p>
                <p className="text-sm text-gray-600">
                  Cores do clube: {team.clubColors}
                </p>
                <p className="text-sm text-gray-600">Estadio: {team.venue}</p>
              </div>

              <div className="p-4 border-t">
                <p className="text-sm text-gray-600">Endereço: {team.address}</p>
                
              </div>
            </Link>
          ))
        ) : (
          <p>Sem times encontrados</p>
        )}
      </div>
    </div>
  );
}
