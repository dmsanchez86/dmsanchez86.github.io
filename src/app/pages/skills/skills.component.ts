import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { bodyAddClass, bodyRemoveClass, favicon } from 'src/environments/global_functions';

@Component({
  selector: 'app-skills',
  template: `
    <div id="section_portafolio" class="section active" style="padding: 10vh 0 1rem;min-height: 100vh;">
      <router-outlet>
        <app-skills-content [complete]="true"></app-skills-content>
      </router-outlet>
    </div>
  `
})
export class SkillsComponent implements OnInit, OnDestroy {
  constructor(private global: GlobalService) { }

  ngOnDestroy() {
    bodyRemoveClass('portafolio');
  }

  ngOnInit() {
    bodyAddClass('portafolio');
    favicon('portafolio');

    this.global.titlePage(`skills`);
    this.global.metaColor('#00897b');
  }

}
