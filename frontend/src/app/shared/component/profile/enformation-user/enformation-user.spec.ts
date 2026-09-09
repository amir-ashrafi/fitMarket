import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnformationUser } from './enformation-user';

describe('EnformationUser', () => {
  let component: EnformationUser;
  let fixture: ComponentFixture<EnformationUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnformationUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnformationUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
