import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title, Meta }    from '@angular/platform-browser'
import { GlobalService } from 'src/app/services/global.service';
import { bodyAddClass, bodyRemoveClass, favicon, qs } from 'src/environments/global_functions';

@Component({
  selector: 'app-home',
  template: `
    <div class="section active" id="section_home" style="min-height: 100vh;"></div>
  `,
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private global: GlobalService) {}

  ngOnDestroy() {
    bodyRemoveClass('home');
  }

  ngOnInit() {
    bodyAddClass('home');
    favicon('home');

    setTimeout(() => qs('.twitter_content .container').classList.add('close'), 500);

    this.global.titlePage(`home`);
    this.global.metaColor('#87CEEB');
  }
}

