import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LanguageItemProjectsI } from 'src/app/interfaces/LanguageI';
import { ProjectItemI } from 'src/app/interfaces/ProjectItemI';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-item-project',
  template: `
    <div [attr.tabIndex]="this.i + 1">
      <div class="project" style="height: 50vh;width: 98vw;">
        <h1 class="title">
          <a [href]="project?.url" target="_blank">{{ (language | async)[project?.key] }}</a>
          <app-tools [project]="project" [url]="key"></app-tools>
        </h1>
      </div>
    </div>
  `,
})
export class ItemProjectComponent implements OnInit {
  @Input() project: ProjectItemI;
  @Input() i: number;
  @Input() key: string;
  language: Observable<LanguageItemProjectsI> = this.store.select(
    (state) => state.language.current[this.key]
  );

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
