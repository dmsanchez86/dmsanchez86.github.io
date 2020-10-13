import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { Observable, Subscription } from 'rxjs';
import { LanguageItemProfileI } from 'src/app/interfaces/LanguageI';
import { AppState } from 'src/app/store';
import { mostrarPopup } from 'src/app/store/actions/global';

@Component({
  selector: 'app-profile-image',
  template: `
    <div (click)="seeProfile()"
      class="profile_content {{ this.home ? 'scaleIn profile_content_home': '' }}"
      [attr.title-ref]="(language | async)?.name" >
      <img src="assets/images/profile.jpg">
    </div>
  `
})
export class ProfileImageComponent implements OnInit {
  @Input() open: false;
  @Input() home: false;

  language: Observable<LanguageItemProfileI> = this.store.select(state => state.language.current.profile);

  sus: Subscription = new Subscription();

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private actions: Actions
  ) {
    this.sus = this.actions.subscribe(action => {
      try {
        if(action.type === '[GLOBAL] Abrir Perfil' && localStorage.fromParent){
          setTimeout(() => {
            this.seeProfile(true);
            this.sus.unsubscribe();
          }, 1500);
          delete localStorage.fromParent;
        }
      } catch (error) { }
    });
  }

  ngOnInit(): void {
  }

  seeProfile(ref?:boolean) {
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

      this.router.navigateByUrl(`${this.router.url}?view=profile`);
      this.store.dispatch(mostrarPopup({payload: true}));
    }else{
      body.classList.remove('profile');
      profile.classList.remove('scaleOut');
      profile.classList.remove('scaleIn');
      popup.classList.remove('active');

      setTimeout(() => profile.classList.add('scaleIn'), 100);

      let url = location.href;
      try {
        url = this.router.url.replace('view=profile', '').replace('#about', '');
      } catch (error) { }

      this.router.navigateByUrl(`${url}`);
    }
  }

}
