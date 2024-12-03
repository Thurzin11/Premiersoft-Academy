import { getTeams } from "@/lib/api";

export default async function Teams({ params }: { params: { slug: string } }) {
    const teams = await getTeams(2016);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Competitions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.isArray(teams) ? (
          teams.map((team) => (
            <div
              key={team.id}
              className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              {/* Logo do time */}
              <div className="flex items-center justify-center p-2">
                <img
                  src={team.crest || "https://via.placeholder.com/150"}
                  alt={team.name}
                  className="w-[30%] object-cover"
                />
              </div>

              {/* Informações do time */}
              <div className="p-4 flex flex-col items-center justify-center">
                <h2 className="text-lg font-semibold">{team.name}</h2>
                <p className="text-sm text-gray-600">
                  Short Name: {team.shortName}
                </p>
                <p className="text-sm text-gray-600">Founded: {team.founded}</p>
                <p className="text-sm text-gray-600">
                  Club Colors: {team.clubColors}
                </p>
                <p className="text-sm text-gray-600">Venue: {team.venue}</p>
              </div>

              {/* Endereço e Website */}
              <div className="p-4 border-t">
                <p className="text-sm text-gray-600">Address: {team.address}</p>
                <a
                  href={team.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Visit Website
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>No teams found</p>
        )}
      </div>
    </div>
  );
}
