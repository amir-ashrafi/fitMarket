import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductChart } from './product-chart';

describe('ProductChart', () => {
  let component: ProductChart;
  let fixture: ComponentFixture<ProductChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
