import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LanguageItemProjectsI } from 'src/app/interfaces/LanguageI';
import { ProjectItemI } from 'src/app/interfaces/ProjectItemI';
import { GlobalService } from 'src/app/services/global.service';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-projects',
  template: `
    <div id="section_projects" style="padding: 0;height: 100vh;overflow-y: auto;">
      <ng-container *ngFor="let project of projects | async; let i = index">
        <app-item-project [project]="project" [i]="i" [key]="'projects'"></app-item-project>
      </ng-container>
    </div>
  `,
})
export class ProjectsComponent implements OnInit {
  projects: Observable<ProjectItemI[]> = this.store.select(state => state.projects.data);
  language: Observable<LanguageItemProjectsI> = this.store.select(state => state.language.current.projects);

  constructor(private store: Store<AppState>, private global: GlobalService) {}

  ngOnDestroy() {
    document.body.classList.remove('projects');
  }

  ngOnInit() {
    document.body.classList.add('projects');
    document.querySelector('#favicon').setAttribute('href', 'assets/images/favicon_projects.png');

    this.global.titlePage(`projects`);
    this.global.metaColor('#61AB64');
  }
}
