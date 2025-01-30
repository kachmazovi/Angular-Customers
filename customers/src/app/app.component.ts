import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CustomersComponent } from './customers/customers.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, RegisterComponent, CustomersComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public loginPage = true;

  constructor() {}

  public login() {
    this.loginPage = true;
  }

  public register() {
    this.loginPage = false;
  }
}
