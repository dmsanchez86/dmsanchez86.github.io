import { createReducer, on } from '@ngrx/store';
import { setThemeTMP } from 'src/environments/global_functions';
import { AppStateSkillsI } from '../..';
import { cargarSkills, setSkill } from '../../actions/skills';
import { data } from './data';

let dataWithFilter = data.sort(
  (x, y) =>  (x.main === y.main)? 0 : x.main? -1 : 1
);

const initialState: AppStateSkillsI = {
  data: dataWithFilter,
  current: null,
};

const _skillsReducer = createReducer(
  initialState,
  on(cargarSkills, (state, action) => ({ ...state, data: action.payload })),
  on(setSkill, (state, action) => {
    let skill = state.data.filter((item) => item.name === action.slug)[0];
    setThemeTMP(skill.colors);
    return {
      ...state,
      current: skill,
    }
  })
);

export function skillsReducer(state, action) {
  return _skillsReducer(state, action);
}
