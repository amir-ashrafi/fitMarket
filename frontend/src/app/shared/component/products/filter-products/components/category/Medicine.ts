import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

interface MedicineOption {
  name: string;
  code: string;
}

@Component({
  selector: 'app-medicin-component',
  standalone: true,
  imports: [MultiSelectModule, FormsModule],
  template: `
    <div class="flex justify-center">
      <p-multiselect
        [options]="medicineList"
        [(ngModel)]="value"
        (ngModelChange)="onChange($event)"
        optionLabel="name"
        optionValue="code"
        [showClear]="true"
        [showHeader]="true"
        [selectAll]="true"
        placeholder="انتخاب داروهای بدنسازی"
        class="w-full"
      >
        <ng-template #selectedItems>
          <span>{{ getLabel() }}</span>
        </ng-template>
        <ng-template let-item #item>
          <span>{{ item.name }}</span>
        </ng-template>
      </p-multiselect>
    </div>
  `,
})
export class MedicineComponent {
  @Input() value: string[] = [];
  @Output() valueChange = new EventEmitter<string[]>();

  medicineList: MedicineOption[] = [
    { name: 'تستوسترون', code: 'testosterone' },
    { name: 'استروئید آنابولیک', code: 'anabolic' },
    { name: 'SARMs', code: 'sarms' },
    { name: 'پپتیدها', code: 'peptide' },
    { name: 'PCT و ریکاوری', code: 'pct' },
  ];

  onChange(val: string[]): void {
    this.valueChange.emit(val);
  }

  getLabel(): string {
    if (!this.value || this.value.length === 0) return '';
    const first = this.medicineList.find((c) => c.code === this.value[0])?.name ?? this.value[0];
    return this.value.length > 1 ? `${first} (+${this.value.length - 1} مورد دیگر)` : first;
  }
}