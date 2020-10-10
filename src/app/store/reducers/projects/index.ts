import { createReducer, on } from '@ngrx/store';
import { AppStateProjectsI } from '../..';
import { loadProjects } from '../../actions/projects/';
import { dataProjects } from './dataProjects';

const initialState: AppStateProjectsI = {
  data: [...dataProjects]
};

const _projectsReducer = createReducer(
  initialState,
  on(loadProjects, (state, action) => ({ ...state, data: action.payload })),
);

export function projectsReducer(state, action) {
  return _projectsReducer(state, action);
}
