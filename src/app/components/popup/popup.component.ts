import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html'
})
export class PopupComponent implements OnInit {
  language: Observable<any> = this.store.select(state => state.language.current.profile);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

}
