import { createAction, props } from '@ngrx/store';
import { ProjectItemI } from 'src/app/interfaces/ProjectItemI';

export const loadPortafolio = createAction(
  '[PORTAFOLIO] Load',
  props<{ payload: any }>()
);

export const setPortafolio = createAction(
  '[PORTAFOLIO] set project',
  props<{ slug: string }>()
);

export const resetPortafolio = createAction('[PORTAFOLIO] reset project');
