import { Component } from '@angular/core';
import { ICustomers } from './customers.interface';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CustomerIdPipe } from './customer-id.pipe';

@Component({
  selector: 'app-customers-list',
  imports: [AsyncPipe, CustomerIdPipe],
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.scss',
})
export class CustomersListComponent {
  public users = new BehaviorSubject<ICustomers[]>([
    {
      username: 'jsmith001',
      firstname: 'John',
      lastname: 'Smith',
      email: 'jsmith001@example.com',
      password: 'P@ssw0rd123',
    },
    {
      username: 'amiller22',
      firstname: 'Amanda',
      lastname: 'Miller',
      email: 'amiller22@example.com',
      password: 'Qwerty123!',
    },
    {
      username: 'bdavis_97',
      firstname: 'Brian',
      lastname: 'Davis',
      email: 'bdavis_97@example.com',
      password: 'Password!2023',
    },
    {
      username: 'tlee_jr',
      firstname: 'Tommy',
      lastname: 'Lee',
      email: 'tlee_jr@example.com',
      password: 'T!mmy123',
    },
    {
      username: 'kallen89',
      firstname: 'Kaitlyn',
      lastname: 'Allen',
      email: 'kallen89@example.com',
      password: 'K8l@en89',
    },
    {
      username: 'mperez74',
      firstname: 'Maria',
      lastname: 'Perez',
      email: 'mperez74@example.com',
      password: 'M@ria74!',
    },
    {
      username: 'djohnson42',
      firstname: 'David',
      lastname: 'Johnson',
      email: 'djohnson42@example.com',
      password: 'D@vid2024',
    },
    {
      username: 'mwhite123',
      firstname: 'Mark',
      lastname: 'White',
      email: 'mwhite123@example.com',
      password: 'M@rk123!',
    },
    {
      username: 'sjones77',
      firstname: 'Sarah',
      lastname: 'Jones',
      email: 'sjones77@example.com',
      password: 'S@rah77!',
    },
    {
      username: 'bthompson98',
      firstname: 'Brian',
      lastname: 'Thompson',
      email: 'bthompson98@example.com',
      password: 'Bri@nt98',
    },
    {
      username: 'jwilson63',
      firstname: 'James',
      lastname: 'Wilson',
      email: 'jwilson63@example.com',
      password: 'J@mes63!',
    },
    {
      username: 'jclark56',
      firstname: 'Jessica',
      lastname: 'Clark',
      email: 'jclark56@example.com',
      password: 'J3ssica56',
    },
    {
      username: 'rharris31',
      firstname: 'Randy',
      lastname: 'Harris',
      email: 'rharris31@example.com',
      password: 'R@ndy31',
    },
    {
      username: 'mjackson44',
      firstname: 'Michael',
      lastname: 'Jackson',
      email: 'mjackson44@example.com',
      password: 'M!chael44',
    },
    {
      username: 'bwilliams55',
      firstname: 'Brandon',
      lastname: 'Williams',
      email: 'bwilliams55@example.com',
      password: 'B@ndon55',
    },
    {
      username: 'rscott23',
      firstname: 'Rachel',
      lastname: 'Scott',
      email: 'rscott23@example.com',
      password: 'R@chel23!',
    },
    {
      username: 'gmartin34',
      firstname: 'George',
      lastname: 'Martin',
      email: 'gmartin34@example.com',
      password: 'G!orge34',
    },
    {
      username: 'ehernandez45',
      firstname: 'Eva',
      lastname: 'Hernandez',
      email: 'ehernandez45@example.com',
      password: 'Ev@45!',
    },
    {
      username: 'alewis10',
      firstname: 'Anna',
      lastname: 'Lewis',
      email: 'alewis10@example.com',
      password: 'Anna10@!',
    },
  ]);
}
