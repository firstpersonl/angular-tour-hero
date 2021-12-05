import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        query('.hero', [
          style({opacity: 0, transform: 'translateX(0)'}),
          stagger(30, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)'),
            style({opacity: 1, transform: 'translateX(30%)'})
          ])
          
        ])
      ])
    ])
  ]
})
export class HeroesComponent implements OnInit {

  heroes?: Hero[];

  selectHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessagesService) {}


  onSelect(hero: Hero) {
    this.selectHero = hero;
    this.messageService.add(`selected hero id=${hero.id}`);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
