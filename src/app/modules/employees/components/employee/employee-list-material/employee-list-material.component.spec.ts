import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListMaterialComponent } from './employee-list-material.component';

describe('EmployeeListMaterialComponent', () => {
  let component: EmployeeListMaterialComponent;
  let fixture: ComponentFixture<EmployeeListMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
