import { Component } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  // ngIf, ngFor, uppercase, lowercase
  imports:[CommonModule],
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: "Izuku Midoriya"
  }
}
