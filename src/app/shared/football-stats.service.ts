import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { FixturesResponse } from './model/fixtures-response.model';
import { StandingsResponse } from './model/standings-response.model';

@Injectable({
  providedIn: 'root'
})
export class FootballStatsService {

  constructor(private httpClient: HttpClient) {}

  // returns the last fixtures for a specific team
  public getFixtures(teamId: number, last: number): Observable<FixturesResponse> {
    const queryParams = new HttpParams()
      .append('team', teamId)
      .append('last', last);

    return this.httpClient.get<FixturesResponse>(
      environment.apiFixturesUrl,
      {
        params: queryParams
      }
    );
  }

  // returns the standings for a specific leangue and season
  public getStandings(leagueId: number, season: string): Observable<StandingsResponse> {
    const queryParams = new HttpParams()
      .append('league', leagueId)
      .append('season', season);

    return this.httpClient.get<StandingsResponse>(
      environment.apiStandingsUrl,
      {
        params: queryParams
      }
    );
  }
}
