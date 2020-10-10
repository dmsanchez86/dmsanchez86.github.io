import { createAction, props } from '@ngrx/store';
import { ProjectItemI } from 'src/app/interfaces/ProjectItemI';

export const loadProjects = createAction(
  '[PROJECTS] Load',
  props<{ payload: ProjectItemI[] }>()
);

export const setProject = createAction(
  '[PROJECT] set',
  props<ProjectItemI>()
);

export const resetProject = createAction(
  '[PROJECT] reset'
);
