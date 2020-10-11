import { createReducer, on } from '@ngrx/store';
import { AppStateMenu } from '../..';
import { cargarMenu } from '../../actions/menu';
import { dataMenu } from './dataMenu';

const initialState: AppStateMenu = {
  data: [...dataMenu]
};

const _menuReducer = createReducer(
  initialState,
  on(cargarMenu, (state, action) => ({...state}))
);

export function menuReducer(state, action) {
  return _menuReducer(state, action);
}
