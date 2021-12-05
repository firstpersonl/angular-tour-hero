import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  hero?: Hero
  
  constructor(private router: ActivatedRoute, private heroService: HeroService) { }

  ngOnInit(): void {

    this.router.paramMap.subscribe(params => {
      this.getHero(Number(params.get('id')));
    })
  }

  getHero(id: number) {
    this.heroService.getHeroes().subscribe(heroes => {
      this.hero = heroes.find(hero =>hero.id === id);
    })
  }

}
