import { Component, EventEmitter, Output } from '@angular/core';
import { LoginRegister } from '../login-register-form/login-register.class';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { tap } from 'rxjs';
import { ErrorComponent } from '../error/error.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, ErrorComponent, NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent extends LoginRegister {
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
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.pattern('^[a-zA-Z0-9]*$'),
    ]),
    agreed: new FormControl(false, [Validators.requiredTrue]),
  });

  constructor() {
    super();

    // this.userForm.valueChanges
    //   .pipe(
    //     tap((value) => {
    //       console.log(value);
    //     })
    //   )
    //   .subscribe();

    // this.usernameControl.valueChanges
    //   .pipe(
    //     tap((value) => {
    //       console.log(value);
    //     })
    //   )
    //   .subscribe();
  }

  public register() {
    console.log('register');
    console.log(this.userForm);
    console.log(this.userForm.valid);
  }

  public get usernameControl(): FormControl {
    return this.userForm.get('username') as FormControl;
  }

  public get firstNameControl(): FormControl {
    return this.userForm.get('firstName') as FormControl;
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
