import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { bodyAddClass, bodyRemoveClass, favicon } from 'src/environments/global_functions';

@Component({
  selector: 'app-skills',
  template: `
    <div id="section_portafolio" class="section active section-pt">
      <router-outlet>
        <app-skills-content [complete]="true"></app-skills-content>
      </router-outlet>
    </div>
  `
})
export class SkillsComponent implements OnInit, OnDestroy {
  constructor(private global: GlobalService) { }

  ngOnDestroy() {
    bodyRemoveClass('skills');
  }

  ngOnInit() {
    bodyAddClass('skills');
    favicon('portafolio');

    this.global.titlePage(`skills`);
    this.global.metaColor('#33475b');
  }

}
