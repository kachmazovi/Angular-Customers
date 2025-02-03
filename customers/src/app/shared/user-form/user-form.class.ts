import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

export abstract class UserForm {
  constructor() {}

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
      Validators.pattern(
        '^(?=.*d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$'
      ),
    ]),
    agreed: new FormControl(false, [Validators.requiredTrue]),
  });

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
