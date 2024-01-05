import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { StandingsResponse } from './standings-response.model';
import { FixturesResponse } from './fixtures-response.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FootballStatsService {

  constructor(private httpClient: HttpClient) { }

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
