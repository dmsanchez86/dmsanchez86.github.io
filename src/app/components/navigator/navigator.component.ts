import { Component } from '@angular/core';
import { MenuItemI } from 'src/app/interfaces/MenuItemI';

declare const $;

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
})
export class NavigatorComponent {
  menus: MenuItemI[] = [
    {
      name: 'Home',
      href: '/',
      icon: 'home',
    },
    {
      name: 'Projects',
      href: '/projects',
      icon: 'gamepad',
    },
    {
      name: 'Portafolio',
      href: '/portafolio',
      icon: 'flask',
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: 'mobile',
    },
    {
      name: 'Hobbies',
      href: '/hobbies',
      icon: 'circle',
    },
  ];

  buttonMenu() {
    $('body').addClass('menu');
    $('#menu,.overlay-menu').addClass('open');
    $(this).fadeOut('1000');
  }
}
