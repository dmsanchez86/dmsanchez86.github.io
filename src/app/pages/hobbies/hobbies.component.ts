import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LanguageItemProfileI } from 'src/app/interfaces/LanguageI';
import { GlobalService } from 'src/app/services/global.service';
import { AppState } from 'src/app/store';
import { bodyAddClass, bodyRemoveClass, favicon } from 'src/environments/global_functions';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
})
export class HobbiesComponent implements OnInit {
  language: Observable<LanguageItemProfileI> = this.store.select(state => state.language.current.profile);
  constructor(private store: Store<AppState>, private global: GlobalService) {}

  ngOnDestroy() {
    bodyRemoveClass('hobbies');
  }

  ngOnInit() {
    bodyAddClass('hobbies');
    favicon('contact');

    this.global.titlePage(`hobbies`);
    this.global.metaColor('#D67F35');
  }
}
