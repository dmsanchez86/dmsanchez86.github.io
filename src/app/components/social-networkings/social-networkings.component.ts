import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-social-networkings',
  templateUrl: './social-networkings.component.html'
})
export class SocialNetworkingsComponent {
  language: Observable<any> = this.store.select(state => state.language.current.profile);

  constructor(private store: Store<AppState>) { }
}
