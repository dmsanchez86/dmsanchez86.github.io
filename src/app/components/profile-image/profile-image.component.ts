import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile-image',
  template: `
    <div (click)="seeProfile()"
      class="profile_content {{ this.home ? 'scaleIn profile_content_home': '' }}" title-ref="Daniel Mauricio Sánchez Ávila" >
      <img src="assets/images/profile.jpg">
    </div>
  `
})
export class ProfileImageComponent implements OnInit {
  @Input() open: false;
  @Input() home: false;

  constructor() { }

  ngOnInit(): void {
  }

  seeProfile() {
    let body = document.body;
    let popup = document.querySelector('.popup');
    let profile = document.querySelector(`.profile_content_home`);

    if(!this.open){
      body.classList.add('profile');
      profile.classList.remove('scaleIn');

      setTimeout(() => {
        profile.classList.add('scaleOut');
        popup.classList.add('active');
      }, 100);
    }else{
      body.classList.remove('profile');
      profile.classList.remove('scaleOut');
      profile.classList.remove('scaleIn');
      popup.classList.remove('active');

      setTimeout(() => profile.classList.add('scaleIn'), 100);
    }
  }

}
