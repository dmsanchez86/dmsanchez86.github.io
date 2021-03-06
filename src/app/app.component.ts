import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { qs } from 'src/environments/global_functions';
import { GlobalService } from './services/global.service';
import { AppState, AppStateLanguaje } from './store';
import { PopupState } from './store/actions/global';
import { ChangeLanguage } from './store/actions/language';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  language: Observable<AppStateLanguaje> = this.store.select(state => state.language);
  show_popup: Observable<Boolean> = this.store.select(state => state.global.popup);

  constructor(
    private global: GlobalService,
    private store: Store<AppState>,
    @Inject(DOCUMENT) private document: Document
  ){
    if(localStorage.language){
      this.store.dispatch(ChangeLanguage({ key: localStorage.language }));
      this.document.documentElement.lang = localStorage.language;
    }
  }

  ngOnInit(){
    setTimeout(() => {
      let atomLoader: HTMLElement = qs('#atomLoader');
      atomLoader.style.display = 'none';
    }, 1000);

    if (
      location.href.indexOf('view=profile') !== -1 ||
      location.href.indexOf('#about') !== -1
    ) {
      localStorage.fromParent = true;

      this.store.dispatch(PopupState({ payload: true }));
    }
  }

  cerrarMenu(){
    this.global.cerrarMenu();
    this.store.dispatch(PopupState({payload: false}));
  }
}
