import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignerService {
  private _preset = signal(true);

  preset = this._preset.asReadonly();

  setPreset(value: boolean): void {
    this._preset.set(value);
  }
}