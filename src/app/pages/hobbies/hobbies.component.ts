import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LanguageItemProfileI } from 'src/app/interfaces/LanguageI';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
})
export class HobbiesComponent implements OnInit {
  language: Observable<LanguageItemProfileI> = this.store.select(state => state.language.current.profile);
  constructor(private store: Store<AppState>) {}

  ngOnDestroy() {
    document.body.classList.remove('contact');
  }

  ngOnInit() {
    document.body.classList.add('contact');
    document.querySelector('#favicon').setAttribute('href', 'assets/images/favicon_contact.png');
  }
}
