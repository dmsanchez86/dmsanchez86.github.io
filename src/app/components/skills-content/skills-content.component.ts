import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LanguageItemProfileSkillsI, LanguageItemSkillsI } from 'src/app/interfaces/LanguageI';
import { GlobalService } from 'src/app/services/global.service';
import { AppState } from 'src/app/store';
import { PopupState } from 'src/app/store/actions/global';
import { removeThemeTMP, setThemeTMP } from 'src/environments/global_functions';

@Component({
  selector: 'app-skills-content',
  template: `
    <div class="skills-wrap" *ngIf="skills | async as skills">
      <div>
        <h1 class="skills-title" [ngClass]="{'skills-title-complete': complete}">{{ (language | async)?.title }}</h1>
        <div class="center" *ngIf="!complete">
          <a 
            [routerLink]="['/skills']" 
            (click)="cerrarModal()" 
            routerLinkActive="router-link-active" 
            class="skills-link">
            {{ (language | async)?.label_link }}
          </a>
        </div>
      </div>
      <div class="skills-body center" [ngClass]="{'skills-body-complete': complete}">
        <ng-container *ngFor="let skill of skills; let i = index">
          <ng-container *ngIf="complete; else elseTemplate">
            <a 
              routerLinkActive="router-link-active"
              class="skills-item center"
              (mouseover)="cambiarColor(skill)" 
              (mouseout)="quitarColor()" 
              [routerLink]="['/skills', skill.name]"
              [ngClass]="{'skills-item-complete': complete}" 
              [title]="skill.title">
              <i [class]="skill.icon"></i>
              <span>{{ skill.title }}</span>
            </a>
          </ng-container>
          <ng-template #elseTemplate>
            <a *ngIf="skill.main"
              (click)="cerrarModal()"
              [routerLink]="['/skills', skill.name]"
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

  constructor(private store: Store<AppState>, private global: GlobalService) { }

  ngOnInit(): void {}

  cerrarModal(){
    let profile = document.querySelector(`.profile_content_home`);

    profile.classList.remove('scaleOut');
    profile.classList.remove('scaleIn');

    setTimeout(() => profile.classList.add('scaleIn'), 100);
    this.store.dispatch(PopupState({payload: false}));
  }

  cambiarColor(skill: LanguageItemProfileSkillsI){
    setThemeTMP(skill.colors);
    this.global.metaColor(skill.colors.current_main);
  }
  quitarColor(){
    removeThemeTMP();
    this.global.metaColor('#33475b');
  }
}
