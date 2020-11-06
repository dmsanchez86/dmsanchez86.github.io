import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LanguageItemProjectsI } from 'src/app/interfaces/LanguageI';
import { ProjectItemI } from 'src/app/interfaces/ProjectItemI';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-item-project',
  template: `
    <div class="item-project-wrap" [attr.tabIndex]="this.i + 1" *ngIf="language | async as language">
      <div [class]="classes">
        <h1 class="title">
          <ng-container *ngIf="project?.url">
            <a [href]="project?.url" target="_blank">{{ language[project?.key].name }}</a>
          </ng-container>
          <ng-container *ngIf="project?.url_play_store && project?.url_app_store;else other">
            <a [href]="'javascript::void(0)'" *ngIf="project?.url_play_store">{{ language[project?.key].name }}</a>
          </ng-container>
          <ng-template #other >
            <a [href]="'javascript::void(0)'" *ngIf="project?.url_app_store && !project?.url_play_store">{{ language[project?.key].name }}</a>
            <a [href]="'javascript::void(0)'" *ngIf="project?.url_play_store && !project?.url_app_store">{{ language[project?.key].name }}</a>
          </ng-template>
          <app-tools *ngIf="!no_tools" 
            [project]="project" 
            [no_preview]="no_preview"
            [url]="key"></app-tools>
        </h1>
      </div>
      <div class="item-project-description" *ngIf="complete">

        <div class="container">
          <div class="row">
            <div class="col-9">
              <div class="item-project-description-wrap">
                <ng-container *ngIf="language[project?.key].description;else otherD">
                  {{language[project?.key].description}}
                </ng-container>
                <ng-template #otherD>
                  {{ language.default }}
                </ng-template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ItemProjectComponent {
  @Input() project: ProjectItemI;
  @Input() i: number;
  @Input() key: string;
  @Input() classes: any;
  @Input() no_tools: boolean;
  @Input() no_preview: boolean;
  @Input() complete: boolean;
  language: Observable<LanguageItemProjectsI> = this.store.select(
    (state) => state.language.current[this.key]
  );

  constructor(private store: Store<AppState>) {}
}
