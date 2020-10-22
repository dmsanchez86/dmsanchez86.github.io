import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LanguageItemProfileI } from 'src/app/interfaces/LanguageI';
import { AppState } from 'src/app/store';
import { qs } from 'src/environments/global_functions';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html'
})
export class PopupComponent implements OnInit {
  language: Observable<LanguageItemProfileI> = this.store.select(state => state.language.current.profile);
  show_popup: Observable<Boolean> = this.store.select(state => state.global.popup);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.calcularVariablesCSS();
  }

  calcularVariablesCSS(){
    setTimeout(() => {
      let pBody = qs('.popup-body');
      let pBodySocial = qs('.popup-body .project');
      let h = (pBodySocial.getBoundingClientRect().height);

      pBody['style'].setProperty('--pb-popup', `${h + 20}px`);
    }, 100);
  }

}
