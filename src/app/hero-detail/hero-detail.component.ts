import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
@Component({
  //standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  //imports: [FormsModule,//ngIf, ngFor, uppercas  CommonModule],
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent /*implements OnInit*/{

  hero: Hero | undefined;

  // el detall necesita la ruta actual i el hero a mostrar
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }
  //Aconsegueix la detail/:id per al heroe
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }


  // vuelve a la pagina anterior 
  goBack(): void {
    this.location.back();
  }
}
