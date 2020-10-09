import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalService } from './services/global.service';
import { AppState } from './store';
import { changeLanguage } from './store/actions/language';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pageAngular';

  language: Observable<any> = this.store.select(state => state.language);

  constructor(private global: GlobalService, private store: Store<AppState>){
    setTimeout(() => {
      let atomLoader: HTMLElement = document.querySelector('#atomLoader');
      atomLoader.style.display = 'none';
    }, 300);
  }

  cerrarMenu(){
    this.global.cerrarMenu();
  }

  cambiarLenguaje(key){
    this.store.dispatch(changeLanguage({ key }));
  }
}
