import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProjectItemI } from 'src/app/interfaces/ProjectItemI';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {
  projects: Observable<ProjectItemI[]> = this.store.select('projects');

  constructor(private store: Store<AppState>) {}

  ngOnDestroy() {
    document.body.classList.remove('projects');
  }

  ngOnInit() {
    document.body.classList.add('projects');
  }
}
