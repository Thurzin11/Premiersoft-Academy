import axios from "axios";
import { headers } from "next/headers";

const api = axios.create({
  baseURL: "https://api.football-data.org/v4/",
  headers: {
    "X-Auth-Token": "f5515f41681c467a904757d49c444103",
  },
});

export interface Competition {
  id: number,
    area: { id: number, name: string, code: string, flag: null },
    name: string,
    code: string,
    type: string,
    emblem: string,
    plan: string,
    currentSeason: {
      id: number,
      startDate: string,
      endDate: string,
      currentMatchday: number,
      winner: [Object]
    },
    numberOfAvailableSeasons: number,
    lastUpdated: string
}

export interface Team {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  address: string;
  website: string;
  founded: number;
  clubColors: string;
  venue: string;
}

export interface Match {
  id: number;
  utcDate: string;
  status: string;
  matchday: number;
  stage: string;
  group: string | null;
  lastUpdated: string;
  score: {
    winner: string | null;
    fullTime: {
      homeTeam: number;
      awayTeam: number;
    };
    halfTime: {
      homeTeam: number;
      awayTeam: number;
    };
  };
}

export async function getCompetitions(): Promise<Competition[]> {
  try {
    const response = await axios.get("https://api.football-data.org/v4/competitions", {
      headers: {
        "X-Auth-Token": "f5515f41681c467a904757d49c444103"
      }
    });
    const competitions: Competition[] = response.data.competitions;
    return competitions;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getTeams(competitionId: number): Promise<Team[]> {
  const response = await api.get<Team[]>(`competitions/${competitionId}/teams`);
  return response.data;
}
