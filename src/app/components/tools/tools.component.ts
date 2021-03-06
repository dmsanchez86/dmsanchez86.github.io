import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LanguageItemToolsI } from 'src/app/interfaces/LanguageI';
import { ProjectItemI } from 'src/app/interfaces/ProjectItemI';
import { AppState } from 'src/app/store';
import { setPortafolio } from 'src/app/store/actions/portafolio';
import { setProject } from 'src/app/store/actions/projects';
import { isValidUrl } from 'src/environments/global_functions';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html'
})
export class ToolsComponent {
  @Input() project: ProjectItemI;
  @Input() url: string;
  @Input() no_preview: boolean = false;

  language: Observable<LanguageItemToolsI> = this.store.select(state => state.language.current.tools);

  constructor(private store: Store<AppState>, private router: Router){}

  previewF(){
    localStorage.fromTools = true;
    if(this.project.type === 'project'){
      this.store.dispatch(setProject(this.project));
    }
    if (this.project.type === 'portafolio') {
      this.store.dispatch(setPortafolio({slug: this.project.key}));
    }
    this.router.navigate([this.url, this.project.key]);
    // window.open(this.project.url)
  }

  codeF(){
    if (isValidUrl(this.project.url)) {
      let url = this.project.url;
      if (this.project.url.indexOf('full')) {
        url = this.project.url.replace('full', 'pen');
      }
      window.open(url);
    } else {
      window.open('http://github.com/dmsanchez86/' + this.project.url);
    }
  }

  installF(){
    if (this.project.url_play_store) {
      window.open(this.project.url_play_store);
    }

    if (this.project.url_app_store) {
      window.open(this.project.url_app_store);
    }
  }

  downloadF(){
    if (isValidUrl(this.project.url)) {
      window.open(this.project.url + '/archive/master.zip');
    } else {
      if(this.project.key !== 'mecaut'){
        window.open('http://github.com/dmsanchez86/' + this.project.url + '/archive/gh-pages.zip');
      }else{
        window.open('http://github.com/dmsanchez86/' + this.project.url + '/archive/master.zip');
      }
    }
  }
}
