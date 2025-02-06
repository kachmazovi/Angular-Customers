import { Injectable, signal } from '@angular/core';
import { CurrentStates } from '../enums/enums';
import { CustomersRestService } from '../../core/services/customers.rest.service';
import { Observable } from 'rxjs';
import { ICustomers } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public currentState = signal(CurrentStates.LOGIN);
  public showSpinner = signal(false);
  public loggedCustomer = signal<ICustomers>({} as ICustomers);
  public currentCustomer = signal<ICustomers>({} as ICustomers);

  constructor(private customersRest: CustomersRestService) {}

  public getCustomers(): Observable<ICustomers[]> {
    return this.customersRest.getCustomers();
  }

  public createCustomer(customer: ICustomers): Observable<ICustomers> {
    return this.customersRest.createCustomer(customer);
  }

  public updateCustomer(customer: ICustomers): Observable<ICustomers> {
    return this.customersRest.updateCustomer(customer);
  }

  public deleteCustomer(id: number): Observable<ICustomers> {
    return this.customersRest.deleteCustomer(id);
  }
}
