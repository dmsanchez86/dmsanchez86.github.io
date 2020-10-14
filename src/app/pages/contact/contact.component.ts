import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { bodyAddClass, bodyRemoveClass, favicon } from 'src/environments/global_functions';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit, OnDestroy {
  constructor(private global: GlobalService) {}

  ngOnDestroy() {
    bodyRemoveClass('contact');
  }

  ngOnInit() {
    bodyAddClass('contact');
    favicon('contact');

    this.global.titlePage(`contact`);
    this.global.metaColor('#D67F35');
  }
}
