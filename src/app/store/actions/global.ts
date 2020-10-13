import { createAction, props } from '@ngrx/store';

export const mostrarPopup = createAction(
  '[GLOBAL] Abrir Perfil',
  props<{payload: boolean}>()
);
