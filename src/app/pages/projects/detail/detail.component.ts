import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { ProjectItemI } from 'src/app/interfaces/ProjectItemI';
import { LanguageItemProjectsI } from 'src/app/interfaces/LanguageI';
import { resetProject, setProject } from 'src/app/store/actions/projects';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnDestroy, OnDestroy {
  project: Observable<ProjectItemI> = this.store.select(state => state.projects.current);
  language: Observable<LanguageItemProjectsI> = this.store.select(state => state.language.current.projects);

  constructor(private store: Store<AppState>) {
    if(localStorage.project && !localStorage.fromTools) {
      this.store.dispatch(setProject(JSON.parse(localStorage.project)));
    }else{
      if(localStorage.fromTools){
        delete localStorage.fromTools;
      }
    }
  }

  ngOnInit(): void {
    document.body.classList.add('projects');
  }

  ngOnDestroy(): void {
    this.store.dispatch(resetProject());
    document.body.classList.remove('projects');
  }

}
