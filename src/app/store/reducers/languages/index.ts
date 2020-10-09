import { createReducer, on } from '@ngrx/store';
import { changeLanguage } from '../../actions/language/';
import { EN } from './keys/en';
import { ES } from './keys/es';
// import { dataProjects } from './dataLanguages';

const initialState = {
  es: ES,
  en: EN,
  current: EN
};

const _languageReducer = createReducer(
  initialState,
  on(changeLanguage, (state, action) => {
    let current = state[action.key];
    return{ ...state, current }
  }),
);

export function languageReducer(state, action) {
  return _languageReducer(state, action);
}
