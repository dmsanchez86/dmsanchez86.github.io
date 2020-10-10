import { Component, Input } from '@angular/core';
import { ProjectItemI } from 'src/app/interfaces/ProjectItemI';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html'
})
export class PreviewComponent {
  @Input() project: ProjectItemI;

  constructor() { }
}
