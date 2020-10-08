import { createAction, props } from '@ngrx/store';

export const loadCollaborations = createAction(
  '[COLLABORATIONS] Load',
  props<{ payload: any }>()
);