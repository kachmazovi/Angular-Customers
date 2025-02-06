import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  delay,
  finalize,
  of,
  Subject,
  takeUntil,
  tap,
} from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CustomerIdPipe } from './customer-id.pipe';
import { UserService } from '../shared/services/user.service';
import { ICustomers } from '../shared/interfaces/interfaces';
import { CurrentStates } from '../shared/enums/enums';

@Component({
  selector: 'app-customers-list',
  imports: [AsyncPipe],
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.scss',
})
export class CustomersListComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  public customers$ = new BehaviorSubject<ICustomers[]>([]);

  constructor(public userService: UserService) {}

  public ngOnInit() {
    this.getCustomers();
  }

  public getCustomers(): void {
    this.userService
      .getCustomers()
      .pipe(
        takeUntil(this.destroy$),
        catchError((error) => {
          console.error('Error fetching customers: ', error);
          return of([]);
        }),
        tap((customers: ICustomers[]) => {
          console.log('customers: ', customers);
          this.customers$.next(customers);
        })
      )
      .subscribe();
  }

  public logout(): void {
    this.userService.currentState.set(CurrentStates.LOGIN);
  }

  public chooseUser(customer: ICustomers): void {
    this.userService.currentState.set(CurrentStates.CURRENT_CUSTOMER);
    this.userService.currentCustomer.set(customer);
  }

  public deleteCustomer(event: Event, customerId: number): void {
    event.stopPropagation();
    this.userService.showSpinner.set(true);
    this.userService
      .deleteCustomer(customerId)
      .pipe(
        delay(2000),
        tap(() => {
          this.getCustomers();
        }),
        catchError((error) => {
          return of();
        }),
        finalize(() => this.userService.showSpinner.set(false))
      )
      .subscribe();
  }
  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
