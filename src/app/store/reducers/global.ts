import { createReducer, on } from '@ngrx/store';
import { AppStateGlobalI } from '..';
import { mostrarPopup } from '../actions/global';

const initialState: AppStateGlobalI = {
  menu: false
};

const _globalReducer = createReducer(
  initialState,
  on(mostrarPopup, (state, action) => ({ ...state, menu: action.payload }))
);

export function globalReducer(state, action) {
  return _globalReducer(state, action);
}
