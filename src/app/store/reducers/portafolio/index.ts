import { createReducer, on } from '@ngrx/store';
import { AppStatePortafolioI } from '../..';
import { loadPortafolio, resetPortafolio, setPortafolio } from '../../actions/portafolio/';

import { dataPortafolio } from './dataPortafolio';

const initialState: AppStatePortafolioI = {
  data: [...dataPortafolio],
  current: {},
};

const _portafolioReducer = createReducer(
  initialState,
  on(loadPortafolio, (state, action) => ({ ...state, data: action.payload })),
  on(setPortafolio, (state, action) => {
    localStorage.portafolio = JSON.stringify({ ...action });
    return { ...state, current: {...action} }
  }),
  on(resetPortafolio, state => {
    delete localStorage.portafolio;
    return { ...state, current: {} }
  }),
);

export function portafolioReducer(state, action) {
  return _portafolioReducer(state, action);
}
