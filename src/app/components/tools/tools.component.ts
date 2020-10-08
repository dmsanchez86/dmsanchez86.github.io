import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tools',
  template: `
    <div class="tools">
      <div *ngIf="preview" (click)="previewF()" class="tool preview" title-ref="Preview">
        <i class="fa fa-desktop"></i>
      </div>
      <div *ngIf="code" (click)="codeF()" class="tool code" title-ref="Check code on GitHub ">
        <i class="fa fa-code"></i>
      </div>
      <div *ngIf="download" (click)="downloadF()" class="tool download" title-ref="Download">
        <i class="fa fa-download"></i>
      </div>
      <div *ngIf="app" (click)="codeF()" class="tool code" title-ref="Install App">
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

  previewF(){ console.log('preview'); }

  codeF(){ console.log('code'); }

  downloadF(){ console.log('download'); }

}
