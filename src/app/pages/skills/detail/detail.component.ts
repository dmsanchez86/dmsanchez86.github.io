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
  template: `
    <div
      id="section_portafolio"
      class="section active"
      style="padding: 10vh 0 1rem;min-height: 100vh;"
    >
      <div class="skills-wrap" *ngIf="skill$ | async as skill">
        <div class="skills-icon-wrap">
          <i [class]="skill.icon"></i>
        </div>
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <a class="skills-item-link" [routerLink]="['/skills']">
                <i class="fas fa-arrow-left"></i> {{ (language$ | async).global.back }}
              </a>
            </div>
            <div class="col l6 s12">
              <h1 class="skills-title-complete">{{ skill?.title }}</h1>
            </div>
          </div>
          <div class="row">
            <div class="col l6 offset-l6 s12">
              <div class="skills-body">
                <div
                  class="skills-item skills-item-detail skills-item-detail"
                  [innerHTML]="skill.description"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
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
