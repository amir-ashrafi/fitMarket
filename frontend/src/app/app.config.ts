import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay, withNoIncrementalHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { ThemeEffects, themeReducer } from './core/layout/store';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { environment } from '../app/environments/environments';

export const appConfig: ApplicationConfig = {
  providers: [
          { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },

    provideBrowserGlobalErrorListeners(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
          preset: Aura
      },
      license: environment.primeUiLicenseKey
      }),
        provideStore({ theme: themeReducer }),
    provideEffects([ThemeEffects]),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay(), withNoIncrementalHydration())
  ]
};
