import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LanguageItemNavI } from 'src/app/interfaces/LanguageI';
import { MenuItemI } from 'src/app/interfaces/MenuItemI';
import { GlobalService } from 'src/app/services/global.service';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
})
export class NavigatorComponent {
  menus: Observable<MenuItemI[]> = this.store.select(state => state.menu.data);
  language: Observable<LanguageItemNavI> = this.store.select(state => state.language.current.nav);

  constructor(private global: GlobalService, private store: Store<AppState>){}

  buttonMenu() {
    document.querySelector('.main-app').classList.add('menu');
    document.querySelector(`#menu`).classList.add('open');
    document.querySelector(`.overlay-menu`).classList.add('open');
    document.querySelector(`.button_menu`)['style'].opacity = 0;
  }

  cerrarMenu() {
    this.global.cerrarMenu();
  }
}
