import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LanguageItemPortafolioI } from 'src/app/interfaces/LanguageI';
import { ProjectItemI } from 'src/app/interfaces/ProjectItemI';
import { GlobalService } from 'src/app/services/global.service';
import { AppState } from 'src/app/store';
import { bodyAddClass, bodyRemoveClass, favicon } from 'src/environments/global_functions';

@Component({
  selector: 'app-portafolio',
  template: `
    <div id="section_portafolio" style="padding: 0;height: 100vh;overflow-y: auto;">
      <ng-container *ngFor="let project of (projects | async);let i = index">
        <app-item-project [project]="project" [i]="i" [key]="'portafolio'"> </app-item-project>
      </ng-container>
    </div>
  `
})
export class PortafolioComponent implements OnInit, OnDestroy {

  projects: Observable<ProjectItemI[]> = this.store.select(state => state.portafolio.data);
  language: Observable<LanguageItemPortafolioI> = this.store.select(state => state.language.current.portafolio);

  constructor(private store: Store<AppState>, private global: GlobalService) { }

  ngOnDestroy() {
    bodyRemoveClass('portafolio');
  }

  ngOnInit() {
    bodyAddClass('portafolio');
    favicon('portafolio');

    this.global.titlePage(`portafolio`);
    this.global.metaColor('#00897b');
  }
}
