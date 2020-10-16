import { createReducer, on } from '@ngrx/store';
import { AppStateSkillsI } from '../..';
import { cargarSkills, setSkill } from '../../actions/skills';
import { data } from './data';

const initialState: AppStateSkillsI = {
  data,
  current: null,
};

const _skillsReducer = createReducer(
  initialState,
  on(cargarSkills, (state, action) => ({ ...state, data: action.payload })),
  on(setSkill, (state, action) => ({
    ...state,
    current: state.data.filter((item) => item.name === action.slug)[0],
  }))
);

export function skillsReducer(state, action) {
  return _skillsReducer(state, action);
}
