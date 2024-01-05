import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamComponent } from './team/team.component';
import { LeaguesComponent } from './leagues/leagues.component';

const routes: Routes = [
  {path: 'team/:id', pathMatch: 'full', component: TeamComponent},
  {path: '', pathMatch: 'full', component: LeaguesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
