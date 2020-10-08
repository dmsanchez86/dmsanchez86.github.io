import { createReducer, on } from '@ngrx/store';
import { loadProjects } from '../../actions/projects/';
import { dataProjects } from './dataProjects';

const initialState = [...dataProjects];

const _projectsReducer = createReducer(
  initialState,
  on(loadProjects, (state, action) => ([ ...state, action.payload ])),
);

export function projectsReducer(state, action) {
  return _projectsReducer(state, action);
}
