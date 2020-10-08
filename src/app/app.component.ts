import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pageAngular';

  constructor(){
    setTimeout(() => {
      let atomLoader: HTMLElement = document.querySelector('#atomLoader');
      atomLoader.style.display = 'none';
    }, 1000);
  }
}
