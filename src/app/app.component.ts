import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalService } from './services/global.service';
import { AppState, AppStateLanguaje } from './store';
import { mostrarPopup } from './store/actions/global';
import { ChangeLanguage } from './store/actions/language';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  language: Observable<AppStateLanguaje> = this.store.select(state => state.language);

  constructor(
    private global: GlobalService,
    private store: Store<AppState>,
    private router: Router
  ){
    if(localStorage.language){
      this.store.dispatch(ChangeLanguage({ key: localStorage.language }));
    }
  }

  ngOnInit(){
    setTimeout(() => {
      let atomLoader: HTMLElement = document.querySelector('#atomLoader');
      atomLoader.style.display = 'none';
    }, 300);

    if (
      this.router.url.indexOf('view=profile') ||
      this.router.url.indexOf('#about')
    ) {
      localStorage.fromParent = true;

      this.store.dispatch(mostrarPopup({ payload: true }));
    }
  }

  cerrarMenu(){
    this.global.cerrarMenu();
  }
}
