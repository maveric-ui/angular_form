import { Component, OnInit, ViewEncapsulation, DoCheck } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-reactive-form',
  templateUrl: './employee-add-form.component.html',
  styleUrls: ['./employee-add-form.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeAddFormComponent implements OnInit, DoCheck {

  public countries: string[];
  public cities: string[];
  public currentDate: Date;

  public addEmployeeForm: FormGroup;
  public errorMessages = {
    invalid: 'This field is invalid',
    required: 'This field is required',
    invalidValues: 'Name or password is not correct',
    compareDatesInvalid: 'Hire Date  can\'t be less then Date of Birth'
  };

  public get name() { return this.addEmployeeForm.get('name'); }
  public get dateOfBirth() { return this.addEmployeeForm.get('dateOfBirth'); }
  public get hireDate() { return this.addEmployeeForm.get('hireDate'); }

  constructor(private matDialogRef: MatDialogRef<EmployeeAddFormComponent>, private fb: FormBuilder) { }

  ngOnInit() {
    this.countries = ['Ukraine', 'United Kingdom', 'Japan', 'Germany', 'USA'];
    this.cities = ['Dnipro', 'London', 'Tokio', 'Berlin', 'New York'];
    this.initAddEmployeeForm();
  }

  ngDoCheck() {
    this.currentDate = new Date();
  }

  private initAddEmployeeForm(): void {
    this.addEmployeeForm = this.fb.group({
      name: [null, [
        Validators.required,
      ]],
      position: [null],
      dateOfBirth: [null, [
        Validators.required,
      ]],
      hireDate: [null, [
        Validators.required,
      ]],
      address: [null],
      city: [null],
      country: [null]
    }, {validator: this.compareDatesValidation('dateOfBirth', 'hireDate')});
  }

  private compareDatesValidation (dateOfBirth: string, hireDate: string) {
    return (group: FormGroup): {[key: string]: any} => {
      const dB = group.controls[dateOfBirth];
      const hd = group.controls[hireDate];
      if (dB.value > hd.value) {
        this.addEmployeeForm.controls['hireDate'].setErrors({'compareDatesInvalid': true});
      }
      return {};
    };
  }

  onSubmit(newEmployee) {
    const controls = this.addEmployeeForm.controls;
    if (!this.addEmployeeForm.valid) {
      for (const control in controls) {
        if (this.addEmployeeForm.get(control)) {
          this.addEmployeeForm.get(control).markAsTouched({onlySelf: true});
          this.addEmployeeForm.get(control).markAsDirty({onlySelf: true});
        }
      }
      return;
    }
    this.matDialogRef.close(newEmployee);
  }


  close(): void {
    this.matDialogRef.close();
  }
}
