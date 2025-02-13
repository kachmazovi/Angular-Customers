import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { Observable } from 'rxjs';
import { ICustomers } from '../../shared/interfaces/interfaces';

export const currentCustomerResolver: ResolveFn<Observable<ICustomers>> = (
  route,
  state
) => {
  const userServ = inject(UserService);
  const currentCustomer = userServ.getCustomerById(route.params['id']);

  return currentCustomer;
};
