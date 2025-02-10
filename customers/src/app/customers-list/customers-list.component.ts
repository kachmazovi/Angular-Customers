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
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-customers-list',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.scss',
})
export class CustomersListComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  public customers$ = new BehaviorSubject<ICustomers[]>([]);

  constructor(public userService: UserService, private router: Router) {}

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
    this.router.navigateByUrl('/login');
  }

  public chooseUser(id: number): void {
    // this.router.navigateByUrl(`/current-customer/${id}`);
    // this.router.navigate(['/current-customer', id]);
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
