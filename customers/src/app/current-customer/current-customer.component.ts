import { Component, signal } from '@angular/core';
import { UserForm } from '../shared/user-form/user-form.class';
import { ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ErrorComponent } from '../shared/components/error/error.component';

@Component({
  selector: 'app-current-customer',
  imports: [ReactiveFormsModule, NgClass, ErrorComponent],
  templateUrl: './current-customer.component.html',
  styleUrl: './current-customer.component.scss',
})
export class CurrentCustomerComponent extends UserForm {
  public editForm = signal(false);

  public edit(edit: boolean) {
    this.editForm.set(edit);
    if (edit) {
      this.userForm.enable();
    } else {
      this.userForm.disable();
    }
  }

  public update() {}
}
