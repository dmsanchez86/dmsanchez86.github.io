import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LanguageItemProfileSkillsI, LanguageItemSkillsI } from 'src/app/interfaces/LanguageI';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-skills-content',
  template: `
    <div class="skills-wrap" *ngIf="skills | async as skills">
      <div>
        <h1 class="skills-title" [ngClass]="{'skills-title-complete': complete}">{{ (language | async)?.title }}</h1>
        <div class="center" *ngIf="!complete">
          <a [routerLink]="['/skills']" (click)="cerrarModal()" routerLinkActive="router-link-active"  class="skills-link">{{ (language | async)?.label_link }}</a>
        </div>
      </div>
      <div class="skills-body center" [ngClass]="{'skills-body-complete': complete}">
        <ng-container *ngFor="let skill of skills; let i = index">
          <ng-container *ngIf="complete; else elseTemplate">
            <a [routerLink]="['/skills', 'detail', skill.name]" routerLinkActive="router-link-active"  class="skills-item center" [ngClass]="{'skills-item-complete': complete}" [title]="skill.title">
              <i [class]="skill.icon"></i>
              <span>{{ skill.title }}</span>
            </a>
          </ng-container>
          <ng-template #elseTemplate>
            <a *ngIf="skill.main"
              (click)="cerrarModal()"
              [routerLink]="['/skills', 'detail', skill.name]"
              class="skills-item center"
              [title]="skill.title">
              <i [class]="skill.icon"></i>
              <span>{{ skill.title }}</span>
            </a>
          </ng-template>

        </ng-container>
      </div>
    </div>
  `,
})
export class SkillsContentComponent implements OnInit {
  @Input() complete: boolean;

  language: Observable<LanguageItemSkillsI> = this.store.select(state => state.language.current.skills);
  skills: Observable<LanguageItemProfileSkillsI[]> = this.store.select(state => state.skills.data);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {}

  cerrarModal(){
    let body = document.body;
    let popup = document.querySelector('.popup');
    let profile = document.querySelector(`.profile_content_home`);

    body.classList.remove('profile');
    profile.classList.remove('scaleOut');
    profile.classList.remove('scaleIn');
    popup.classList.remove('active');

    setTimeout(() => profile.classList.add('scaleIn'), 100);
  }
}
