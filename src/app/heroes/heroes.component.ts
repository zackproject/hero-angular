import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  //standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})


export class HeroesComponent {
  //vendra de hero.service.ts
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {
    //observable data
    //this.heroes = this.heroService.getHeroes();
  }

  //hacia como un fetch
  ngOnInit(): void {
    // Inicializa el componente obteniendo la lista de héroes
    this.getHeroes();
  }


  //Obtiene la lista de héroes llamando al servicio heroService.
  //Suscribe la respuesta para asignar la lista de héroes al atributo 'heroes'.
  getHeroes(): void {
    // Realizar una solicitud al servicio para obtener la lista de héroes
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    // Asigna el héroe seleccionado al atributo 'selectedHero'
    this.selectedHero = hero;
  }

}