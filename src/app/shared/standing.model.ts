import { TeamStats } from "./team-stats.model";
import { Team } from "./team.model";

export interface Standing {
    rank: number;
    team: Team;
    points: number;
    goalsDiff: number;
    group: string;
    form: string;
    status: string;
    description: string;
    all: TeamStats;
    home: TeamStats;
    away: TeamStats;
    update: string;
}