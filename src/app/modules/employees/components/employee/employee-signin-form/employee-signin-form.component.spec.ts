import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSignInFormComponent } from './employee-signin-form.component';

describe('EmployeeSinginFormComponent', () => {
  let component: EmployeeSignInFormComponent;
  let fixture: ComponentFixture<EmployeeSignInFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeSignInFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSignInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
