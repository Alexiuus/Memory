import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.css']
})
export class EndGameComponent implements OnInit {
  @Input() state : string = '';
  @Input() type : string = '';
  @Input() lives : number = 0;
  @Input() totalCards : number = 0;
  @Output() retoreGame = new EventEmitter<string>();

  title : string = '';
  isGameOver : boolean = true;
  
  ngOnInit(){
    this.isGameOver = (this.state === 'GAME_OVER');

    if (this.isGameOver) this.title = 'Game over!';
    else this.title = "Won!";
  }

  eventNextEndGame(event : string){
    this.retoreGame.emit(event);
  }
}
