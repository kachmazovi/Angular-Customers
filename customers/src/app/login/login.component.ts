import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoginRegister } from '../login-register-form/login-register.abstract-class';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent extends LoginRegister {
  public title = 'Login';

  public firstName!: string;
  public password!: string;

  constructor() {
    super();
  }
}
