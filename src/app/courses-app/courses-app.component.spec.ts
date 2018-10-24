import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesAppComponent } from './courses-app.component';

describe('CoursesAppComponent', () => {
  let component: CoursesAppComponent;
  let fixture: ComponentFixture<CoursesAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
