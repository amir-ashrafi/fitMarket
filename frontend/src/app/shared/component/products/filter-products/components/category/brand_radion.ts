import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { Select } from "primeng/select";

interface BrandOption {
  name: string;
  code: string;
}

@Component({
  selector: 'app-brand-radio',
  standalone: true,
  imports: [CheckboxModule, MultiSelectModule, FormsModule, Select],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex justify-center">
      <p-select
        [options]="brandList"
        [(ngModel)]="selectedBrand"
        (ngModelChange)="onChange($event)"
        [multiple]="true"
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
        <ng-template let-brand #item>
          <p-checkbox [ngModel]="isItemSelected(brand)" [binary]="true" [tabindex]="-1" [readonly]="true" />
          <span class="pr-2">{{ brand.name }}</span>
        </ng-template>
      </p-select>
    </div>
  `,
})
export class Brand_Radio implements OnChanges {
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

  selectedBrand: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      this.selectedBrand = this.value ?? [];
    }
  }

  onChange(val: string[]): void {
    this.selectedBrand = val;
    this.value = val;
    this.valueChange.emit(val);
  }

  getLabel(): string {
    if (this.selectedBrand.length === 0) return '';
    const first = this.brandList.find((c) => c.code === this.selectedBrand[0])?.name ?? this.selectedBrand[0];
    return this.selectedBrand.length > 1 ? `${first} (+${this.selectedBrand.length - 1} more)` : first;
  }

  get allSelected(): boolean {
    return this.selectedBrand.length === this.brandList.length;
  }

  get indeterminate(): boolean {
    return this.selectedBrand.length > 0 && !this.allSelected;
  }

  isItemSelected(brand: BrandOption): boolean {
    return this.selectedBrand.includes(brand.code);
  }

  onToggleAll(checked: boolean) {
    const val = checked ? this.brandList.map((c) => c.code) : [];
    this.selectedBrand = val;
    this.value = val;
    this.valueChange.emit(val);
  }
}