import { createAction, props } from '@ngrx/store';

export const ChangeLanguage = createAction('[LANGUAGE] change', props<{ key: string }>());
