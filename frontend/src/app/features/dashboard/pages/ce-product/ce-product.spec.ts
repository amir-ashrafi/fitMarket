import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeProduct } from './ce-product';

describe('CeProduct', () => {
  let component: CeProduct;
  let fixture: ComponentFixture<CeProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CeProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
