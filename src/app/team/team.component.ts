import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Match } from '../shared/fixtures-response.model';
import { FootballStatsService } from '../shared/football-stats.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent implements OnInit {

  static readonly NUMBER_OF_MATCHES = 10;

  teamId?: number;
  matches: Match[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private footballStatsService: FootballStatsService) {}

  ngOnInit(): void {
    // get the teamId from the query param
    this.teamId = +this.activatedRoute.snapshot.params['id'];

    this.footballStatsService.getFixtures(this.teamId, TeamComponent.NUMBER_OF_MATCHES).subscribe({
      next: data => {
        this.matches = data.response;
      },
      error: error => {
        console.error(error);
      }
    });
  }

  // go back to the homepage
  public onBack(): void {
    this.router.navigate(['']);
  }

}
