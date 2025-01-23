import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  DoCheck,
  EventEmitter,
  input,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { LoginRegister } from '../login-register-form/login-register.class';
import { FormsModule } from '@angular/forms';
import { NgClass, NgStyle } from '@angular/common';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgClass, NgStyle, HighlightDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent
  extends LoginRegister
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    DoCheck,
    AfterContentInit,
    AfterContentChecked
{
  @Output() register = new EventEmitter();

  @Input() title = 'Login';

  public username!: string;
  public password!: string;

  public isSpecial = true;
  public currentClasses = {
    isSpecial: this.isSpecial,
    user: this.username,
    pass: this.password,
  };

  public currentStyles = {
    'font-style': true ? 'italic' : 'normal',
    'font-weight': false ? 'bold' : 'normal',
    'font-size': this.isSpecial ? '24px' : '12px',
  };

  constructor() {
    super();
  }

  public ngOnInit(): void {
    console.log('on init');
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  public ngOnDestroy(): void {
    console.log('component destroyed');
  }

  public ngDoCheck(): void {
    console.log('do check');
  }

  public ngAfterContentInit(): void {
    console.log('after content init');
  }

  public ngAfterContentChecked(): void {
    console.log('after content checked');
  }

  public login() {
    console.log(this.username, this.password);
    this.currentClasses = {
      isSpecial: this.isSpecial,
      user: this.username,
      pass: this.password,
    };

    this.currentStyles = {
      'font-style': 'normal',
      'font-weight': 'bold',
      'font-size': '32px',
    };
  }
}
