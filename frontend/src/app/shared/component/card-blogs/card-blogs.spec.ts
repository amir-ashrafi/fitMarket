import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBlogs } from './card-blogs';

describe('CardBlogs', () => {
  let component: CardBlogs;
  let fixture: ComponentFixture<CardBlogs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBlogs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBlogs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
