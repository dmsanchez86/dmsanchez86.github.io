import { Component } from '@angular/core';

declare const $;

interface MenuI {
  name: string;
  icon: string;
  href: string;
}

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
})
export class NavigatorComponent {
  menus: MenuI[] = [
    {
      name: 'Home',
      href: '#home',
      icon: 'home',
    },
    {
      name: 'Projects',
      href: '#projects',
      icon: 'gamepad',
    },
    {
      name: 'Portafolio',
      href: '#portafolio',
      icon: 'flask',
    },
    {
      name: 'Contact',
      href: '#contact',
      icon: 'mobile',
    },
  ];

  buttonMenu() {
    $('body').addClass('menu');
    $('#menu,.overlay-menu').addClass('open');
    $(this).fadeOut('1000');
  }
}
