import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public loginPage = true;

  constructor() {
    console.log('app component initted');
  }

  public login() {
    this.loginPage = true;
  }

  public register() {
    this.loginPage = false;
  }
}
