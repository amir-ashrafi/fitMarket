import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { MultiSelectModule } from 'primeng/multiselect';
interface BrandOption {
  name: string;
  code: string;
}

@Component({
  selector: 'app-brand-radio',
  standalone: true,
  imports: [CheckboxModule, MultiSelectModule, FormsModule],
  template: `
    <div class="flex justify-center">
      <p-multiselect
        [options]="brandList"
        [(ngModel)]="value"
        (ngModelChange)="onChange($event)"
        optionLabel="name"
        optionValue="code"
        [showClear]="true"
        placeholder="انتخاب برند"
        class="w-full"
      >
        <ng-template #header let-headerClass="class">
          <div [class]="headerClass">
            <p-checkbox [ngModel]="allSelected" [binary]="true" [indeterminate]="indeterminate" (ngModelChange)="onToggleAll($event)" label="انتخاب همه" class="ml-1.5" />
          </div>
        </ng-template>
        <ng-template #selectedItem>
          <span>{{ getLabel() }}</span>
        </ng-template>
        <ng-template let-item #item>
          <span>{{ item.name }}</span>
        </ng-template>
        </p-multiselect>
    </div>
  `,
})
export class Brand_Radio {
  @Input() value: string[] = [];
  @Output() valueChange = new EventEmitter<string[]>();

  brandList: BrandOption[] = [
    { name: 'برند ایرانی', code: 'local' },
    { name: 'Rule 1', code: 'rule1' },
    { name: 'BSN', code: 'bsn' },
    { name: 'Universal', code: 'universal' },
    { name: 'MuscleTech', code: 'muscletech' },
    { name: 'Optimum Nutrition', code: 'optimum' },
  ];

  onChange(val: string[]): void {
    this.valueChange.emit(val);
  }

  getLabel(): string {
    if (!this.value || this.value.length === 0) return '';
    const first = this.brandList.find((c) => c.code === this.value[0])?.name ?? this.value[0];
    return this.value.length > 1 ? `${first} (+${this.value.length - 1} مورد دیگر)` : first;
  }

  get allSelected(): boolean {
    return this.value.length === this.brandList.length;
  }

  get indeterminate(): boolean {
    return this.value.length > 0 && !this.allSelected;
  }

  isItemSelected(brand: BrandOption): boolean {
    return this.value.includes(brand.code);
  }

  onToggleAll(checked: boolean): void {
    const val = checked ? this.brandList.map((c) => c.code) : [];
    this.value = val;
    this.valueChange.emit(val);
  }
}