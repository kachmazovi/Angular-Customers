import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './shared/services/user.service';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CurrentCustomerComponent } from './current-customer/current-customer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public loginPage = true;

  constructor(public userService: UserService) {}

  public login() {
    this.loginPage = true;
  }

  public register() {
    this.loginPage = false;
  }
}
