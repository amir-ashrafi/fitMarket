import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';

interface StatusOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-discount-radio',
  standalone: true,
  imports: [SelectButtonModule, FormsModule],
  template: `
    <p-selectbutton
      [options]="stateOptions"
      [(ngModel)]="value"
      (ngModelChange)="valueChange.emit($event)"
      [multiple]="true"
      optionLabel="label"
      optionValue="value"
      fluid
    />
  `,
})
export class Radio_dicount {
  @Input() value: string[] = [];
  @Output() valueChange = new EventEmitter<string[]>();

  stateOptions: StatusOption[] = [
    { label: 'فقط کالاهای موجود', value: 'available' },
    { label: 'فقط تخفیف‌دار', value: 'discount' },
  ];
}