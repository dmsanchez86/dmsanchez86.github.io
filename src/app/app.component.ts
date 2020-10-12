import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalService } from './services/global.service';
import { AppState, AppStateLanguaje } from './store';
import { ChangeLanguage } from './store/actions/language';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  language: Observable<AppStateLanguaje> = this.store.select(state => state.language);

  constructor(private global: GlobalService, private store: Store<AppState>){
    setTimeout(() => {
      let atomLoader: HTMLElement = document.querySelector('#atomLoader');
      atomLoader.style.display = 'none';
    }, 300);

    if(localStorage.language){
      this.store.dispatch(ChangeLanguage({ key: localStorage.language }));
    }
  }

  cerrarMenu(){
    this.global.cerrarMenu();
  }
}
