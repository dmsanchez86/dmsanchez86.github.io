import { createReducer, on } from '@ngrx/store';
import { AppStateProjectsI } from '../..';
import { loadProjects, resetProject, setProject } from '../../actions/projects/';
import { dataProjects } from './dataProjects';

const initialState: AppStateProjectsI = {
  data: [...dataProjects],
  current: {},
};

const _projectsReducer = createReducer(
  initialState,
  on(loadProjects, (state, action) => ({ ...state, data: action.payload })),
  on(setProject, (state, action) => {
    localStorage.project = JSON.stringify({ ...action });
    return { ...state, current: {...action} }
  }),
  on(resetProject, state => {
    delete localStorage.project;
    return { ...state, current: {} }
  }),
);

export function projectsReducer(state, action) {
  return _projectsReducer(state, action);
}
