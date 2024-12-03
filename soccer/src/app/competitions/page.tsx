import { getCompetitions } from "@/lib/api";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";

export default async function Competitions() {
  const competitions = await getCompetitions();
  //   console.log(competitions);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Competitions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.isArray(competitions) ? (
          competitions.map((competition) => (
            <Link
              href={`/teams/${competition.id}`}
              key={competition.id}
              className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center p-2">
                <img
                  src={competition.emblem || "https://via.placeholder.com/150"}
                  alt={competition.name}
                  className="w-[30%] object-cover"
                />
              </div>
              <div className="p-4 flex flex-col items-center justify-center">
                <h2 className="text-lg font-semibold">{competition.name}</h2>
                <p className="text-sm text-gray-600">
                  Area: {competition.area.name}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p>No competitions found</p>
        )}
      </div>
    </div>
  );
}
