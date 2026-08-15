import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { Select } from "primeng/select";

interface SupplementOption {
  label: string;
  value: string;
  icon: string;
}

@Component({
  selector: 'app-category-supplement',
  standalone: true,
  imports: [MultiSelectModule, FormsModule, Select],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <div class="flex justify-center">
      <p-select
        [options]="supplementList"
        [(ngModel)]="value"
        (ngModelChange)="valueChange.emit($event)"
        optionLabel="label"
        optionValue="value"
        [showClear]="true"
        placeholder="انتخاب مکمل‌ها"
        class="w-full"
      >
        <ng-template #selectedItem let-selectedOption>
          <div class="flex items-center gap-2">
            <span>{{ selectedOption.icon }}</span>
            <span>{{ selectedOption.label }}</span>
          </div>
        </ng-template>
        <ng-template let-item #item>
          <div class="flex items-center gap-2">
            <span class="text-lg">{{ item.icon }}</span>
            <span>{{ item.label }}</span>
          </div>
        </ng-template>
      </p-select>
    </div>
  `,
})
export class Supplement {
  @Input() value: string[] = [];
  @Output() valueChange = new EventEmitter<string[]>();

  supplementList: SupplementOption[] = [
    { label: 'پروتئین', value: 'protein', icon: '🥤' },
    { label: 'کراتین', value: 'creatine', icon: '⚪' },
    { label: 'آمینو اسید', value: 'amino', icon: '💊' },
    { label: 'گینر', value: 'gainer', icon: '🥛' },
    { label: 'چربی‌سوز', value: 'fatburner', icon: '🔥' },
    { label: 'ویتامین و مینرال', value: 'vitamin', icon: '🍊' },
  ];

}