import { Component, OnInit } from '@angular/core';

declare const $;

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html'
})
export class NavigatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buttonMenu(){
    $('body').addClass('menu');
    $('#menu,.overlay-menu').addClass('open');
    $(this).fadeOut('1000');
  }

}
