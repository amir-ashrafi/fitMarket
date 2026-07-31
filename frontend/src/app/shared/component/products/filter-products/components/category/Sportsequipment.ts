import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

interface EquipmentOption {
  label: string;
  value: string;
  icon: string;
}

@Component({
  selector: 'app-category-sportsequipment',
  standalone: true,
  imports: [MultiSelectModule, FormsModule],
  template: `
    <div class="flex justify-center">
      <p-multiselect
        [options]="equipmentList"
        [(ngModel)]="value"
        (ngModelChange)="valueChange.emit($event)"
        optionLabel="label"
        optionValue="value"
        [showClear]="true"
        placeholder="انتخاب وسایل ورزشی"
        class="w-full"
      >
        <ng-template #selectedItems>
          <span>{{ getLabel() }}</span>
        </ng-template>
        <ng-template let-item #item>
          <div class="flex items-center gap-2">
            <span class="text-lg">{{ item.icon }}</span>
            <span>{{ item.label }}</span>
          </div>
        </ng-template>
      </p-multiselect>
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

  getLabel(): string {
    if (!this.value || this.value.length === 0) return '';
    const first = this.equipmentList.find((e) => e.value === this.value[0])?.label ?? this.value[0];
    return this.value.length > 1 ? `${first} (+${this.value.length - 1} مورد دیگر)` : first;
  }
}