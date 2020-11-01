import { createReducer, on } from '@ngrx/store';
import { AppStateLanguaje } from '../..';
import { ChangeLanguage } from '../../actions/language/';
import { EN } from './keys/en';
import { ES } from './keys/es';

const initialState: AppStateLanguaje = {
  es: ES,
  en: EN,
  current: EN
};

const _languageReducer = createReducer(
  initialState,
  on(ChangeLanguage, (state, action) => {
    let current = state[action.key];
    localStorage.language = action.key;
    return{ ...state, current }
  }),
);

export function languageReducer(state, action) {
  return _languageReducer(state, action);
}
