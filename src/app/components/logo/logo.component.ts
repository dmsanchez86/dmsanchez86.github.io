import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <div class="logo" tabindex="1">
      <a [routerLink]="['/']" routerLinkActive="active"  title="dmsanchez86 WebSite">
        <svg xmlns="http://www.w3.org/2000/svg">
          <circle cx="29px" cy="25px" r="23px"></circle>
          <text x="-1" y="35" dx="0" dy="0">D</text>
          <text x="15" y="44" dx="7" dy="0">M</text>
        </svg>
      </a>
    </div>
  `,
})
export class LogoComponent {}
