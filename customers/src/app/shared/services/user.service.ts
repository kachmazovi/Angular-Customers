import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public currentState = signal('currentCustomer');

  constructor() {}
}
