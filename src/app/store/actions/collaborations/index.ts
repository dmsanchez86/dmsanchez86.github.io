import { createAction, props } from '@ngrx/store';
import { ProjectItemI } from 'src/app/interfaces/ProjectItemI';

export const loadCollaborations = createAction(
  '[COLLABORATIONS] Load',
  props<{ payload: any }>()
);

export const setCollaboration = createAction(
  '[COLLABORATION] set',
  props<ProjectItemI>()
);

export const resetCollaboration = createAction('[COLLABORATION] reset');
