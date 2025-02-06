import { Component, OnDestroy, Output, signal } from '@angular/core';
import { UserForm } from '../shared/user-form/user-form.class';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from '../shared/components/error/error.component';
import { NgClass } from '@angular/common';
import { UserService } from '../shared/services/user.service';
import { CurrentStates } from '../shared/enums/enums';
import { ICustomers } from '../shared/interfaces/interfaces';
import { catchError, delay, finalize, of, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, ErrorComponent, NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent extends UserForm {
  public title: string = 'Register';
  public registerFailed = signal(false);

  constructor(public userService: UserService) {
    super();
  }

  public register() {
    if (this.userForm.valid) {
      this.userService.showSpinner.set(true);
      const userInfo = this.userForm.value as ICustomers;
      this.userService
        .createCustomer(userInfo)
        .pipe(
          delay(2000),
          tap(() => {
            if (!this.registerFailed()) {
              this.userService.currentState.set(CurrentStates.LOGIN);
            }
          }),

          catchError((error) => {
            this.registerFailed.set(true);
            return of();
          }),
          finalize(() => {
            this.userService.showSpinner.set(false);
          })
        )
        .subscribe();
    }
  }

  public login() {
    this.userService.currentState.set(CurrentStates.LOGIN);
  }
}
