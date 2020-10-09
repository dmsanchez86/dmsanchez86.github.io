import { createReducer, on } from '@ngrx/store';
import { MenuItemI } from 'src/app/interfaces/MenuItemI';
import { cargarMenu } from '../actions/menu';

const initialState: MenuItemI[] = [
  {
    name: 'Home',
    href: '/',
    key: 'home',
    icon: 'home',
  },
  {
    name: 'Projects',
    href: '/projects',
    key: 'projects',
    icon: 'gamepad',
  },
  {
    name: 'Portafolio',
    href: '/portafolio',
    key: 'portafolio',
    icon: 'flask',
  },
  {
    name: 'Contact',
    href: '/contact',
    key: 'contact',
    icon: 'mobile',
  },
  {
    name: 'Hobbies',
    href: '/hobbies',
    key: 'hobbies',
    icon: 'circle',
  },
];

const _menuReducer = createReducer(
  initialState,
  on(cargarMenu, (state, action) => [...state])
);

export function menuReducer(state, action) {
  return _menuReducer(state, action);
}
