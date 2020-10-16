import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LanguageItemProfileI, LanguageItemProfileSkillsI } from 'src/app/interfaces/LanguageI';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html'
})
export class PopupComponent implements OnInit {
  language: Observable<LanguageItemProfileI> = this.store.select(state => state.language.current.profile);
  skills: Observable<LanguageItemProfileSkillsI[]> = this.store.select(state => state.skills.data);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

}
