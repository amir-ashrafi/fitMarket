import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private _transitionComplete = signal(false);

  transitionComplete = this._transitionComplete.asReadonly();

  setTransitionComplete(value: boolean): void {
    this._transitionComplete.set(value);
  }
}