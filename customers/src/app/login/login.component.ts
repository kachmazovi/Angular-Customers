import {
  ChangeDetectionStrategy,
  Component,
  effect,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../shared/services/user.service';

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
  public title = 'Login'
  

  public username!: string;
  public password!: string;

  private userNameSignal = signal(this.username);
  private passWordSignal = signal(this.password);

  // private userinfo = computed(() => {
  //   let username = '';
  //   let password = '';

  //   if (this.userNameSignal()?.length < 3) {
  //     username = this.userNameSignal() + this.userNameSignal();
  //   } else {
  //     username = this.userNameSignal();
  //   }

  //   return {
  //     username,
  //     password: this.passWordSignal(),
  //   };
  // });

  constructor(public userService: UserService ) {
    effect(() => {
      console.log('from constructor', this.userNameSignal())
      console.log('from constructor', this.passWordSignal())
    })
  }

  public login() {
    console.log(this.username, this.password);
    this.userService.currentState.set('customers')
    // this.userNameSignal.set(this.username);
    // this.passWordSignal.set(this.password);
  }
}
