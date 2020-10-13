import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';
import { AppState, AppStateLanguaje } from 'src/app/store';

@Component({
  selector: 'app-twitter-content',
  template: `
    <div class="twitter_content" *ngIf="(language | async) as lang">
      <label
        for="twitter_content"
        [attr.title-ref]="lang.current.global.tweets"
      >
        <i class="fa fa-twitter"></i>
      </label>
      <input type="checkbox" id="twitter_content" />
      <div class="container close">
        <a
          class="twitter-timeline"
          data-lang="en"
          data-width="300"
          data-height="400"
          data-theme="light"
          data-link-color="#19CF86"
          href="https://twitter.com/dmsanchez86"
          ><i class="fa fa-twitter" style="color: white"></i
        ></a>
      </div>
    </div>
  `,
})
export class TwitterContentComponent {
  language: Observable<AppStateLanguaje> = this.store.select((state) => state.language);

  constructor(private global: GlobalService, private store: Store<AppState>) {}

  cerrarMenu() {
    this.global.cerrarMenu();
  }
}
