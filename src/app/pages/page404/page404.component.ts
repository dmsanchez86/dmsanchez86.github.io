import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { bodyAddClass, bodyRemoveClass } from 'src/environments/global_functions';

@Component({
  selector: 'app-page404',
  template: `
    <div class="section section-p404">
      <div class="section-p404-icon">
        <i class="fas fa-headphones"></i>
      </div>
      <div class="item-project-wrap" tabIndex="1">
        <div class="project">
          <h1 class="title section-p404-title">404</h1>
        </div>
      </div>
    </div>
  `
})
export class Page404Component implements OnInit, OnDestroy {
  constructor(private global: GlobalService) {}

  ngOnDestroy() {
    bodyRemoveClass('_404');
  }

  ngOnInit() {
    bodyAddClass('_404');

    this.global.titlePage(`404`);
  }

}
