import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LanguageItemProfileSkillsI } from 'src/app/interfaces/LanguageI';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-skills-content',
  template: `
    <div class="skills-wrap" *ngIf="skills | async as skills">
      <div>
        <h1 class="skills-title">{{ (language | async)?.title }}</h1>
        <div class="center">
          <a [routerLink]="['/skills']" routerLinkActive="router-link-active"  class="skills-link">{{ (language | async)?.label_link }}</a>
        </div>
      </div>
      <div class="skills-body center">
        <ng-container *ngFor="let skill of skills">
          <div class="skills-item center" [title]="skill.title">
            <i [class]="skill.icon"></i>
            <span>{{ skill.title }}</span>
          </div>
        </ng-container>
      </div>
    </div>
  `,
})
export class SkillsContentComponent implements OnInit {
  skills: Observable<LanguageItemProfileSkillsI[]> = this.store.select(state => state.skills.data);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {}
}
