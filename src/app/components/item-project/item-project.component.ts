import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LanguageItemProjectsI } from 'src/app/interfaces/LanguageI';
import { ProjectItemI } from 'src/app/interfaces/ProjectItemI';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-item-project',
  templateUrl: './item-project.component.html'
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
