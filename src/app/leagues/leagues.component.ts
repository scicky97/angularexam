import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Standing } from '../shared/model/standing.model';
import { LeagueService } from './leagues.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrl: './leagues.component.css'
})
export class LeaguesComponent {

  countries = [
    {id: 39, name: 'England'},
    {id: 140, name: 'Spain'},
    {id: 78, name: 'Germany'},
    {id: 61, name: 'France'},
    {id: 135, name: 'Italy'}
  ];

  constructor(
    private router: Router,
    private leagueService: LeagueService) {}

  public onSelectCountry(leagueId: number): void {
    this.leagueService.retrieveStandingsById(leagueId);
  }

  public onSelectTeam(teamId: number): void {
    this.router.navigate(['team', teamId]);
  }

  public getLeagueId(): number | undefined {
    return this.leagueService.leagueId;
  }

  public getStandings(): Standing[] {
    return this.leagueService.getStandings();
  }

}
