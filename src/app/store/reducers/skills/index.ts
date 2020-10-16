import { createReducer, on } from '@ngrx/store';
import { AppStateSkillsI } from '../..';
import { cargarSkills } from '../../actions/skills';
import { data } from './data';

const initialState: AppStateSkillsI = {
  data,
};

const _skillsReducer = createReducer(
  initialState,
  on(cargarSkills, (state, action) => ({ ...state, data: action.payload }))
);

export function skillsReducer(state, action) {
  return _skillsReducer(state, action);
}
