import { Component, EventEmitter, Output } from '@angular/core';
import { LoginRegister } from '../login-register-form/login-register.class';
import { FormsModule } from '@angular/forms';
import {
  BehaviorSubject,
  catchError,
  filter,
  finalize,
  from,
  map,
  Observable,
  of,
  Subject,
  take,
  tap,
} from 'rxjs';
import { AsyncPipe } from '@angular/common';

interface IUser {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  imports: [FormsModule, AsyncPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent extends LoginRegister {
  @Output() register = new EventEmitter();

  private numbers = from([1, 2, 3]);
  private person = of({
    name: 'Jhon',
    age: 18,
  });

  public myBeha = new BehaviorSubject('new BehaviorSubject');

  private myObs = new Observable((observer) => {
    observer.next(1);
    observer.next(10);
    observer.next(100);

    setTimeout(() => {
      observer.next(1000);
      observer.complete();
    }, 2000);
  });

  public title = 'Login';

  public username!: string;
  public password!: string;

  constructor() {
    super();

    console.log('before subscribe');

    this.myObs.subscribe(
      (value) => {
        console.log(value);
      },
      (err) => {
        console.log(err.message);
      },
      () => {
        console.log('completed');
      }
    );

    console.log('after subscribe');

    this.myBeha
      .pipe(
        take(2),
        tap((value) => {
          console.log(value);
        })
      )
      .subscribe();

    this.numbers
      .pipe(
        map((value) => {
          return value + 10;
        }),
        filter((value) => {
          return value >= 12;
        }),
        tap((value) => {
          console.log('numbers', value);
        })
      )
      .subscribe();

    this.person.subscribe((value) => {
      console.log(value);
    });
  }

  public login() {
    this.myBeha.next('new');
    // console.log(this.username, this.password);
  }
}
