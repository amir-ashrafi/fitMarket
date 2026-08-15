import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { Select } from "primeng/select";

interface EquipmentOption {
  label: string;
  value: string;
  icon: string;
}

@Component({
  selector: 'app-category-sportsequipment',
  standalone: true,
  imports: [MultiSelectModule, FormsModule, Select],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <div class="flex justify-center">
      <p-select
        [options]="equipmentList"
        [(ngModel)]="value"
        (ngModelChange)="valueChange.emit($event)"
        optionLabel="label"
        optionValue="value"
        [showClear]="true"
        placeholder="انتخاب وسایل ورزشی"
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
export class Sportsequipment {
  @Input() value: string[] = [];
  @Output() valueChange = new EventEmitter<string[]>();

  equipmentList: EquipmentOption[] = [
    { label: 'دمبل و وزنه', value: 'dumbbell', icon: '🏋️' },
    { label: 'هالتر و میله', value: 'barbell', icon: '🏋️‍♂️' },
    { label: 'کش و باند مقاومتی', value: 'resistance', icon: '🎗️' },
    { label: 'تشک و لوازم یوگا', value: 'mat', icon: '🧘' },
    { label: 'لباس ورزشی', value: 'apparel', icon: '👕' },
    { label: 'اکسسوری تمرین', value: 'accessories', icon: '🎒' },
  ];

}