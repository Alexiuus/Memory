import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit{
  @Input() curState : string = 'INIT_GAME';
  @Output() stateGame = new EventEmitter<string>();
  private interval: any;
  private timeInit : number = 11;
  private timeGame : number = 30;
  
  get isTimeInitLessFive(){
    return this.timeInit < 5;
  }

  get TimeInit(){
    return this.timeInit;
  }

  private resetTimer(){
    this.timeInit = 10;
    this.timeGame = 30;
  }

  ngOnInit() {
    this.interval = setInterval(() => {
      if (this.timeInit > 0 && (this.curState === 'INIT_GAME')) {
        this.timeInit--;
      } else if(this.timeGame > 0 && (this.curState === 'INIT_GAME')) {
        this.stateGame.emit('GAME_TIME');
        this.timeInit = this.timeGame;
        this.timeGame = 0;
      } else if(this.curState === 'INIT_GAME') {
        this.stateGame.emit('END_TIME');
        this.resetTimer();
      } else {
        this.resetTimer();
      }
    }, 1000);
  }
}
