import axios from "axios";
import { log } from "console";
import { headers } from "next/headers";

const api = axios.create({
  baseURL: "https://api.football-data.org/v4/",
  headers: {
    "X-Auth-Token": "f5515f41681c467a904757d49c444103",
  },
});

export interface Competition {
  id: number;
  area: { id: number; name: string; code: string; flag: null };
  name: string;
  code: string;
  type: string;
  emblem: string;
  plan: string;
  currentSeason: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: [Object];
  };
  numberOfAvailableSeasons: number;
  lastUpdated: string;
}

export interface Team {
  area: {
    id: number;
    name: string;
    code: string;
    flag: string;
  };
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
  runningCompetitions: {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem: string;
  }[];
  coach: {
    id: number;
    firstName: string;
    lastName: string;
    name: string;
    dateOfBirth: string;
    nationality: string;
    contract: {
      start: string;
      until: string;
    };
  };
  squad: {
    id: number;
    name: string;
    position: string;
    dateOfBirth: string;
    nationality: string;
  }[];
  staff: any[];
  lastUpdated: string;
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
export interface Player {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  nationality: string;
  section: string;
  position: string;
  shirtNumber: number;
  lastUpdated: string;
  currentTeam: {
    area: {
      id: number;
      name: string;
      code: string;
      flag: string;
    };
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
    runningCompetitions: {
      id: number;
      name: string;
      code: string;
      type: string;
      emblem: string | null;
    }[];
    contract: {
      start: string;
      until: string | null;
    };
  };
}

export async function getCompetitions(): Promise<Competition[]> {
  try {
    const response = await axios.get(
      "https://api.football-data.org/v4/competitions",
      {
        headers: {
          "X-Auth-Token": "f5515f41681c467a904757d49c444103",
        },
      }
    );
    const competitions: Competition[] = response.data.competitions;
    return competitions;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getTeamsByCompetition(
  competitionId: number
): Promise<Team[]> {
  try {
    const response = await axios.get(
      `https://api.football-data.org/v4/competitions/${competitionId}/teams`,
      {
        headers: {
          "X-Auth-Token": "f5515f41681c467a904757d49c444103",
        },
      }
    );
    const teams: Team[] = response.data.teams;
    return teams;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getAllTeams(): Promise<Team[]> {
  try {
    const response = await axios.get("https://api.football-data.org/v4/teams/?limit=500", {
      headers: {
        "X-Auth-Token": "f5515f41681c467a904757d49c444103",
      },
    });
    const teams: Team[] = response.data.teams;
    return teams;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getTeam(teamId: number): Promise<Team> {
  try {
    const response = await axios.get(
      `https://api.football-data.org/v4/teams/${teamId}`,
      {
        headers: {
          "X-Auth-Token": "f5515f41681c467a904757d49c444103",
        },
      }
    );
    const team: Team = response.data;    
    return team;
  } catch (error) {
    console.log(error);
    return {} as Team;
  }
}
export async function getPlayer(playerId: number): Promise<Player> {
  try {
    const response = await axios.get(
      `https://api.football-data.org/v4/persons/${playerId}`,
      {
        headers: {
          "X-Auth-Token": "f5515f41681c467a904757d49c444103",
        },
      }
    );
    const player: Player = response.data;    
    return player;
  } catch (error) {
    console.log(error);
    return {} as Player;
  }
}
