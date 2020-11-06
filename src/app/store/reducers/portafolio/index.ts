import { createReducer, on } from '@ngrx/store';
import { setThemeTMP } from 'src/environments/global_functions';
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
    let item = state.data.filter((item) => item.key === action.slug)[0];
    localStorage.portafolio = JSON.stringify(item);

    if (Object.keys(item.colors).length) {
      setThemeTMP(item.colors);
    }

    return {
      ...state,
      current: item
    }
  }),
  on(resetPortafolio, state => {
    delete localStorage.portafolio;
    return { ...state, current: {} }
  }),
);

export function portafolioReducer(state, action) {
  return _portafolioReducer(state, action);
}
