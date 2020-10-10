import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LanguageItemPortafolioI } from 'src/app/interfaces/LanguageI';
import { ProjectItemI } from 'src/app/interfaces/ProjectItemI';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html'
})
export class PortafolioComponent implements OnInit {

  projects: Observable<ProjectItemI[]> = this.store.select('collaborations');
  language: Observable<LanguageItemPortafolioI> = this.store.select(state => state.language.current.portafolio);

  constructor(private store: Store<AppState>) { }

  ngOnDestroy() {
    document.body.classList.remove('portafolio');
  }

  ngOnInit() {
    document.body.classList.add('portafolio');
    document.querySelector('#favicon').setAttribute('href', 'assets/images/favicon_collaborations.png');
  }
}
