import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { ProjectI } from 'src/app/store/reducers/projects/dataProjects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {
  projects: Observable<ProjectI[]> = this.store.select('collaborations');

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
