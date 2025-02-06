import { Component, OnDestroy, Output } from '@angular/core';
import { UserForm } from '../shared/user-form/user-form.class';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from '../shared/components/error/error.component';
import { NgClass } from '@angular/common';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, ErrorComponent, NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent extends UserForm {
  public title: string = 'Register';

  constructor(public userService: UserService) {
    super();
  }

  public register() {
    console.log('register');
  }
}
