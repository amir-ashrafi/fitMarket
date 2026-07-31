import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';
import { Slider } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { InputNumber } from 'primeng/inputnumber';
import { DividerModule } from 'primeng/divider';
import { Supplement } from './components/category/Supplement';
import { Sportsequipment } from './components/category/Sportsequipment';
import { Category_C } from './components/category/category';
import { MedicineComponent } from './components/category/Medicine';
import { Brand_Radio } from './components/category/brand_radion';
import { Radio_dicount } from './components/category/radio_discount';
import { filter } from 'rxjs';

export interface ProductFilters {
  priceRange: [number, number];
  categories: string[];
  brands: string[];
  onlyAvailable: boolean;
  onlyDiscount: boolean;
}

@Component({
  selector: 'app-filter-products',
  imports: [
    FormsModule,
    Slider,
    ButtonModule,
    InputNumber,
    DividerModule,
    Sportsequipment,
    Supplement,
    Category_C,
    MedicineComponent,
    Brand_Radio,
    Radio_dicount,
  ],
  templateUrl: './filter-products.html',
  styleUrl: './filter-products.css',
  standalone: true,
})
export class FilterProducts {
  readonly filtersChange = output<ProductFilters>();
  readonly minPrice = 0;
  readonly maxPrice = 10_000_000;
  showfilter:boolean = false;

  priceRange: [number, number] = [0, 10_000_000];

  mainCategory: string | null = null;
  selectedSupplementTypes: string[] = [];
  selectedEquipmentTypes: string[] = [];
  selectedMedicineTypes: string[] = [];
  selectedBrands: string[] = [];
  statusFilters: string[] = [];

  onPriceChange(): void {
    this.emitFilters();
  }
  togglemenu():void{
    this.showfilter= !this.showfilter;
  }
  onMainCategoryChange(value: string | null): void {
    this.mainCategory = value;
    this.emitFilters();
  }

  onSupplementChange(value: string[]): void {
    this.selectedSupplementTypes = value;
    this.emitFilters();
  }

  onEquipmentChange(value: string[]): void {
    this.selectedEquipmentTypes = value;
    this.emitFilters();
  }

  onMedicineChange(value: string[]): void {
    this.selectedMedicineTypes = value;
    this.emitFilters();
  }

  onBrandChange(value: string[]): void {
    this.selectedBrands = value;
    this.emitFilters();
  }

  onStatusChange(value: string[]): void {
    this.statusFilters = value;
    this.emitFilters();
  }

  clearFilters(): void {
    this.priceRange = [this.minPrice, this.maxPrice];
    this.mainCategory = null;
    this.selectedSupplementTypes = [];
    this.selectedEquipmentTypes = [];
    this.selectedMedicineTypes = [];
    this.selectedBrands = [];
    this.statusFilters = [];
    this.emitFilters();
    this.showfilter = false; 
  }

  get onlyAvailable(): boolean {
    return this.statusFilters.includes('available');
  }

  get onlyDiscount(): boolean {
    return this.statusFilters.includes('discount');
  }

  private emitFilters(): void {
    this.filtersChange.emit({
      priceRange: [...this.priceRange] as [number, number],
      categories: [
        ...(this.mainCategory ? [this.mainCategory] : []),
        ...this.selectedSupplementTypes,
        ...this.selectedEquipmentTypes,
        ...this.selectedMedicineTypes,
      ],
      brands: [...this.selectedBrands],
      onlyAvailable: this.onlyAvailable,
      onlyDiscount: this.onlyDiscount,
    });
  }
}