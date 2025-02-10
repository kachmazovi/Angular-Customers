import { Component, OnDestroy, Output, signal } from '@angular/core';
import { UserForm } from '../shared/user-form/user-form.class';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from '../shared/components/error/error.component';
import { NgClass } from '@angular/common';
import { UserService } from '../shared/services/user.service';
import { ICustomers } from '../shared/interfaces/interfaces';
import { catchError, delay, finalize, of, takeUntil, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, ErrorComponent, NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent extends UserForm {
  public title: string = 'Register';
  public registerFailed = signal(false);

  constructor(public userService: UserService, private router: Router) {
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
              this.router.navigateByUrl('/login');
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
    this.router.navigateByUrl('/login');
  }
}
