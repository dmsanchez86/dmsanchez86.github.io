import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState, AppStateLanguaje } from 'src/app/store';
import { LanguageItemI } from '../interfaces/LanguageI';
import { PopupState } from '../store/actions/global';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  current: LanguageItemI;
  currentPage: string = '';

  constructor(
    private meta: Meta,
    private title: Title,
    private store: Store<AppState>,
    private actions: Actions
  ) {
    this.store.select('language').subscribe((language: AppStateLanguaje) => {
      this.current = language.current;
    });
    this.actions.subscribe((action: any) => {
      if (action.type === '[LANGUAGE] change') {
        this.titlePage(this.currentPage);
      }
    });
  }

  cerrarMenu(){
    let body = document.querySelector('.main-app');
    let profile = document.querySelector(`.profile_content_home`);
    let menu = document.querySelector(`#menu`);
    let overlay_menu = document.querySelector(`.overlay-menu`);

    if (body.classList.contains('profile')) {
      profile.classList.remove('scaleOut');

      setTimeout(() => profile.classList.add('scaleIn'), 500);
      this.store.dispatch(PopupState({payload: false}));
    } else {
      body.classList.remove('menu');
      menu.classList.remove('open');
      overlay_menu.classList.remove('open');
      document.querySelector(`.button_menu`)['style'].opacity = 1;
    }
  }

  titlePage(key: string, pre?: string){
    this.currentPage = key;
    this.title.setTitle(`${pre ? `${pre} ` : ''}${this.current.nav[key]} | ${this.current.profile.name}`);
  }

  metaColor(color: string){
    this.meta.updateTag({name: 'theme-color', content: color});
  }
}
