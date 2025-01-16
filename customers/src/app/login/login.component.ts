import { Component, Input } from '@angular/core';
import { LoginRegister } from '../login-register-form/login-register.abstract-class';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent extends LoginRegister {
  @Input() title: string = 'Login Component';

  constructor() {
    super();
    console.log('login component');
  }
}
