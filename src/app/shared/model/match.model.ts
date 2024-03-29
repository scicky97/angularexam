import { Fixture } from "./fixture.model";
import { League } from "./league.model";
import { Team } from "./team.model";

type GoalResult = {
    home: number;
    away: number;
};

export interface Match {
    fixture: Fixture;
    league: League;
    teams: {
        home: Team,
        away: Team
    };
    goals: GoalResult;
    score: {
        halftime: GoalResult,
        fulltime: GoalResult,
        extratime: GoalResult,
        penalty: GoalResult
    };
}
