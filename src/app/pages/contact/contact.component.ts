import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnDestroy() {
    document.body.classList.remove('contact');
  }

  ngOnInit() {
    document.body.classList.add('contact');
    document.querySelector('#favicon').setAttribute('href', 'assets/images/favicon_contact.png');
  }
}
