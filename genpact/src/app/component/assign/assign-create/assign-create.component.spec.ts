import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignCreateComponent } from './assign-create.component';

describe('AssignCreateComponent', () => {
  let component: AssignCreateComponent;
  let fixture: ComponentFixture<AssignCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
