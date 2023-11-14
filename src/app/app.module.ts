import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
  
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //standalone
    AppComponent

  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule { }
