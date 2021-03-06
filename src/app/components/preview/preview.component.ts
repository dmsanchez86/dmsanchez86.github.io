import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProjectItemI } from 'src/app/interfaces/ProjectItemI';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
})
export class PreviewComponent {
  @Input() project: ProjectItemI;
  validationLoad: boolean = false;
  validationFullscreen: boolean = false;

  language: Observable<string> = this.store.select(state => state.language.current.loading);

  constructor(private store: Store<AppState>, public sanitizer: DomSanitizer) {}

  loadIframe($event) {
    // console.log($event);
    // console.warn('carga');
    // this.validationLoad = true;
  }

  setFullscreen() {
    this.validationFullscreen = !this.validationFullscreen;
  }
}
