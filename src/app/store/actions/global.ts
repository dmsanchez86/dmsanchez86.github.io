import { createAction, props } from '@ngrx/store';

export const PopupState = createAction(
  '[GLOBAL] Popup Perfil',
  props<{payload: boolean}>()
);
