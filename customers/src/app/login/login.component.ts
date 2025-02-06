import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { CurrentStates } from '../shared/enums/enums';
import { catchError, delay, finalize, of, tap } from 'rxjs';
import { ErrorComponent } from '../shared/components/error/error.component';

interface IUser {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  imports: [FormsModule, ErrorComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public title = 'Login';

  public loginFailed = signal(false);

  public username!: string;
  public password!: string;

  constructor(public userService: UserService) {}

  public login() {
    if (this.username && this.password) {
      this.userService.showSpinner.set(true);
      this.userService
        .getCustomers()
        .pipe(
          delay(2000),
          tap((customers) => {
            const customer = customers.find((customer) => {
              return (
                customer.username === this.username &&
                customer.password === this.password
              );
            });

            if (customer) {
              this.userService.loggedCustomer.set(customer);
              this.userService.currentState.set(CurrentStates.CUSTOMERS);
            } else {
              this.loginFailed.set(true);
            }
          }),
          catchError(() => {
            this.loginFailed.set(true);
            return of();
          }),
          finalize(() => {
            this.userService.showSpinner.set(false);
          })
        )
        .subscribe();
    } else {
      this.loginFailed.set(true);
    }
  }

  public register() {
    this.userService.currentState.set(CurrentStates.REGISTER);
  }
}
