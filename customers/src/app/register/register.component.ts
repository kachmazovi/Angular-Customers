import { Component, Input } from '@angular/core';
import { LoginRegister } from '../login-register-form/login-register.abstract-class';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent extends LoginRegister {
  @Input() title: string = 'Register Component';

  constructor() {
    super();
    console.log('register component');
  }
}
