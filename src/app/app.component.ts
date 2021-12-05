import { animate, animateChild, animation, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimation', [
      transition('HomePage <=> DetailPage', [
        style({position: 'relative'}),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          })
        ]),
        query(':enter',[
          style({
            left: '-100%',
          })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('300ms ease-out', style({left: '100%'}))
          ]),
          query(':enter', [
            animate('300ms ease-out', style({left: '0'}))
          ])
        ]),
        query(':enter', animateChild())
      ]),
      transition('DetailPage <=> HomePage', [
        style({position: 'relative'}),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          })
        ]),
        query(':enter',[
          style({
            left: '100%',
          })
        ]),
        query(':leave', animateChild()),
        group([
          // query(':leave', [
          //   animate('300ms ease-out', style({left: '100%'}))
          // ]),
          query(':enter', [
            animate('300ms ease-out', style({left: '0'}))
          ])
        ]),
        query(':enter', animateChild())
      ])
    ])
  ]
})
export class AppComponent {
  title = 'angular-tour-of-heroes';

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
