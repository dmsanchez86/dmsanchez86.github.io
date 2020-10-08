import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProjectItemI } from 'src/app/interfaces/ProjectItemI';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html'
})
export class PortafolioComponent implements OnInit {

  projects: Observable<ProjectItemI[]> = this.store.select('collaborations');

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

}
