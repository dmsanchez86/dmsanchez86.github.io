import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { LanguageItemI, LanguageItemProfileSkillsI } from 'src/app/interfaces/LanguageI';
import { GlobalService } from 'src/app/services/global.service';
import { AppState } from 'src/app/store';
import { setSkill } from 'src/app/store/actions/skills';
import { bodyAddClass, bodyRemoveClass, favicon, removeThemeTMP } from 'src/environments/global_functions';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit, OnDestroy {
  skill$: Observable<LanguageItemProfileSkillsI> = this.store.select(
    (state) => state.skills.current
  );

  language$: Observable<LanguageItemI> = this.store.select(
    (state) => state.language.current
  );

  name: string;
  showStatistics: boolean = false;

  sus: Subscription = new Subscription();

  constructor(
    private store: Store<AppState>,
    private global: GlobalService,
    private route: ActivatedRoute,
    private actions: Actions
  ) {
    this.name = this.route.snapshot.params.slug;

    this.route.params.subscribe((params) => {
      if (params.slug !== this.name) {
        setTimeout(() => this.setSkill(), 50);
      }

      this.name = params.slug;
      this.showStatistics = false;
    });

    this.sus = this.actions.subscribe((action: any) => {
      if(action.type === setSkill.type){
        this.global.metaColor(null, action.slug);
      }
    })
  }

  ngOnDestroy() {
    bodyRemoveClass('portafolio');
    removeThemeTMP();
    this.sus.unsubscribe();
  }

  ngOnInit() {
    bodyAddClass('portafolio');
    favicon('portafolio');

    this.global.titlePage(`skill`, this.name);
    // this.global.metaColor('#00897b');

    this.setSkill();
  }

  setSkill() {
    if (this.name) {
      this.store.dispatch(setSkill({ slug: this.name }));
      this.showStatistics = true;
    }
  }
}
