import { Injectable } from '@angular/core';
import { Hero } from "./hero";
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { heroes } from './in-memory-data.service';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';
  
  constructor(private messageService: MessageService, private http:HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes')
    return of(HEROES)
  }
  private log(message: string){
    this.messageService.add(`HeroService: ${message}`)
  }

  getHero(id: number): Observable<Hero>{
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
