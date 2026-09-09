import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksProfile } from './links-profile';

describe('LinksProfile', () => {
  let component: LinksProfile;
  let fixture: ComponentFixture<LinksProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinksProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
