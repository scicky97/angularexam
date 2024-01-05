import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LeagueComponent } from './league/league.component';
import { TeamComponent } from './team/team.component';
import { GeneralInterceptor } from './shared/general-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LeagueComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: GeneralInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
