import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LanguageItemProfileI } from 'src/app/interfaces/LanguageI';
import { SocialItemI } from 'src/app/interfaces/SocialItemI';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-social-networkings',
  templateUrl: './social-networkings.component.html'
})
export class SocialNetworkingsComponent {
  language: Observable<LanguageItemProfileI> = this.store.select(state => state.language.current.profile);
  social: Observable<SocialItemI[]> = this.store.select(state => state.social.data);

  constructor(private store: Store<AppState>) { }
}
