import { createReducer, on } from '@ngrx/store';
import { AppStateCollaborationsI } from '../..';
import { loadCollaborations } from '../../actions/collaborations/';

import { dataCollaborations } from './dataCollaborations';

const initialState: AppStateCollaborationsI = {
  data: [...dataCollaborations]
};

const _collaborationsReducer = createReducer(
  initialState,
  on(loadCollaborations, (state, action) => ({ ...state, data: action.payload })),
);

export function collaborationsReducer(state, action) {
  return _collaborationsReducer(state, action);
}
