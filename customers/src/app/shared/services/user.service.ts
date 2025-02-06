import { Injectable, signal } from '@angular/core';
import { CurrentStates } from '../enums/enums';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public currentState = signal(CurrentStates.LOGIN);

  constructor() {}
}
