import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LanguageItemProjectsI } from 'src/app/interfaces/LanguageI';
import { ProjectItemI } from 'src/app/interfaces/ProjectItemI';
import { GlobalService } from 'src/app/services/global.service';
import { AppState } from 'src/app/store';
import { bodyAddClass, bodyRemoveClass, favicon } from 'src/environments/global_functions';

@Component({
  selector: 'app-projects',
  template: `
    <div class="section section-projects active">
      <ng-container *ngFor="let project of projects | async; let i = index">
        <app-item-project
          [project]="project"
          [classes]="'project project-h'"
          [i]="i"
          [key]="'projects'"></app-item-project>
      </ng-container>
    </div>
  `,
})
export class ProjectsComponent implements OnInit {
  projects: Observable<ProjectItemI[]> = this.store.select(state => state.projects.data);
  language: Observable<LanguageItemProjectsI> = this.store.select(state => state.language.current.projects);

  constructor(private store: Store<AppState>, private global: GlobalService) {}

  ngOnDestroy() {
    bodyRemoveClass('projects');
  }

  ngOnInit() {
    bodyAddClass('projects');
    favicon('projects');

    this.global.titlePage(`projects`);
    this.global.metaColor('#df9e28');
  }
}
