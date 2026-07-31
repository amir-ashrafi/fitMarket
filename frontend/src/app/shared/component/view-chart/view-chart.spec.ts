import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChart } from './view-chart';

describe('ViewChart', () => {
  let component: ViewChart;
  let fixture: ComponentFixture<ViewChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
