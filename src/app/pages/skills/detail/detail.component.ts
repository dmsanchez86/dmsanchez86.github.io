import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LanguageItemProfileSkillsI } from 'src/app/interfaces/LanguageI';
import { GlobalService } from 'src/app/services/global.service';
import { AppState } from 'src/app/store';
import { setSkill } from 'src/app/store/actions/skills';
import { bodyAddClass, bodyRemoveClass, favicon } from 'src/environments/global_functions';

@Component({
  selector: 'app-detail',
  template: `
    <div
      id="section_portafolio"
      class="section active"
      style="padding: 10vh 0 1rem;min-height: 100vh;">
      <div class="skills-wrap" *ngIf="skill$ | async as skill">
        <div>
          <h1 class="skills-title skills-title-complete">{{ skill?.title }}</h1>
        </div>
        <div class="skills-body center">
          <div class="skills-item skills-item-detail center" [title]="skill.title">
            <i [class]="skill.icon"></i>
            <span>{{ skill.title }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class DetailComponent implements OnInit, OnDestroy {
  skill$: Observable<LanguageItemProfileSkillsI> = this.store.select((state) => state.skills.current);

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

    this.global.titlePage(`Skills Detail`);
    this.global.metaColor('#00897b');

    if (this.name) {
      this.store.dispatch(setSkill({ slug: this.name }));
    }
  }
}
