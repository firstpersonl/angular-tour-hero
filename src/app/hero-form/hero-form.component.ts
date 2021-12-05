import { Component, OnInit } from '@angular/core';
import { HeroPower } from '../hero';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
        cursor: 'pointer',
        backgroundColor: '#456cd7'
      })),
      state('close', style({
        opacity: .6,
        cursor: 'now-allowed',
        backgroundColor: '#CCC'
      })),
      transition('open =>close', [
        animate('.5s 100ms ease-in-out')
      ]),
      transition('close=>open', [
        animate('.5s 100ms ease')
      ])
    ]),

    // *ngFor 和 *ngIf 会自动运行 :enter 和 :leave转场·
    trigger('showHidden', [
      // :leave 等于 * => void
      transition(':leave', [
        style({ translate: 'translateX(-100%)'}),
        animate('.1s 100ms ease-in-out')
      ]),
      // :enter 等于 void => *
      transition(':enter', [
        style({ translate: 'translateX(100%)'}),
        animate('.1s 100ms ease-in-out')
      ])
    ])
  ]
})
export class HeroFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new HeroPower(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit = () => {
    this.submitted = true;
  }

  newHero() {
    this.model = new HeroPower(18, '', '');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
