import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { CurrentStates } from '../shared/enums/enums';

interface IUser {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public title = 'Login';

  public username!: string;
  public password!: string;

  constructor(public userService: UserService) {}

  public login() {
    console.log(this.username, this.password);
    this.userService.currentState.set(CurrentStates.CUSTOMERS);
  }

  public register() {
    this.userService.currentState.set(CurrentStates.REGISTER);
  }
}
