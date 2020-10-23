import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-increment',
  template: `<span (click)="play(true)">{{ initial }}</span>`,
})
export class NumberIncrementComponent implements OnInit {
  @Input() num: number;
  interval: any;
  initial: number = 0;

  ngOnInit() {
    this.play();
  }

  play(reload?){
    if(reload){
      this.initial = 0;
    }

    this.interval = setInterval(() => {
      if (this.initial < this.num) {
        this.initial++;
      } else {
        clearInterval(this.interval);
      }
    }, this.num < 10 ? 100 : 15);
  }
}
