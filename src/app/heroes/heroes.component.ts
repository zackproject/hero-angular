import { Component } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [
    FormsModule,
    //ngIf, ngFor, uppercase
    CommonModule,
    HeroDetailComponent
  ],
})


export class HeroesComponent {
  //vendra de hero.service.ts
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) {
    //observable data
    //this.heroes = this.heroService.getHeroes();
  }

  //hacia como un fetch
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // hacia una fetch
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  //al seleccionar, cambia la clase del html
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}