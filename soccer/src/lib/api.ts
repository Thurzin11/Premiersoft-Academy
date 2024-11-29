import axios from "axios";

const api = axios.create({
  baseURL: "https://api.football-data.org/v4/",
  headers: {
    Authorization: "f5515f41681c467a904757d49c444103", // Substitua pela sua chave
  }
});

export interface Competition {
  id: number;
  name: string;
  area: {
    name: string;
    code: string;
    flag: string;
  };
  code: string;
  plan: string;
  currentSeason: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
  };
  numberOfAvailableSeasons: number;
  lastUpdated: string;
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
    const response = await api.get<{ competitions: Competition[] }>("competitions");
    return response.data.competitions;
  }
  

export async function getTeams(competitionId: number): Promise<Team[]> {
  const response = await api.get<Team[]>(`competitions/${competitionId}/teams`);
  return response.data;
}
