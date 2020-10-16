import { createReducer, on } from '@ngrx/store';
import { AppStateSkillsI } from '../..';
import { cargarSkills } from '../../actions/skills';

const initialState: AppStateSkillsI = {
  data: [{
    name: 'angular',
    key: 'angular',
    title: 'Angular',
    icon: 'fab fa-angular'
  },{
    name: 'sass',
    key: 'sass',
    title: 'SASS',
    icon: 'fab fa-sass'
  },{
    name: 'react',
    key: 'react',
    title: 'React JS',
    icon: 'fab fa-react'
  },{
    name: 'wordpress',
    key: 'wordpress',
    title: 'Wordpress',
    icon: 'fab fa-wordpress'
  }]
};

const _skillsReducer = createReducer(
  initialState,
  on(cargarSkills, (state, action) => ({ ...state, data: action.payload }))
);

export function skillsReducer(state, action) {
  return _skillsReducer(state, action);
}
