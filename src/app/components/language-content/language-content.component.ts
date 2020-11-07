import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, AppStateLanguaje } from 'src/app/store';
import { ChangeLanguage } from 'src/app/store/actions/language';
import { DOCUMENT } from '@angular/common';  

@Component({
  selector: 'app-language-content',
  templateUrl: './language-content.component.html',
})
export class LanguageContentComponent {
  language: Observable<AppStateLanguaje> = this.store.select((state) => state.language);

  constructor(
    private store: Store<AppState>,
    @Inject(DOCUMENT) private document: Document
  ) {}

  cambiarLenguaje(key) {
    this.store.dispatch(ChangeLanguage({ key }));
    this.document.documentElement.lang = key;
  }
}
