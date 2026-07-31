import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ThemeState } from './theme.reducer';

export const selectThemeFeature = createFeatureSelector<ThemeState>('theme');

export const selectThemeMode = createSelector(
  selectThemeFeature,
  (state: ThemeState) => state.mode
);
export const selectIsDark = createSelector(
  selectThemeFeature,
  (state) => {
    console.log('🔍 Inside selectIsDark, state:', state);
    return state?.mode === 'dark';
  }
);