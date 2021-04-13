import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsStudentsComponent } from './news-students.component';

describe('NewsStudentsComponent', () => {
  let component: NewsStudentsComponent;
  let fixture: ComponentFixture<NewsStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
