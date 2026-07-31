import { createReducer, on } from '@ngrx/store';
import { setTheme, toggleTheme } from './theme.actions';

export interface ThemeState {
  mode: 'light' | 'dark';
}

const initialMode = typeof window !== 'undefined' 
  ? (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
  : 'light';

export const initialState: ThemeState = {
  mode: initialMode
};

export const themeReducer = createReducer(
  initialState,
  on(setTheme, (state, { mode }) => ({ ...state, mode })),
on(toggleTheme, (state) => {
  const newMode = state.mode === 'light' ? 'dark' : 'light';
  console.log('🔄 Toggling to:', newMode); 
  return { ...state, mode: newMode };
})
);