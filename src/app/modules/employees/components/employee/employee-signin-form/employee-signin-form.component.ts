import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-singin-form',
  templateUrl: './employee-signin-form.component.html',
  styleUrls: ['./employee-signin-form.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeSignInFormComponent implements OnInit {

  public signInForm: FormGroup;
  public errorMessages = {
    required: 'This field is required'
  };

  public get name() { return this.signInForm.get('name'); }
  public get password() { return this.signInForm.get('password'); }

  constructor(private matDialogRef: MatDialogRef<EmployeeSignInFormComponent>, private fb: FormBuilder) { }

  ngOnInit() {
    this.initSingInForm();
  }

  private initSingInForm(): void {
    this.signInForm = this.fb.group({
      name: [null, [
        Validators.required
      ]],
      password: [null, [
        Validators.required
      ]]
    });
  }

  onSingIn(user) {
    const controls = this.signInForm.controls;

    if (!this.signInForm.valid) {
      for (const control in controls) {
        if (this.signInForm.get(control)) {
          this.signInForm.get(control).markAsTouched({onlySelf: true});
          this.signInForm.get(control).markAsDirty({onlySelf: true});
        }
      }
      return;
    }

    console.log(user);
    this.matDialogRef.close();
  }

  close(): void {
    this.matDialogRef.close();
  }

}
