import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, AppStateLanguaje } from 'src/app/store';
import { ChangeLanguage } from 'src/app/store/actions/language';

@Component({
  selector: 'app-language-content',
  template: `
    <div class="language-content" *ngIf="language | async as language">
      <span><i class="fa fa-language"></i></span>
      <span>
        <a
          href="javascript:void(0)"
          [ngClass]="{ active: language.current.ref === 'es' }"
          [title]="language.es.title"
          (click)="cambiarLenguaje('es')"
        >
          {{ language.es.ref }}
        </a>
      </span>
      <span>
        <a
          href="javascript::void(0)"
          [ngClass]="{ active: language.current.ref === 'en' }"
          [title]="language.en.title"
          (click)="cambiarLenguaje('en')"
        >
          {{ language.en.ref }}
        </a>
      </span>
    </div>
  `,
})
export class LanguageContentComponent {
  language: Observable<AppStateLanguaje> = this.store.select((state) => state.language);

  constructor(private store: Store<AppState>) {}

  cambiarLenguaje(key) {
    this.store.dispatch(ChangeLanguage({ key }));
  }
}
