import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinjasAppComponent } from './ninjas-app.component';

describe('NinjasAppComponent', () => {
  let component: NinjasAppComponent;
  let fixture: ComponentFixture<NinjasAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinjasAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinjasAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
