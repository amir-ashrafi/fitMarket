import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeBlog } from './ce-blog';

describe('CeBlog', () => {
  let component: CeBlog;
  let fixture: ComponentFixture<CeBlog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CeBlog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeBlog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
