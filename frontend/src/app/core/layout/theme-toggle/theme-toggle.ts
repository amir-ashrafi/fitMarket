import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { toggleTheme, selectThemeMode } from '../store';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <button 
      (click)="toggleTheme()"
      class="p-2.5  bg-indigo-50 dark:bg-white/5  transition-all duration-300
              cursor-pointer  
             hover:bg-white rounded-full  dark:hover:bg-white/30"
      [attr.aria-label]="(themeMode$ | async) === 'light' ? 'فعال‌سازی حالت تاریک' : 'فعال‌سازی حالت روشن'">
      
      @if ((themeMode$ | async) === 'light') {
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-700 helo " fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      } @else {
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      }
    </button>
  `,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
    }
  `]
})
export class ThemeToggleComponent {
  private store = inject(Store);
  themeMode$ = this.store.select(selectThemeMode);

  toggleTheme() {
    this.store.dispatch(toggleTheme());
  }
}