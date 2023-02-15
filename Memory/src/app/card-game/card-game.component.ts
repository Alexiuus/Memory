import { Component } from '@angular/core';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css'],
})
export class CardGameComponent {
  cards : string[] = [
    '../../assets/person.jpg',
    '../../assets/person.jpg',
    '../../assets/person.jpg',
    '../../assets/person.jpg',
    '../../assets/person.jpg',
    '../../assets/person.jpg',
    '../../assets/person.jpg',
    '../../assets/person.jpg',
    '../../assets/person.jpg',
    '../../assets/person.jpg',
    '../../assets/person.jpg',
    '../../assets/person.jpg',
    '../../assets/person.jpg',
    '../../assets/person.jpg',
    '../../assets/person.jpg',
    '../../assets/person.jpg'
  ]
  private shuffleList(list : string[]) {
    const ordlist : string[] = list.sort(() => Math.random() - 0.5);

    return ordlist;
  }
  cardsAleatory : string[] = this.shuffleList(this.cards);


}
