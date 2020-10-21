import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LanguageItemI, LanguageItemProfileSkillsI } from 'src/app/interfaces/LanguageI';
import { GlobalService } from 'src/app/services/global.service';
import { AppState } from 'src/app/store';
import { setSkill } from 'src/app/store/actions/skills';
import { bodyAddClass, bodyRemoveClass, favicon } from 'src/environments/global_functions';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit, OnDestroy {
  skill$: Observable<LanguageItemProfileSkillsI> = this.store.select(
    (state) => state.skills.current
  );

  language$: Observable<LanguageItemI> = this.store.select(
    (state) => state.language.current
  );

  name: string;

  constructor(
    private store: Store<AppState>,
    private global: GlobalService,
    private params: ActivatedRoute
  ) {
    this.name = this.params.snapshot.params.slug;
  }

  ngOnDestroy() {
    bodyRemoveClass('portafolio');
  }

  ngOnInit() {
    bodyAddClass('portafolio');
    favicon('portafolio');

    this.global.titlePage(`skill`, this.name);
    this.global.metaColor('#00897b');

    if (this.name) {
      this.store.dispatch(setSkill({ slug: this.name }));
    }
  }
}
