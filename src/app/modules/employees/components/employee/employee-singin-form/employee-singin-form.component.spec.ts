import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSinginFormComponent } from './employee-singin-form.component';

describe('EmployeeSinginFormComponent', () => {
  let component: EmployeeSinginFormComponent;
  let fixture: ComponentFixture<EmployeeSinginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeSinginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSinginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
