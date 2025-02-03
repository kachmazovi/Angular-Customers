import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface IUser {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @Output() register = new EventEmitter();

  public title = 'Login';

  public username!: string;
  public password!: string;

  constructor() {
  }

  public login() {
    console.log(this.username, this.password);
  }
}
