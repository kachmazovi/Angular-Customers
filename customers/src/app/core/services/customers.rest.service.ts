import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrls } from '../apiUrls';
import { Observable } from 'rxjs';
import { ICustomers } from '../../shared/interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CustomersRestService {
  constructor(private http: HttpClient) {}

  public getCustomers(): Observable<ICustomers[]> {
    return this.http.get<ICustomers[]>(apiUrls.customers);
  }

  public getCustomerById(id: number): Observable<ICustomers> {
    return this.http.get<ICustomers>(`${apiUrls.customers}/${id}`);
  }

  public createCustomer(customer: ICustomers): Observable<ICustomers> {
    return this.http.post<ICustomers>(apiUrls.customers, customer);
  }

  public updateCustomer(customer: ICustomers): Observable<ICustomers> {
    return this.http.put<ICustomers>(
      `${apiUrls.customers}/${customer.id}`,
      customer
    );
  }

  public deleteCustomer(id: number): Observable<ICustomers> {
    return this.http.delete<ICustomers>(`${apiUrls.customers}/${id}`);
  }
}
