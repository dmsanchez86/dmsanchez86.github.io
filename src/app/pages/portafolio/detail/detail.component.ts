import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { LanguageItemPortafolioI } from 'src/app/interfaces/LanguageI';
import { ProjectItemI } from 'src/app/interfaces/ProjectItemI';
import { GlobalService } from 'src/app/services/global.service';
import { AppState } from 'src/app/store';
import { resetPortafolio, setPortafolio } from 'src/app/store/actions/portafolio';
import { bodyAddClass, bodyRemoveClass, removeThemeTMP } from 'src/environments/global_functions';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit, OnDestroy {
  project: Observable<ProjectItemI> = this.store.select(state => state.portafolio.current);
  language: Observable<LanguageItemPortafolioI> = this.store.select(state => state.language.current.portafolio);

  name: string;
  sus: Subscription = new Subscription();

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private global: GlobalService,
    private actions: Actions
  ) {
    this.name = this.route.snapshot.params.slug;

    this.route.params.subscribe(params => {
      if (params.slug !== this.name) {
        setTimeout(() => this.setItem(), 50);
      }

      this.name = params.slug;
    });

    this.sus = this.actions.subscribe((action: any) => {
      console.log(action);
      if (action.type === setPortafolio.type) {
        this.global.metaColorP(null, action.slug);
      }
    });
  }

  setItem() {
    if (this.name) {
      this.store.dispatch(setPortafolio({ slug: this.name }));
    }
  }

  ngOnInit(): void {
    bodyAddClass('portafolio');

    this.global.titlePage(`portafolio`, this.name);
    
    this.setItem();
  }

  ngOnDestroy(): void {
    this.store.dispatch(resetPortafolio());
    bodyRemoveClass('portafolio');
    removeThemeTMP();
    this.sus.unsubscribe();
  }

}
