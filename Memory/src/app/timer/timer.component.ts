import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit{
  @Input() timeInit : number = 0;
  @Input() timeGame : number = 0;
  @Output() stateGame = new EventEmitter<string>();
  interval: any;

  ngOnInit() {
    this.interval = setInterval(() => {
      if (this.timeInit > 0) {
        this.timeInit--;
      } else if(this.timeGame > 0) {
        this.stateGame.emit('GAME_TIME');
        this.timeInit = this.timeGame;
        this.timeGame = 0;
      } else{
        clearInterval(this.interval);
      }
    }, 1000);
  }
}
