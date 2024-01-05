import { Injectable } from '@angular/core';
import { Standing } from '../shared/model/standing.model';
import { FootballStatsService } from '../shared/football-stats.service';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  leagueId?: number;
  standings: Standing[] = [];

  constructor(private footballStatsService: FootballStatsService) {}

  // returns the standings based on the current leagueId, or an empy list if leagueId is not present
  public getStandings(): Standing[] {
    return this.standings ? this.standings : [];
  }

  // sets the new leagueId and returns all the standings related to the league
  public retrieveStandingsById(leagueId: number): void {
    this.leagueId = leagueId;
    const currentYear = (new Date()).getFullYear() - 1;

    this.footballStatsService.getStandings(leagueId, currentYear.toString()).subscribe({
      next: data => {
        this.standings = data.response[0].league.standings![0];
      },
      error: error => {
        console.error(error);
      }
    });
  }
}
