import { Component, EventEmitter, Output } from '@angular/core';
import { LoginRegister } from '../login-register-form/login-register.class';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent extends LoginRegister {
  @Output() login = new EventEmitter();

  public title: string = 'Register';

  constructor() {
    super();
  }

  public register() {
    console.log('register');
  }
}
