import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../../../main/classes/user';
import {AuthMainService} from '../../../../main/services/auth-main.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-signin-form',
  templateUrl: './employee-signin-form.component.html',
  styleUrls: ['./employee-signin-form.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeSignInFormComponent implements OnInit, OnChanges {

  @Input() public userList: User[];
  public signInForm: FormGroup;
  public errorMessages = {
    required: 'This field is required'
  };

  public get name() { return this.signInForm.get('name'); }
  public get password() { return this.signInForm.get('password'); }

  constructor(private matDialogRef: MatDialogRef<EmployeeSignInFormComponent>,
              private fb: FormBuilder,
              private authMainService: AuthMainService,
              private router: Router
              ) { }

  ngOnChanges(changes: SimpleChanges) {
  }

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

  // console.log('User logged');
  // this.router.navigateByUrl('main/employee');

  private authUserValidation() {
    const valFromUserFrom = this.signInForm.value;

    if (valFromUserFrom.name && valFromUserFrom.password) {
      this.authMainService.signIn().subscribe(
        (user) => {
          user.map((u) => {
            if (u.name === valFromUserFrom.name && u.password === valFromUserFrom.password) {
              console.log('User logged');
              this.router.navigateByUrl('main/employee');
            } else {
              console.error('error');
            }
          });
        }
      );
    }
  }

  onSingIn() {
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

    this.authUserValidation();
    this.matDialogRef.close();
  }

  close(): void {
    this.matDialogRef.close();
  }

}
