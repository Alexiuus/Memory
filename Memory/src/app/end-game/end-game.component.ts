import { Component, Input, OnInit } from '@angular/core';

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

  title : string = '';
  isGameOver : boolean = true;
  
  ngOnInit(){
    this.isGameOver = (this.state === 'GAME_OVER');

    if (this.isGameOver) this.title = 'Game over!';
    else this.title = "Won!";
  }
}
