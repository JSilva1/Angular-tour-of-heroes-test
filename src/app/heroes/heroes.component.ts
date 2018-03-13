import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

// Função decoradora que especifica os metadados do component
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  // selectedHero:Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  // onSelect(hero: Hero): void{
  //   this.selectedHero = hero;
  // }
  getHeroes(){
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes)
  }

}
