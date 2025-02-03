import { Pipe, PipeTransform } from '@angular/core';
import { ICustomers } from './customers.interface';

@Pipe({
  name: 'customerId'
})
export class CustomerIdPipe implements PipeTransform {

  transform(customers: ICustomers[] | null): ICustomers[] {
    if (customers) {
      return customers.map((customer, index) => {
        customer.id = index + 1;
        return customer;
      });
    }
    return [];
  }

}
