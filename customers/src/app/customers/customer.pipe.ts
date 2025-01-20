import { Pipe, PipeTransform } from '@angular/core';
import { ICustomers } from './customers.interface';

@Pipe({
  name: 'customer',
})
export class CustomerPipe implements PipeTransform {
  transform(users: ICustomers[]): ICustomers[] {
    const newUsers = users.map((user) => ({
      id: user.id,
      name: user.name.toUpperCase(),
      surName: user.surName.toUpperCase(),
    }));

    return newUsers;
  }
}
