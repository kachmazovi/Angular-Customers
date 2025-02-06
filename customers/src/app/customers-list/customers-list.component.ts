import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CustomerIdPipe } from './customer-id.pipe';
import { UserService } from '../shared/services/user.service';
import { ICustomers } from '../shared/interfaces/interfaces';
import { CurrentStates } from '../shared/enums/enums';

@Component({
  selector: 'app-customers-list',
  imports: [AsyncPipe, CustomerIdPipe],
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.scss',
})
export class CustomersListComponent {
  public users = new BehaviorSubject<ICustomers[]>([]);

  constructor(public userService: UserService) {}

  public logout() {
    this.userService.currentState.set(CurrentStates.LOGIN);
  }
}
