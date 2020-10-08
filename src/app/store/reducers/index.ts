import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '..';

import { projectsReducer } from './projects/';
import { collaborationsReducer } from './collaborations/';

export const reducers: ActionReducerMap<AppState> = {
  projects: projectsReducer,
  collaborations: collaborationsReducer
};
