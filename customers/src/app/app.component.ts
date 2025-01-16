import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, RegisterComponent],
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
  public title!: string;
  public childLoginComp!: string;
  public childRegisterComp!: string;

  private name = 'Jhon';

  constructor() {
    this.title = 'Customers';
    console.log('app component initted');
  }

  public submit() {
    console.log(this.title);

    this.childLoginComp = 'New Login Component';
    this.childRegisterComp = 'New Register Component';
  }

  public reset() {
    this.childLoginComp = '';
    this.childRegisterComp = '';
  }
}
