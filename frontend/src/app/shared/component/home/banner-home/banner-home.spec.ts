import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerHome } from './banner-home';

describe('BannerHome', () => {
  let component: BannerHome;
  let fixture: ComponentFixture<BannerHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
