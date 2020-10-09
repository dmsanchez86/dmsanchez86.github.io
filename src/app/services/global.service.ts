import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  cerrarMenu(){
    let body = document.body;
    let profile = document.querySelector(`.profile_content_home`);
    let popup = document.querySelector('.popup');
    let menu = document.querySelector(`#menu`);
    let overlay_menu = document.querySelector(`.overlay-menu`);

    if (body.classList.contains('profile')) {
      body.classList.remove('profile');
      profile.classList.remove('scaleOut');
      popup.classList.remove('active');

      setTimeout(() => profile.classList.add('scaleIn'), 500);
    } else {
      body.classList.remove('menu');
      menu.classList.remove('open');
      overlay_menu.classList.remove('open');
      document.querySelector(`.button_menu`).style.opacity = 1;
    }
  }
}
