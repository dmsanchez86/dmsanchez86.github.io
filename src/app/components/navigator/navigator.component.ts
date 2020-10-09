import { Component } from '@angular/core';
import { MenuItemI } from 'src/app/interfaces/MenuItemI';
import { GlobalService } from 'src/app/services/global.service';

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

  constructor(private global: GlobalService){}

  buttonMenu() {
    document.body.classList.add('menu');
    document.querySelector(`#menu`).classList.add('open');
    document.querySelector(`.overlay-menu`).classList.add('open');
    document.querySelector(`.button_menu`).style.opacity = 0;
  }

  cerrarMenu() {
    this.global.cerrarMenu();
  }
}
