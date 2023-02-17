import { Component, EventEmitter, Output } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { EndGameComponent } from '../end-game/end-game.component';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css'],
})
export class CardGameComponent {
  @Output() event = new EventEmitter<string>();
  private previusCard = '';
  private totalCardsSelect = 0;
  private cards : string[] = [
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
  private cardsAleatory : string[] = this.shuffleList(this.cards);
  private totalLives : number = 3;
  private state : string = 'INIT_TIME';
  private curState : string = 'INIT_GAME';

  constructor(private config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
		config.keyboard = false;
  }

  private shuffleList(list : string[]) {
    const ordlist : string[] = list.sort(() => Math.random() - 0.5);
    return ordlist;
  }

  //------Modal------
	private endGame(state : string, type : string) {
    this.curState = 'END_GAME';
    const modalRef = this.modalService.open(EndGameComponent);
		modalRef.componentInstance.state = state;
    modalRef.componentInstance.type = type;
    modalRef.componentInstance.lives = this.totalLives;
    modalRef.componentInstance.totalCards = this.totalCardsSelect;
    modalRef.componentInstance.retoreGame.subscribe((event : string) => {
      this.eventNextEndGame(event);
      modalRef.close();
    });
	}
  private restoreGame(){
    this.previusCard = '';
    this.totalCardsSelect = 0;
    this.cardsAleatory = this.shuffleList(this.cards);
    this.totalLives = 3;
    this.curState = 'INIT_GAME';
    this.state = 'INIT_TIME';
  }

  private eventNextEndGame(event : string){
    if (event === 'BACK_MENU') {
      this.event.emit();
    } else if (event === 'NEW_GAME') {
      this.restoreGame();

    } 
  }

  // GET's
  get Cards(){
    return this.cardsAleatory;
  }

  get CurState(){
    return this.curState;
  }

  get TotalLives(){
    return this.totalLives;
  }

  get State(){
    return this.state;
  }
  get IsStateInit(){
    return this.state === 'INIT_TIME';
  }
  //------Game------
  stateGame(event : string){
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
