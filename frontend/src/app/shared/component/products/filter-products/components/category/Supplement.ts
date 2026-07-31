import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

interface SupplementOption {
  label: string;
  value: string;
  icon: string;
}

@Component({
  selector: 'app-category-supplement',
  standalone: true,
  imports: [MultiSelectModule, FormsModule],
  template: `
    <div class="flex justify-center">
      <p-multiselect
        [options]="supplementList"
        [(ngModel)]="value"
        (ngModelChange)="valueChange.emit($event)"
        optionLabel="label"
        optionValue="value"
        [showClear]="true"
        placeholder="انتخاب مکمل‌ها"
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

  getLabel(): string {
    if (!this.value || this.value.length === 0) return '';
    const first = this.supplementList.find((t) => t.value === this.value[0])?.label ?? this.value[0];
    return this.value.length > 1 ? `${first} (+${this.value.length - 1} مورد دیگر)` : first;
  }
}