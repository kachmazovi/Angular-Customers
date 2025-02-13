import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { currentCustomerResolver } from './current-customer.resolver';

describe('currentCustomerResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => currentCustomerResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
