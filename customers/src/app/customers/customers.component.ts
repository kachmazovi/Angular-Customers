import { Component } from '@angular/core';
import { ICustomers } from './customers.interface';
import { CustomerPipe } from './customer.pipe';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-customers',
  imports: [AsyncPipe],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss',
})
export class CustomersComponent {
  public users = new BehaviorSubject<ICustomers[]>([
    {
      id: 1,
      name: 'Jhon',
      surName: 'Doe',
    },
    {
      id: 2,
      name: 'Jhon2',
      surName: 'Doe',
    },
    {
      id: 3,
      name: 'Jhon3',
      surName: 'Doe',
    },
    {
      id: 4,
      name: 'Jhon4',
      surName: 'Doe',
    },
    {
      id: 5,
      name: 'Jhon5',
      surName: 'Doe',
    },
    {
      id: 6,
      name: 'Jhon6',
      surName: 'Doe',
    },
  ]);

  public deleteUser() {
    const users = this.users.getValue();
    users.pop();
    this.users.next(users);
  }

  public addUser() {
    const users = this.users.getValue();
    users.push({
      id: 1,
      name: 'Jhon',
      surName: 'Doe',
    });
    this.users.next(users);
  }
}
