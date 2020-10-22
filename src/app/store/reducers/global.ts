import { createReducer, on } from '@ngrx/store';
import { AppStateGlobalI } from '..';
import { PopupState } from '../actions/global';

const initialState: AppStateGlobalI = {
  popup: false
};

const _globalReducer = createReducer(
  initialState,
  on(PopupState, (state, action) => ({ ...state, popup: action.payload }))
);

export function globalReducer(state, action) {
  return _globalReducer(state, action);
}
