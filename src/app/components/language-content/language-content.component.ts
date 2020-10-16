import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, AppStateLanguaje } from 'src/app/store';
import { ChangeLanguage } from 'src/app/store/actions/language';

@Component({
  selector: 'app-language-content',
  template: `
    <div
      class="language-content"
      [attr.title-ref]="language.current.label"
      *ngIf="language | async as language">
      <span>
        <a
          href="javascript:void(0)"
          [ngClass]="{ active: language.current.ref === 'es' }"
          [attr.title]="language.current.label"
          (click)="cambiarLenguaje('es')"
        >
          <span><i class="fa fa-language"></i></span>
          {{ language.es.ref }}
        </a>
      </span>
      <span>
        <a
          href="javascript::void(0)"
          [ngClass]="{ active: language.current.ref === 'en' }"
          [attr.title]="language.current.label"
          (click)="cambiarLenguaje('en')"
        >
          <span><i class="fa fa-language"></i></span>
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
