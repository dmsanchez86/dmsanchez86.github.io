import { createAction, props } from '@ngrx/store';
import { LanguageItemProfileSkillsI } from 'src/app/interfaces/LanguageI';

export const cargarSkills = createAction(
  '[SKILLS] Cargar',
  props<{payload: LanguageItemProfileSkillsI[]}>()
);

export const setSkill = createAction(
  '[SKILL] Set',
  props<{ slug: string }>()
);

