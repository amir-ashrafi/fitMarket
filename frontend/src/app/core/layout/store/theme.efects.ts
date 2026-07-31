import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { selectThemeMode } from './theme.selectors';
import { setTheme, toggleTheme } from './theme.actions';

@Injectable()
export class ThemeEffects {
  private actions$ = inject(Actions);
  private store = inject(Store); 

  syncTheme$ = createEffect(
    () => this.actions$.pipe(
      ofType(setTheme, toggleTheme),
      tap(() => {
        this.store.select(selectThemeMode).subscribe(mode => {
          document.documentElement.setAttribute('data-theme', mode);
          localStorage.setItem('theme', mode);
        });
      })
    ),
    { dispatch: false }
  );
}