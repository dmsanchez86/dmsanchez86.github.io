import { createAction, props } from '@ngrx/store';

export const changeLanguage = createAction('[PROJECTS] Load', props<{ key: string }>());
