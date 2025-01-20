import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CustomersComponent } from './customers/customers.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, RegisterComponent, CustomersComponent],
  templateUrl: './app.component.html',
  // template: ` <h1>This is Angular Application</h1> `,
  styleUrls: ['./app.component.scss'],
  // styles: `
  //   h1 {
  //     color: red;
  //   }
  // `,
})
export class AppComponent {
  public loginPage = true;

  public user = {
    profile: {
      settings: {
        startDate: '2025',
      },
    },
  };

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
