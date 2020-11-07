import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LanguageItemProfileSkillsI, LanguageItemSkillsI } from 'src/app/interfaces/LanguageI';
import { GlobalService } from 'src/app/services/global.service';
import { AppState } from 'src/app/store';
import { PopupState } from 'src/app/store/actions/global';
import { qs, removeThemeTMP, setThemeTMP } from 'src/environments/global_functions';

@Component({
  selector: 'app-skills-content',
  templateUrl: './skills-content.component.html'
})
export class SkillsContentComponent implements OnInit {
  @Input() complete: boolean;

  language: Observable<LanguageItemSkillsI> = this.store.select(state => state.language.current.skills);
  skills: Observable<LanguageItemProfileSkillsI[]> = this.store.select(state => state.skills.data);

  constructor(private store: Store<AppState>, private global: GlobalService) { }

  ngOnInit(): void {}

  cerrarModal(){
    let profile = qs(`.profile_content_home`);

    profile.classList.remove('scaleOut');
    profile.classList.remove('scaleIn');

    setTimeout(() => profile.classList.add('scaleIn'), 100);
    this.store.dispatch(PopupState({payload: false}));
  }

  cambiarColor(skill: LanguageItemProfileSkillsI){
    setThemeTMP(skill.colors);
    this.global.metaColor(skill.colors.current_main);
  }
  quitarColor(){
    removeThemeTMP();
    this.global.metaColor('#33475b');
  }
}
