import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-increment',
  template: `{{ initial }}`
})
export class NumberIncrementComponent implements OnInit {
  @Input() num: number;
  interval: any;
  initial: number = 0;

  ngOnInit() {
    this.interval = setInterval(()=>{
      if(this.initial < this.num){
        this.initial++;
      }else{
        clearInterval(this.interval);
      }
    }, this.num < 10 ? 100 : 30);
  }

}
