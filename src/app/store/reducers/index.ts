import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '..';

import { projectsReducer } from './projects/';
import { portafolioReducer } from './portafolio/';
import { menuReducer } from './menu/';
import { languageReducer } from './languages';
import { socialReducer } from './social';
import { globalReducer } from './global';
import { skillsReducer } from './skills/';

export const reducers: ActionReducerMap<AppState> = {
  projects: projectsReducer,
  portafolio: portafolioReducer,
  menu: menuReducer,
  language: languageReducer,
  social: socialReducer,
  global: globalReducer,
  skills: skillsReducer
};
