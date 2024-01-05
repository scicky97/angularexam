import { GenericResponse } from "./generic-response.model";
import { League } from "./league.model";

export interface StandingsResponse extends GenericResponse {
    response: {league: League}[];
}