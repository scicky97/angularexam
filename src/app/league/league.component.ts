import { Component, OnInit } from '@angular/core';
import { LeagueService } from './league.service';
import { Router } from '@angular/router';
import { Standing } from '../shared/standing.model';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrl: './league.component.css'
})
export class LeagueComponent implements OnInit {

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

  ngOnInit(): void {
    //this.standings = this.leagueService.retrieveStandings();
  }

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
