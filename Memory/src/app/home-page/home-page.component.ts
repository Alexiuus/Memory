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
    private title : String = 'Memory';
    private urlImage : String = "../../assets/person.jpg";
    private animateBox : Boolean = false;
    private blockMenu : boolean = false;

    get Title(){
      return this.title;
    } 

    get UrlImage(){
      return this.urlImage;
    } 

    get AnimateBox(){
      return this.animateBox;
    } 

    get BlockMenu(){
      return this.blockMenu;
    } 

    
    elimHomePage(){
      this.animateBox = true;

      const interval = setInterval(() => {
          this.blockMenu = true;
          clearInterval(interval);
      }, 250);
    }

    eventEndGame(){
      this.animateBox = false;
      this.blockMenu = false;
    }
}