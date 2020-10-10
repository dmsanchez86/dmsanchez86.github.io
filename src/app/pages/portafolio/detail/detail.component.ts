import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LanguageItemPortafolioI } from 'src/app/interfaces/LanguageI';
import { ProjectItemI } from 'src/app/interfaces/ProjectItemI';
import { AppState } from 'src/app/store';
import { resetCollaboration, setCollaboration } from 'src/app/store/actions/collaborations';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent {

  project: Observable<ProjectItemI> = this.store.select(state => state.collaborations.current);
  language: Observable<LanguageItemPortafolioI> = this.store.select(state => state.language.current.portafolio);

  constructor(private store: Store<AppState>) {
    if(localStorage.collaboration && !localStorage.fromTools) {
      this.store.dispatch(setCollaboration(JSON.parse(localStorage.collaboration)));
    }else{
      if(localStorage.fromTools){
        delete localStorage.fromTools;
      }
    }
  }

  ngOnDestroy(): void {
    this.store.dispatch(resetCollaboration());
  }

}
