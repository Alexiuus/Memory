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
        ]),
        trigger('moveGame', [
          state('active', style({transform: 'translatey(680px)'})),
          transition('inactive => active', 
          [
            animate(100, style({})),
            animate(500, style({transform: 'translatey(680px)'}))
          ]
        )])
      ]
})
export class homePageComponent {
    title : String = 'Memory';
    urlImage : String = "../../assets/person.jpg";
    animateBox : Boolean = false;
    blockMenu : boolean = false;
    private timer : number = 1;
    private interval: any;

    elimHomePage(){
      this.animateBox = true;
      this.interval = setInterval(() => {
        if (this.timer > 0) {
          this.timer--;
        } else {
          this.blockMenu = true;
          clearInterval(this.interval);
        }
      }, 100);
    }
}