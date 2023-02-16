import { Component } from '@angular/core';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css'],
})
export class CardGameComponent {
  state : string = 'INIT_TIME';
  private previusCard = '';
  private totalCardsSelect = 0;
  totalLives = 3;
  win : boolean = false;
  cards : string[] = [
    '../../assets/person.jpg',
    '../../assets/person2.jpg',
    '../../assets/person2.jpg',
    '../../assets/person2.jpg',
    '../../assets/person2.jpg',
    '../../assets/person2.jpg',
    '../../assets/person2.jpg',
    '../../assets/person2.jpg',
    '../../assets/person2.jpg',
    '../../assets/person2.jpg',
    '../../assets/person2.jpg',
    '../../assets/person2.jpg',
    '../../assets/person2.jpg',
    '../../assets/person2.jpg',
    '../../assets/person2.jpg',
    '../../assets/person2.jpg'
  ]
  private shuffleList(list : string[]) {
    const ordlist : string[] = list.sort(() => Math.random() - 0.5);

    return ordlist;
  }
  cardsAleatory : string[] = this.shuffleList(this.cards);

  stateGame(event : string){
    if(event === 'GAME_TIME') this.state = 'GAME_TIME';
  }

  verifySelect(img : string){
    if(this.totalCardsSelect % 2 !== 0 && this.totalCardsSelect > 0 && img !== this.previusCard) this.totalLives--; 
    this.previusCard = img;
    this.totalCardsSelect++;
    if(this.totalCardsSelect === 16) this.win = true;
  }

}
