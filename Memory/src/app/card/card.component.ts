import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() img : string = '';
  @Input() block : boolean = false; 
  fontCards : string = "../../assets/person2.jpg";
  init : boolean = true;

}
