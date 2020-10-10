import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LanguageItemToolsI } from 'src/app/interfaces/LanguageI';
import { ProjectItemI } from 'src/app/interfaces/ProjectItemI';
import { AppState } from 'src/app/store';
import { setCollaboration } from 'src/app/store/actions/collaborations';
import { setProject } from 'src/app/store/actions/projects';

@Component({
  selector: 'app-tools',
  template: `
    <div class="tools">
      <div *ngIf="project?.preview" (click)="previewF()" class="tool preview" [attr.title-ref]="(language | async).preview">
        <i class="fa fa-desktop"></i>
      </div>
      <div *ngIf="project?.code" (click)="codeF()" class="tool code" [attr.title-ref]="(language | async).check">
        <i class="fa fa-code"></i>
      </div>
      <div *ngIf="project?.download" (click)="downloadF()" class="tool download" [attr.title-ref]="(language | async).preview">
        <i class="fa fa-download"></i>
      </div>
      <div *ngIf="project?.app" (click)="codeF()" class="tool code" [attr.title-ref]="(language | async).download">
        <i class="fa fa-android"></i>
      </div>
    </div>
  `
})
export class ToolsComponent {
  @Input() project: ProjectItemI;
  @Input() url: string;

  language: Observable<LanguageItemToolsI> = this.store.select(state => state.language.current.tools);

  constructor(private store: Store<AppState>, private router: Router){}

  previewF(){
    localStorage.fromTools = true;
    if(this.url.indexOf('project') >= 0){
      this.store.dispatch(setProject(this.project));
    }
    if(this.url.indexOf('portafolio') >= 0){
      this.store.dispatch(setCollaboration(this.project));
    }
    this.router.navigate([this.url, this.project.key]);
  }

  codeF(){ console.log('code'); }

  downloadF(){ console.log('download'); }

}
