import { Pipe, PipeTransform } from '@angular/core';
import { ICustomers } from './customers.interface';

@Pipe({
  name: 'customer',
})
export class CustomerPipe implements PipeTransform {
  transform(users: ICustomers[] | null): ICustomers[] {
    console.log(users);
    if (users) {
      const newUsers = users.map((user) => ({
        id: user.id,
        name: user.name.toUpperCase(),
        surName: user.surName.toUpperCase(),
      }));

      return newUsers;
    }
    return [];
  }
}
