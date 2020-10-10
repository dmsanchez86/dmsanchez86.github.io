import { createReducer, on } from '@ngrx/store';
import { AppStateCollaborationsI } from '../..';
import { loadCollaborations, resetCollaboration, setCollaboration } from '../../actions/collaborations/';

import { dataCollaborations } from './dataCollaborations';

const initialState: AppStateCollaborationsI = {
  data: [...dataCollaborations],
  current: {},
};

const _collaborationsReducer = createReducer(
  initialState,
  on(loadCollaborations, (state, action) => ({ ...state, data: action.payload })),
  on(setCollaboration, (state, action) => {
    localStorage.collaboration = JSON.stringify({ ...action });
    return { ...state, current: {...action} }
  }),
  on(resetCollaboration, state => {
    delete localStorage.collaboration;
    return { ...state, current: {} }
  }),
);

export function collaborationsReducer(state, action) {
  return _collaborationsReducer(state, action);
}
