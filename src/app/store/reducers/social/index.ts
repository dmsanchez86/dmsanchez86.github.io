import { createReducer, on } from '@ngrx/store';
import { AppStateSocial } from '../..';
import { cargarSocial } from '../../actions/social';
import { dataSocial } from './dataSocial';

const initialState: AppStateSocial = {
  data: [...dataSocial]
};

const _socialReducer = createReducer(
  initialState,
  on(cargarSocial, state => ({...state}))
);

export function socialReducer(state, action) {
  return _socialReducer(state, action);
}
