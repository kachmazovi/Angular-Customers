import { Component, OnInit, signal } from '@angular/core';
import { UserForm } from '../shared/user-form/user-form.class';
import { ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ErrorComponent } from '../shared/components/error/error.component';
import { UserService } from '../shared/services/user.service';
import { catchError, delay, finalize, of, tap } from 'rxjs';
import { ICustomers } from '../shared/interfaces/interfaces';

@Component({
  selector: 'app-current-customer',
  imports: [ReactiveFormsModule, NgClass, ErrorComponent],
  templateUrl: './current-customer.component.html',
  styleUrl: './current-customer.component.scss',
})
export class CurrentCustomerComponent extends UserForm implements OnInit {
  public editForm = signal(false);

  constructor(private userService: UserService) {
    super();
  }

  public ngOnInit() {
    this.userForm.patchValue(this.userService.currentCustomer());
    this.userForm.disable();
  }

  public edit(edit: boolean) {
    this.editForm.set(edit);
    if (edit) {
      this.userForm.enable();
    } else {
      this.userForm.disable();
    }
  }

  public update() {
    if (this.userForm.valid) {
      this.userService.showSpinner.set(true);
      const userInfo = {
        ...this.userService.currentCustomer(),
        ...this.userForm.value,
      };
      this.userService
        .updateCustomer(userInfo as ICustomers)
        .pipe(
          delay(2000),
          tap((customer) => {
            this.userService.currentCustomer.set(customer);
            this.edit(false);
          }),
          catchError((error) => {
            return of();
          }),
          finalize(() => this.userService.showSpinner.set(false))
        )
        .subscribe();
    }
  }
}
