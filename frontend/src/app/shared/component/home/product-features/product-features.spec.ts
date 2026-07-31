import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFeatures } from './product-features';

describe('ProductFeatures', () => {
  let component: ProductFeatures;
  let fixture: ComponentFixture<ProductFeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductFeatures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFeatures);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
