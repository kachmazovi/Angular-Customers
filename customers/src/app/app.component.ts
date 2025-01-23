import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, RegisterComponent, ChildComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('loginComponent') public loginComp!: ElementRef;

  public loginPage = true;

  public title = '';

  constructor() {
    console.log('app component initted');
  }

  public login() {
    this.loginPage = true;
  }

  public register() {
    this.loginPage = false;
  }

  public ngOnInit(): void {
    console.log('login component:', this.loginComp);
  }

  public ngAfterViewInit(): void {
    console.log(
      'login component after view init:',
      this.loginComp.nativeElement
    );
  }

  public changeTitle() {
    this.title = Math.random().toFixed(2).toString();
  }
}
