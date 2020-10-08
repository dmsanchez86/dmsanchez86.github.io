import { createReducer, on } from '@ngrx/store';
import { loadCollaborations } from '../../actions/collaborations/';

const initialState = [];

const _collaborationsReducer = createReducer(
  initialState,
  on(loadCollaborations, (state, action) => ([ ...state, action.payload ])),
);

export function collaborationsReducer(state, action) {
  return _collaborationsReducer(state, action);
}
