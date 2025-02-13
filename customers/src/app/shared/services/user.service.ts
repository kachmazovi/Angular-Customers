import { Injectable, signal } from '@angular/core';
import { CustomersRestService } from '../../core/services/customers.rest.service';
import { Observable } from 'rxjs';
import { ICustomers } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public showSpinner = signal(false);
  public loggedCustomer = signal<ICustomers | null>(null);

  constructor(private customersRest: CustomersRestService) {}

  public getCustomers(): Observable<ICustomers[]> {
    return this.customersRest.getCustomers();
  }

  public getCustomerById(id: number): Observable<ICustomers> {
    return this.customersRest.getCustomerById(id);
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
