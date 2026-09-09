import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCart } from './table-cart';

describe('TableCart', () => {
  let component: TableCart;
  let fixture: ComponentFixture<TableCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableCart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
