import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';

interface CategoryOption {
  label: string;
  value: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-category-component-small',
  standalone: true,
  imports: [SelectModule, FormsModule],
  template: `
    <div class="flex justify-center">
      <p-select
        [options]="categoriesList"
        [(ngModel)]="value"
        (ngModelChange)="valueChange.emit($event)"
        [checkmark]="true"
        optionLabel="label"
        optionValue="value"
        [showClear]="true"
        placeholder="انتخاب دسته‌بندی اصلی"
        scrollHeight="auto"
        class="w-full"
        [pt]="{ option: { class: 'flex-row-reverse justify-between' } }"
      >
        <ng-template #selectedItem let-selectedOption>
          <div class="flex items-center gap-2">
            <span>{{ selectedOption.icon }}</span>
            <span>{{ selectedOption.label }}</span>
          </div>
        </ng-template>
        <ng-template let-cat #item>
          <div class="flex items-center gap-3 py-1">
            <span class="text-xl">{{ cat.icon }}</span>
            <div class="flex flex-col">
              <span class="font-medium">{{ cat.label }}</span>
              <span class="text-xs text-surface-500">{{ cat.description }}</span>
            </div>
          </div>
        </ng-template>
      </p-select>
    </div>
  `,
})
export class Category_C {
  @Input() value: string | null = null;
  @Output() valueChange = new EventEmitter<string | null>();

  categoriesList: CategoryOption[] = [
    { label: 'مکمل‌های ورزشی', value: 'supplements', icon: '💊', description: 'پروتئین، کراتین و سایر مکمل‌ها' },
    { label: 'وسایل ورزشی', value: 'equipment', icon: '🏋️', description: 'تجهیزات و لوازم تمرین' },
    { label: 'داروهای بدنسازی', value: 'medicine', icon: '⚕️', description: 'داروهای مرتبط با بدنسازی' },
  ];
}