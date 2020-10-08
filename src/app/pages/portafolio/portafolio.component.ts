import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';

import { ProjectI } from '../../store/reducers/projects/dataProjects';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html'
})
export class PortafolioComponent implements OnInit {

  projects: Observable<ProjectI[]> = this.store.select('projects');

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

}
