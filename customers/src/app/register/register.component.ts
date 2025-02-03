import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { LoginRegister } from '../login-register-form/login-register.class';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ErrorComponent } from '../error/error.component';
import {  NgClass } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, ErrorComponent, NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent extends LoginRegister implements OnDestroy {
  @Output() login = new EventEmitter();

  public title: string = 'Register';

  public userForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
      usernameValidator(),
    ]),
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$'),
    ]),
    agreed: new FormControl(false, [Validators.requiredTrue]),
  });

  constructor() {
    super();
  }

  public register() {
    console.log('register');
  }

  public ngOnDestroy(): void {
    console.log('on destroy');
  }

  public get usernameControl(): FormControl {
    return this.userForm.get('username') as FormControl;
  }

  public get firstNameControl(): FormControl {
    return this.userForm.get('firstName') as FormControl;
  }

  public get lastNameControl(): FormControl {
    return this.userForm.get('lastName') as FormControl;
  }

  public get emailControl(): FormControl {
    return this.userForm.get('email') as FormControl;
  }

  public get passwordControl(): FormControl {
    return this.userForm.get('password') as FormControl;
  }

  public get agreedControl(): FormControl {
    return this.userForm.get('agreed') as FormControl;
  }
}
function usernameValidator(): (
  contol: AbstractControl
) => ValidationErrors | null {
  return (contol: AbstractControl) => {
    const pattern = /^[a-zA-Z]*$/;

    if (contol.value && !pattern.test(contol.value)) {
      return { onlyLathinLetters: true };
    }

    return null;
  };
}
