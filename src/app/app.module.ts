import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { AuthCacheInterceptor } from './shared/auth-cache-interceptor';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaguesComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthCacheInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
