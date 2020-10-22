import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LanguageItemPortafolioI } from 'src/app/interfaces/LanguageI';
import { ProjectItemI } from 'src/app/interfaces/ProjectItemI';
import { AppState } from 'src/app/store';
import { resetPortafolio, setPortafolio } from 'src/app/store/actions/portafolio';
import { bodyAddClass, bodyRemoveClass } from 'src/environments/global_functions';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit, OnDestroy {

  project: Observable<ProjectItemI> = this.store.select(state => state.portafolio.current);
  language: Observable<LanguageItemPortafolioI> = this.store.select(state => state.language.current.portafolio);

  constructor(private store: Store<AppState>) {
    if(localStorage.portafolio && !localStorage.fromTools) {
      this.store.dispatch(setPortafolio(JSON.parse(localStorage.portafolio)));
    }else{
      if(localStorage.fromTools){
        delete localStorage.fromTools;
      }
    }
  }

  ngOnInit(): void {
    bodyAddClass('portafolio');
  }
  ngOnDestroy(): void {
    this.store.dispatch(resetPortafolio());
    bodyRemoveClass('portafolio');
  }

}
