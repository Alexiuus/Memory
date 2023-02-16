import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() img : string = '';
  @Input() state : string = '';
  @Input() init : boolean = true;
  @Output() clickCard = new EventEmitter<string>();
  fontCards : string = "../../assets/person.jpg";
  
  viewFontCard(){
    return !this.init && (this.state == 'GAME_TIME');
  }

  viewimgCard(){
    return (this.init || this.state == 'INIT_GAME');
  }
  clickInCard(){
    if (this.state == 'GAME_TIME' && !this.init){
      this.init = true;
      this.clickCard.emit(this.img);
    }
  }
}
