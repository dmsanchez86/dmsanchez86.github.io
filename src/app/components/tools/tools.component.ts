import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LanguageItemToolsI } from 'src/app/interfaces/LanguageI';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-tools',
  template: `
    <div class="tools">
      <div *ngIf="preview" (click)="previewF()" class="tool preview" [attr.title-ref]="(language | async).preview">
        <i class="fa fa-desktop"></i>
      </div>
      <div *ngIf="code" (click)="codeF()" class="tool code" [attr.title-ref]="(language | async).check">
        <i class="fa fa-code"></i>
      </div>
      <div *ngIf="download" (click)="downloadF()" class="tool download" [attr.title-ref]="(language | async).preview">
        <i class="fa fa-download"></i>
      </div>
      <div *ngIf="app" (click)="codeF()" class="tool code" [attr.title-ref]="(language | async).download">
        <i class="fa fa-android"></i>
      </div>
    </div>
  `
})
export class ToolsComponent {
  @Input() preview: true;
  @Input() code: false;
  @Input() download: false;
  @Input() app: false;

  language: Observable<LanguageItemToolsI> = this.store.select(state => state.language.current.tools);

  constructor(private store: Store<AppState>){}

  previewF(){ console.log('preview'); }

  codeF(){ console.log('code'); }

  downloadF(){ console.log('download'); }

}
