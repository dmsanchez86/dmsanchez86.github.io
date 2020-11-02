import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-atom-loader',
  template: `
    <div class="atomLoader" id="atomLoader">
      <div class="contentAtoms" [attr.title]="language | async">
        <div class="atom"></div>
        <div class="atom"></div>
        <div class="atom"></div>
      </div>
    </div>
  `,
})
export class AtomLoaderComponent {
  language: Observable<string> = this.store.select(state => state.language.current.loading);
  constructor(private store: Store<AppState>) {}
}
