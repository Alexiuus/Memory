import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
    animations: [
        trigger('moveBox', [
          state('inactive', style({ transform: 'translateX(0)' })),
          state('active', style({ transform: 'translatey(-1000px)' })),
          transition('inactive => active', animate('.5s ease-in'))
        ])
      ]
})
export class homePageComponent {
    title : String = 'Memory';
    urlImage : String = "../../assets/person.jpg";
    animateBox : Boolean = false;
}