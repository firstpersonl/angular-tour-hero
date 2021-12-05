import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-totals',
  templateUrl: './hero-totals.component.html',
  styleUrls: ['./hero-totals.component.css']
})
export class HeroTotalsComponent implements OnInit, OnChanges {

  @Input() heroes?: Array<Hero>

  superHero?: Hero;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.error('changes')
    console.log(changes['hero']);
  }

  ngOnInit(): void {
    if(this.heroes && this.heroes.length) {
      this.superHero = (this.heroes.filter(hero => hero.id > 10))[0]
    }
  }



}
