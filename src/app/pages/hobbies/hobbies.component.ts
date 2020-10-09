import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
})
export class HobbiesComponent implements OnInit {
  constructor() {}

  ngOnDestroy() {
    document.body.classList.remove('contact');
  }

  ngOnInit() {
    document.body.classList.add('contact');
    document.querySelector('#favicon').setAttribute('href', 'assets/images/favicon_contact.png');
  }
}
