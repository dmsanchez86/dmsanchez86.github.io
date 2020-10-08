import { createAction, props } from '@ngrx/store';

export const loadProjects = createAction(
  '[PROJECTS] Load',
  props<{ payload: any }>()
);