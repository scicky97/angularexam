import { GenericResponse } from "./generic-response.model";
import { Match } from "./match.model";

export interface FixturesResponse extends GenericResponse {
    response: Match[];
}