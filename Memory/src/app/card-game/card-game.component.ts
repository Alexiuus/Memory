import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EndGameComponent } from '../end-game/end-game.component';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css'],
})
export class CardGameComponent {
  state : string = 'INIT_TIME';
  private previusCard = '';
  private totalCardsSelect = 0;
  totalLives : number = 3;
  win : boolean = false;
  cards : string[] = [
    '../../assets/person.jpg',
    '../../assets/person2.jpg',
    '../../assets/person.jpg',
    '../../assets/person2.jpg',
    '../../assets/person2.jpg',
    '../../assets/person2.jpg',
    '../../assets/person.jpg',
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

  constructor(private modalService: NgbModal) {}

	endGame(state : string, type : string) {
    const modalRef = this.modalService.open(EndGameComponent);
		modalRef.componentInstance.state = state;
    modalRef.componentInstance.type = type;
    modalRef.componentInstance.lives = this.totalLives;
    modalRef.componentInstance.totalCards = this.totalCardsSelect;
	}

  private shuffleList(list : string[]) {
    const ordlist : string[] = list.sort(() => Math.random() - 0.5);

    return ordlist;
  }
  cardsAleatory : string[] = this.shuffleList(this.cards);

  stateGame(event : string){
    this.endGame('GAME_OVER', 'TIME_UP');
    if(event === 'GAME_TIME') this.state = 'GAME_TIME';
    else if(event === 'END_TIME') this.endGame('GAME_OVER', 'TIME_UP');
  }

  verifySelect(img : string){
    if(this.totalCardsSelect % 2 !== 0 && this.totalCardsSelect > 0 && img !== this.previusCard) this.totalLives--; 
    this.previusCard = img;
    this.totalCardsSelect++;
    if(this.totalLives === 0) this.endGame('GAME_OVER', '0_LIVES');
    else if(this.totalCardsSelect === 16) this.endGame('GAME_WIN', '');
  }

}
