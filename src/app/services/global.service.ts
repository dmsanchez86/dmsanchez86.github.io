import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { qs } from 'src/environments/global_functions';
import { LanguageItemI, LanguageItemProfileSkillsI } from '../interfaces/LanguageI';
import { ProjectItemI } from '../interfaces/ProjectItemI';
import { PopupState } from '../store/actions/global';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  current: LanguageItemI;
  currentPage: string = '';

  skills: LanguageItemProfileSkillsI[];
  portafolio: ProjectItemI[];

  constructor(
    private meta: Meta,
    private title: Title,
    private store: Store<AppState>,
    private actions: Actions,
    private router: Router
  ) {
    this.store.subscribe(({ language, skills, portafolio }) => {
      this.current = language.current;
      this.skills = skills.data;
      this.portafolio = portafolio.data;
    });
    this.actions.subscribe((action: any) => {
      if (action.type === '[LANGUAGE] change') {
        this.titlePage(this.currentPage);
      }
    });
  }

  cerrarMenu(){
    let body = qs('.main-app');
    let profile = qs(`.profile_content_home`);
    let menu = qs(`#menu`);
    let overlay_menu = qs(`.overlay-menu`);

    if (body.classList.contains('profile')) {
      profile.classList.remove('scaleOut');

      let url = location.href;
      try {
        url = this.router.url.replace('view=profile', '').replace('#about', '');
        this.router.navigateByUrl(`${url}`);
      } catch (error) {}

      setTimeout(() => profile.classList.add('scaleIn'), 500);
      this.store.dispatch(PopupState({ payload: false }));
    } else {
      body.classList.remove('menu');
      menu.classList.remove('open');
      overlay_menu.classList.remove('open');
      qs(`.button_menu`)['style'].opacity = '1';
    }
  }

  titlePage(key: string, pre?: string){
    this.currentPage = key;
    this.title.setTitle(`${pre ? `${pre} ` : ''}${this.current.nav[key]} | ${this.current.profile.name}`);
  }

  metaColor(color: string, slug?) {
    let skill: LanguageItemProfileSkillsI;

    if (slug) {
      skill = this.skills.find(skill => skill.name === slug);
      color = skill.colors.main;
    }

    this.meta.updateTag({ name: 'theme-color', content: color });
  }

  metaColorP(color: string, slug?) {
    let item: ProjectItemI;

    if (slug) {
      item = this.portafolio.find((item) => item.key === slug);
      color = item?.colors?.main;
    }

    this.meta.updateTag({ name: 'theme-color', content: color });
  }
}
